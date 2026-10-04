'use client'

import { useState } from 'react'
import Icon from '@/components/site/Icon'

const enquiryTypes = [
  'Buy from Talcora (export enquiry)',
  'Import & procurement request',
  'Freight & logistics',
  'Supplier / partnership',
  'General enquiry',
]

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; message?: string }

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus({ kind: 'sending' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.message || 'Something went wrong. Please try again.')
      form.reset()
      setStatus({ kind: 'ok', message: 'Thank you. Your enquiry has been sent and our team will reply shortly.' })
    } catch (err) {
      setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'Something went wrong.' })
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="firstName">First name <span>*</span></label>
        <input id="firstName" name="firstName" required autoComplete="given-name" />
      </div>
      <div className="field">
        <label htmlFor="lastName">Last name <span>*</span></label>
        <input id="lastName" name="lastName" required autoComplete="family-name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email <span>*</span></label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="enquiryType">Enquiry type</label>
        <select id="enquiryType" name="enquiryType" defaultValue={enquiryTypes[0]}>
          {enquiryTypes.map(t => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="subject">Subject <span>*</span></label>
        <input id="subject" name="subject" required placeholder="e.g. 2 × 40ft sesame seeds, CIF Rotterdam" />
      </div>
      <div className="field full">
        <label htmlFor="message">Message <span>*</span></label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Product, specification, quantity, packaging, destination and timeline"
        />
      </div>

      {(status.kind === 'ok' || status.kind === 'error') && (
        <div className={`alert full ${status.kind === 'ok' ? 'alert--ok' : 'alert--error'}`} role="status">
          {status.message}
        </div>
      )}

      <div className="full" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, justifyContent: 'space-between' }}>
        <p className="form-note">We only use your details to respond to this enquiry.</p>
        <button type="submit" className="btn btn--dark" disabled={status.kind === 'sending'}>
          {status.kind === 'sending' ? 'Sending…' : 'Send enquiry'}
          <Icon name="arrow" size={18} strokeWidth={2} />
        </button>
      </div>
    </form>
  )
}
