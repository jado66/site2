import { generateResponse } from './generate-response';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY }); // replace with your own API key

export async function POST(request) {
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
