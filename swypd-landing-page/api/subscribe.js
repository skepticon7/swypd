// /api/subscribe.js
import fetch from 'node-fetch'; // Remove if using native fetch

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }

    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const data = {
        email: email,
        listIds: [3], // replace with your actual list ID
        updateEnabled: true,
    };

    try {
        // Check if contact exists
        const checkContactResponse = await fetch(
            `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'api-key': process.env.BREVO_API_KEY,
                },
            }
        );

        if (checkContactResponse.ok) {
            const contactData = await checkContactResponse.json();
            console.log(contactData);
            // If blacklisted, resubscribe
            if (contactData.emailBlacklisted) {
                const resubscribeResponse = await fetch('https://api.brevo.com/v3/contacts', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'api-key': process.env.BREVO_API_KEY,
                    },
                    body: JSON.stringify(data),
                });

                if (resubscribeResponse.ok) {
                    return res.status(200).json({ message: 'Email was blacklisted, but successfully resubscribed!' });
                } else {
                    let errorData = {};
                    try {
                        errorData = await resubscribeResponse.json();
                    } catch {
                        // No JSON body
                        errorData.message = 'Failed to resubscribe.';
                    }
                    console.error('Brevo API error (resubscribe):', errorData);
                    return res.status(400).json({ error: errorData.message || 'Failed to resubscribe.' });
                }
            }
        }

        // Normal subscribe
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
            // No JSON body
        }

        if (subscribeResponse.ok) {
            res.status(200).json({ message: 'Successfully subscribed to the newsletter!' });
        } else {
            console.error('Brevo API error:', responseData);
            if (responseData.code === 'duplicate_parameter') {
                res.status(409).json({ error: 'This email is already subscribed.' });
            } else {
                res.status(400).json({ error: responseData.message || 'Failed to subscribe. Please try again later.' });
            }
        }

    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
}
