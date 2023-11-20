const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;

export async function GET() {
  const response = new Response('test', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}
