


import dotenv from 'dotenv';
dotenv.config();

//API Post function
export async function POST({request}){

    //Get API Key 
    const DEEPL_API_KEY = process.env.api_key; 
    console.log("This is API KEY: " + DEEPL_API_KEY);
    //Get request 
    const body = await request.json(); 
    const {text, targetLang = 'EN'} = body; 
    
    try {
        const response = await fetch('https://api-free.deepl.com/v2/translate', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`,
            }, 
            body: `text=${encodeURIComponent(text)}&target_lang=${targetLang}`

        });

        if (!response.ok){
            throw new Error('Failed to fetch translation');

        }

        const data = await response.json();
        console.log(data);
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    }
    catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }



}