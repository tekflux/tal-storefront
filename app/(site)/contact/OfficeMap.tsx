'use client'

import { useState } from 'react'
import type { company } from '@/lib/site'

type Office = (typeof company.offices)[number]

export default function OfficeMap({ offices }: { offices: Office[] }) {
  const [active, setActive] = useState(offices[0].id)
  const office = offices.find(o => o.id === active) ?? offices[0]

  return (
    <div className="reveal">
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: 16 }}>
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: 20 }}>
            {office.city}
          </h2>
        </div>
        <div className="tabs" role="group" aria-label="Choose office">
          {offices.map(o => (
            <button key={o.id} type="button" aria-pressed={o.id === active} onClick={() => setActive(o.id)}>
              {o.city.split(',')[0]}
            </button>
          ))}
        </div>
      </div>
      <iframe
        key={office.id}
        className="map-frame"
        src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${office.label}, ${office.city}`}
      />
    </div>
  )
}
