import apiRequestOriginValidation from 'src/utils/api-request-origin-validation';

const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  if (!apiRequestOriginValidation(request)) {
    return new Response(JSON.stringify({ error: 'Invalid origin' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const { email } = await request.json();

    console.log(`Adding ${email} to MailChimp`);

    const response = await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed',
    });

    console.log('Response:' + JSON.stringify(response));

    switch (response.statusCode) {
      case undefined:
        return new Response(JSON.stringify(response), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      default:
        return new Response(JSON.stringify(response), {
          status: response.statusCode,
          headers: {
            'Content-Type': 'application/json',
          },
        });
    }
  } catch (error) {
    console.error(error); // this will print any error that occurs

    if (error.code === 'ETIMEDOUT' || error.code === 'ENOTFOUND') {
      // Handle ETIMEDOUT error here
      return new Response(JSON.stringify(error), {
        status: 408,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (error.status === 400) {
      return new Response(JSON.stringify(error), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
