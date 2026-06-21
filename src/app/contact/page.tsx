import { Metadata } from 'next';
import { personalInfo } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Ponte en contacto con ${personalInfo.name}. ¿Tienes un proyecto en mente? Hablemos.`,
  openGraph: {
    title: 'Contacto - Portafolio',
    description: `Ponte en contacto con ${personalInfo.name}`,
    images: ['/og-image.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl font-bold text-gradient mb-4">Contacto</h1>
        <p className="text-lg text-dim mb-12">
          ¿Tienes un proyecto en mente o quieres colaborar? Envíame un mensaje.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold neon-cyan">Información</h2>
            <a href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 link-neon"
            >
              <span className="font-display text-sm">Email:</span>
              {personalInfo.email}
            </a>
            <a href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 link-neon"
            >
              <span className="font-display text-sm">GitHub:</span>
              {personalInfo.github}
            </a>
            <a href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 link-neon"
            >
              <span className="font-display text-sm">LinkedIn:</span>
              {personalInfo.linkedin}
            </a>
          </div>

          {/* Formulario */}
          <div className="panel p-6">
            <h2 className="font-display text-2xl font-bold neon-pink mb-4">Envíame un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}