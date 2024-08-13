import nodemailer, { Transporter } from 'nodemailer'

// Define the interface for the function's input
interface SendMailOptions {
  email: string
  subject: string
  text: string
  html: string
}

const transporter: Transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'maddison53@ethereal.email',
    pass: process.env.SMTP_PASS || 'jn7jnAPss4f63QBp6D',
  },
})

export default async function sendEmail({
  email,
  subject,
  text,
  html,
}: SendMailOptions): Promise<void> {
  try {
    const info = await transporter.sendMail({
      from: '"Maddison Foo Koch 👻" <no-reply@signup.foundergpt>',
      to: email,
      subject: subject,
      text: text,
      html: html,
    })

    console.log('Message sent: %s', info.messageId)
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Failed to send email')
  }
}
