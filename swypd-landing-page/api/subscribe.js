// /api/subscribe.js
import fetch from 'node-fetch';

async function parseJSONSafe(response) {
    try {
        const text = await response.text(); // read the body once
        return text ? JSON.parse(text) : {}; // parse only if not empty
    } catch {
        return {}; // fallback if invalid JSON
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
    }

    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: 'A valid email address is required.' });
    }

    const listId = 3; // replace with your list ID
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

        let contactData = {};
        if (checkResponse.ok) {
            contactData = await parseJSONSafe(checkResponse);

            if (contactData.emailBlacklisted) {
                return res.status(403).json({
                    error: 'This email is blacklisted and cannot be subscribed.',
                });
            }
        }

        // Subscribe or resubscribe
        const subscribeResponse = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY,
            },
            body: JSON.stringify(data),
        });

        const responseData = await parseJSONSafe(subscribeResponse);

        if (subscribeResponse.ok) {
            return res.status(200).json({
                message: responseData.message || 'Successfully subscribed to the newsletter!',
            });
        } else {
            console.error('Brevo API error:', responseData);

            if (responseData.code === 'duplicate_parameter') {
                return res.status(409).json({ error: 'This email is already subscribed.' });
            } else {
                return res.status(400).json({
                    error: responseData.message || 'Failed to subscribe. Please try again later.',
                });
            }
        }
    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({
            error: 'Internal server error. Please try again later.',
        });
    }
}
