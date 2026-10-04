import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'edge'


export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      enquiryType,
      subject,
      message,
    } = body

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!resendApiKey || !toEmail || !fromEmail) {
      return NextResponse.json(
        { message: 'Server email configuration is missing.' },
        { status: 500 }
      )
    }

    const resend = new Resend(resendApiKey)

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0F1F3D;">
        <h2 style="margin-bottom: 20px;">New Website Enquiry</h2>

        <p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Last Name:</strong> ${escapeHtml(lastName)}</p>
        <p><strong>Company Name:</strong> ${escapeHtml(company || '-')}</p>
        <p><strong>Email Address:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || '-')}</p>
        <p><strong>Enquiry Type:</strong> ${escapeHtml(
          enquiryType || 'General Enquiry'
        )}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

        <div style="margin-top: 20px;">
          <p><strong>Message:</strong></p>
          <div style="padding: 12px; background: #f7f7f7; border-radius: 8px; white-space: pre-wrap;">
${escapeHtml(message)}
          </div>
        </div>
      </div>
    `

    const { error } = await resend.emails.send({
      from: `Talcora Website <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Website Enquiry: ${subject}`,
      html: emailHtml,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { message: 'Failed to send enquiry.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Enquiry sent successfully.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
        { status: 500 }
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}


// import { NextResponse } from 'next/server'
// import { Resend } from 'resend'


// export const runtime = 'edge'


// export async function POST(req: Request) {
//   try {
//     const body = await req.json()

//     const {
//       firstName,
//       lastName,
//       company,
//       email,
//       phone,
//       enquiryType,
//       subject,
//       message,
//     } = body

//     if (!firstName || !lastName || !email || !subject || !message) {
//       return NextResponse.json(
//         { message: 'Please fill in all required fields.' },
//         { status: 400 }
//       )
//     }

//     const resendApiKey = process.env.RESEND_API_KEY
//     const toEmail = process.env.CONTACT_TO_EMAIL
//     const fromEmail = process.env.CONTACT_FROM_EMAIL

//     if (!resendApiKey || !toEmail || !fromEmail) {
//       return NextResponse.json(
//         { message: 'Server email configuration is missing.' },
//         { status: 500 }
//       )
//     }

//     const resend = new Resend(resendApiKey)

//     const emailHtml = `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0F1F3D;">
//         <h2 style="margin-bottom: 20px;">New Website Enquiry</h2>

//         <p><strong>First Name:</strong> ${escapeHtml(firstName)}</p>
//         <p><strong>Last Name:</strong> ${escapeHtml(lastName)}</p>
//         <p><strong>Company Name:</strong> ${escapeHtml(company || '-')}</p>
//         <p><strong>Email Address:</strong> ${escapeHtml(email)}</p>
//         <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || '-')}</p>
//         <p><strong>Enquiry Type:</strong> ${escapeHtml(
//           enquiryType || 'General Enquiry'
//         )}</p>
//         <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

//         <div style="margin-top: 20px;">
//           <p><strong>Message:</strong></p>
//           <div style="padding: 12px; background: #f7f7f7; border-radius: 8px; white-space: pre-wrap;">
// ${escapeHtml(message)}
//           </div>
//         </div>
//       </div>
//     `

//     const { error } = await resend.emails.send({
//       from: `Talcora Website <${fromEmail}>`,
//       to: [toEmail],
//       replyTo: email,
//       subject: `Website Enquiry: ${subject}`,
//       html: emailHtml,
//     })

//     if (error) {
//       console.error('Resend error:', error)
//       return NextResponse.json(
//         { message: 'Failed to send enquiry.' },
//         { status: 500 }
//       )
//     }

//     return NextResponse.json(
//       { message: 'Enquiry sent successfully.' },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error('API error:', error)
//     return NextResponse.json(
//       { message: 'Something went wrong. Please try again.' },
//       { status: 500 }
//     )
//   }
// }

// function escapeHtml(value: string) {
//   return value
//     .replaceAll('&', '&amp;')
//     .replaceAll('<', '&lt;')
//     .replaceAll('>', '&gt;')
//     .replaceAll('"', '&quot;')
//     .replaceAll("'", '&#039;')
// }