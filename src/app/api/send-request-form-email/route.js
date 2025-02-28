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

  const { subject, formData } = await request.json();

  // Format the date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  // Create a more visually appealing HTML email template
  const generateEmailHTML = (data) => {
    // Extract all form fields into table rows
    const formRows = Object.entries(data)
      .map(([key, value]) => {
        // Format the key to be more readable (convert camelCase to Title Case)
        const formattedKey = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase());

        // Handle different types of values
        let displayValue = value;
        if (typeof value === 'boolean') {
          displayValue = value ? 'Yes' : 'No';
        } else if (value === null || value === undefined) {
          displayValue = '-';
        } else if (typeof value === 'object') {
          displayValue = JSON.stringify(value);
        }

        return `
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">${formattedKey}</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${displayValue}</td>
          </tr>
        `;
      })
      .join('');

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${subject}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4a6da7; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
          .logo { max-width: 150px; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Request Form</h2>
            <p>Submitted on ${formattedDate}</p>
          </div>
          
          <div class="content">
            <p>A new contact request has been submitted through your website. Here are the details:</p>
            
            <table>
              ${formRows}
            </table>
            
            <p style="margin-top: 20px;">Please respond to this inquiry at your earliest convenience.</p>
          </div>
          
          <div class="footer">
            <p>This is an automated email from your website contact form.</p>
            <p>© ${currentDate.getFullYear()} Platinum Programming. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  };

  try {
    // Generate the HTML for the email
    const emailHTML = generateEmailHTML(formData);

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      to: 'contact@platinumprogramming.com', // list of receivers (removed trailing space)
      subject: `${subject} - ${formData.name || 'New Contact'}`, // Include the person's name in the subject if available
      html: emailHTML, // html body
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
