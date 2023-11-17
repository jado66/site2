const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;

export async function GET() {
  const response = new Response(JSON.stringify({ key: OPEN_AI_API_KEY }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
}
