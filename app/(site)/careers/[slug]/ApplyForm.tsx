'use client'

import { useState } from 'react'
import Icon from '@/components/site/Icon'

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; message?: string }

const MAX_CV_BYTES = 5 * 1024 * 1024

export default function ApplyForm({ job }: { job: string }) {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const cv = data.get('cv')
    if (cv instanceof File && cv.size > MAX_CV_BYTES) {
      setStatus({ kind: 'error', message: 'Your CV must be 5 MB or smaller.' })
      return
    }
    setStatus({ kind: 'sending' })

    try {
      const res = await fetch('/api/careers', { method: 'POST', body: data })
      const json = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(json.message || 'Something went wrong. Please try again.')
      form.reset()
      setStatus({ kind: 'ok', message: 'Thank you. Your application has been sent and our team will be in touch.' })
    } catch (err) {
      setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'Something went wrong.' })
    }
  }

  if (status.kind === 'ok') {
    return (
      <div className="alert alert--ok" role="status">
        {status.message}
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="hidden" name="job" value={job} />
      <div className="field">
        <label htmlFor="fullName">Full name <span>*</span></label>
        <input id="fullName" name="fullName" required autoComplete="name" />
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
        <label htmlFor="location">Current location</label>
        <input id="location" name="location" placeholder="City, country" />
      </div>
      <div className="field full">
        <label htmlFor="linkedin">LinkedIn or portfolio</label>
        <input id="linkedin" name="linkedin" type="url" placeholder="https://" />
      </div>
      <div className="field full">
        <label htmlFor="cv">CV <span>*</span></label>
        <input
          id="cv"
          name="cv"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <p className="form-note">PDF or Word, up to 5 MB.</p>
      </div>
      <div className="field full">
        <label htmlFor="coverNote">Cover note</label>
        <textarea id="coverNote" name="coverNote" placeholder="Tell us briefly why you are a good fit for this role" />
      </div>

      {status.kind === 'error' && (
        <div className="alert alert--error full" role="status">
          {status.message}
        </div>
      )}

      <div className="full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button type="submit" className="btn btn--dark" disabled={status.kind === 'sending'}>
          {status.kind === 'sending' ? 'Sending…' : 'Submit application'}
          <Icon name="arrow" size={18} strokeWidth={2} />
        </button>
      </div>
    </form>
  )
}
