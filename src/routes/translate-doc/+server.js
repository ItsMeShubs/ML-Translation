// src/routes/translate-doc/+server.js
import { error } from '@sveltejs/kit';


const DEEPL_API_KEY = process.env.api_key; // Ensure this is set in your .env file

export async function POST({ request }) {
    const formData = await request.formData();
    const documentFile = formData.get('document');
    const targetLanguage = formData.get('targetLanguage');

    // Validate input
    if (!documentFile || !targetLanguage) {
        throw error(400, 'Missing document or target language');
    }

    // DeepL API URL for document translation
    const url = `https://api-free.deepl.com/v2/document`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`
        },
        body: formData
    });

    if (response.ok) {
        const result = await response.json();
        return new Response(JSON.stringify(result), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } else {
        // Handle errors, such as rate limits or invalid inputs
        throw error(response.status, `Translation submission failed: ${response.statusText}`);
    }
}
