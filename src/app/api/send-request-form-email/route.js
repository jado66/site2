import apiRequestOriginValidation from 'src/utils/api-request-origin-validation';
import { transporter } from 'src/utils/email/nodemailer-transporter';

const client = require('@mailchimp/mailchimp_marketing');

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request, res) {
  // if (!apiRequestOriginValidation(request)) {
  //   return new Response(JSON.stringify({ error: 'Invalid origin' }), {
  //     status: 403,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }

  const { subject, html } = await request.json();

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      to: 'contact@platinumprogramming.com ', // list of receivers
      subject, // Subject line
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    // Send a JSON response with status code 500 (Internal Server Error) if an error occurs
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
