'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Contacto desde el portafolio - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dim mb-1">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-neon w-full px-4 py-2"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dim mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-neon w-full px-4 py-2"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dim mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-neon w-full px-4 py-2 resize-none"
          placeholder="Escribe tu mensaje..."
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!name || !email || !message}
        className="btn-neon btn-pink w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Enviar Mensaje
      </button>
    </div>
  );
}