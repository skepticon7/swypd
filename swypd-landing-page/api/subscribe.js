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
        if (checkResponse.ok) {
            const contactData = await checkResponse.json();
            if (contactData.emailBlacklisted) {
                return res.status(403).json({
                    error: 'This email is blacklisted and cannot be subscribed.',
                });
            }
        }

        const subscribeResponse = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
            },
            body: JSON.stringify(data),
        });

        const responseData = await subscribeResponse.json();

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
