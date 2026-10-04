import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getJob } from '@/lib/jobs'

export const runtime = 'edge'

const MAX_CV_BYTES = 5 * 1024 * 1024
const CV_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const field = (name: string) => String(form.get(name) ?? '').trim()

    const jobSlug = field('job')
    const fullName = field('fullName')
    const email = field('email')
    const location = field('location')
    const linkedin = field('linkedin')
    const coverNote = field('coverNote')
    const cv = form.get('cv')

    const job = getJob(jobSlug)
    if (!job) {
      return NextResponse.json({ message: 'This role is no longer open.' }, { status: 400 })
    }
    if (!fullName || !email || !(cv instanceof File) || cv.size === 0) {
      return NextResponse.json({ message: 'Please add your name, email and CV.' }, { status: 400 })
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json({ message: 'Your CV must be 5 MB or smaller.' }, { status: 400 })
    }
    if (cv.type && !CV_TYPES.includes(cv.type)) {
      return NextResponse.json({ message: 'Please upload your CV as a PDF or Word document.' }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL
    if (!resendApiKey || !toEmail || !fromEmail) {
      return NextResponse.json({ message: 'Server email configuration is missing.' }, { status: 500 })
    }

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0A1B2B;">
        <h2 style="margin-bottom: 4px;">New application: ${escapeHtml(job.title)}</h2>
        <p style="margin-top: 0; color: #5a6675;">${escapeHtml(job.location)} · ${escapeHtml(job.type)}</p>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Current location:</strong> ${escapeHtml(location || '-')}</p>
        <p><strong>LinkedIn / portfolio:</strong> ${escapeHtml(linkedin || '-')}</p>
        <p><strong>Cover note:</strong></p>
        <div style="padding: 12px; background: #f7f5f0; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(coverNote || '-')}</div>
        <p style="color: #5a6675;">CV attached: ${escapeHtml(cv.name)}</p>
      </div>
    `

    const { error } = await new Resend(resendApiKey).emails.send({
      from: `Talcora Careers <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Application: ${job.title} — ${fullName}`,
      html,
      attachments: [{ filename: cv.name || 'cv.pdf', content: toBase64(await cv.arrayBuffer()) }],
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ message: 'We could not send your application. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Application sent.' }, { status: 200 })
  } catch (error) {
    console.error('Careers API error:', error)
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

function toBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.length; i += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
  }
  return btoa(binary)
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
