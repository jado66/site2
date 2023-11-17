import OpenAI from 'openai';
import { generateResponse } from './generate-response';
import apiRequestOriginValidation from 'src/utils/api-request-origin-validation';

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY }); // replace with your own API key

export async function POST(request) {
  if (!apiRequestOriginValidation(request)) {
    return new Response(JSON.stringify({ error: 'Invalid origin' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const { threadId, assistantId, message } = await request.json();

  try {
    const responseObject = await generateResponse(openai, assistantId, threadId, message);

    return new Response(JSON.stringify(responseObject), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error); // this will print any error that occurs
    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
