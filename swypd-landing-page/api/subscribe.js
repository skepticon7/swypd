// /api/subscribe.js
import fetch from 'node-fetch'; // Remove if using native fetch in Node 18+

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }

    const { email } = req.body;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const listId = 3; // Replace with your actual list ID
    const data = {
        email,
        listIds: [listId],
        updateEnabled: true,
    };

    try {
        // Check if contact exists
        const checkResponse = await fetch(
            `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'api-key': process.env.BREVO_API_KEY,
                },
            }
        );
        const jsonedCheck = await checkResponse.json()
        console.log("check response : " + JSON.stringify(jsonedCheck))
        if (checkResponse.ok) {
            const contactData = await checkResponse.json();
            console.log('💡 Contact data from Brevo:', contactData);

            // If the email is blacklisted
            if (contactData.emailBlacklisted) {
                return res.status(403).json({
                    error: 'This email is blacklisted and cannot be subscribed.',
                });
            }

            // If the user is unsubscribed from this list, delete their contact completely
            if (contactData.listIds && !contactData.listIds.includes(listId)) {
                console.log("here true");
                const deleteResponse = await fetch(
                    `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'api-key': process.env.BREVO_API_KEY,
                        },
                    }
                );

                if (deleteResponse.ok) {
                    console.log(`💡 Contact ${email} removed from Brevo completely.`);
                    return res.status(200).json({
                        message:
                            'Your previous subscription has been removed. You can subscribe again.',
                    });
                } else {
                    console.error('Failed to delete contact:', await deleteResponse.text());
                    return res.status(500).json({
                        error: 'Failed to remove unsubscribed email. Please try again later.',
                    });
                }
            }
        }

        // Subscribe or resubscribe the contact
        const subscribeResponse = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
            },
            body: JSON.stringify(data),
        });

        let responseData = {};
        try {
            responseData = await subscribeResponse.json();
        } catch {
            // Response might be empty
        }

        if (subscribeResponse.ok) {
            const message =
                responseData.message || 'Successfully subscribed to the newsletter!';
            res.status(200).json({ message });
        } else {
            console.error('Brevo API error:', responseData);

            if (responseData.code === 'duplicate_parameter') {
                res.status(409).json({ error: 'This email is already subscribed.' });
            } else {
                res.status(400).json({
                    error: responseData.message || 'Failed to subscribe. Please try again later.',
                });
            }
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
}
