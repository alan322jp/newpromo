'use client'
import { useState } from 'react'

export default function HomePage() {
  const [phones, setPhones] = useState('')
  const [text, setText] = useState('')

  const phoneList = phones
    .split(/\s+/)
    .filter(p => p.trim().length > 0)

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">WhatsApp Link Generator</h1>
      <div className="mb-4">
        <textarea
          placeholder="Enter phone numbers (space-separated)..."
          value={phones}
          onChange={e => setPhones(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          rows={3}
        />
        <input
          type="text"
          placeholder="Enter message..."
          value={text}
          onChange={e => setText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <ul className="space-y-2">
        {phoneList.map(phone => (
          <li key={phone}>
            <a
              href={\`https://api.whatsapp.com/send/?phone=852\${phone}&text=\${encodeURIComponent(text)}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Send to {phone}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
