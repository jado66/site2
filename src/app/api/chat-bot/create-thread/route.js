import { createThread } from './create-thread';

export async function GET() {
  try {
    const thread = await createThread(openai);

    return new Response(JSON.stringify(thread), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch {
    console.error(error); // this will print any error that occurs
    return new Response(JSON.stringify(error), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
