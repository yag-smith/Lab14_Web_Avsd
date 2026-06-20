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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-12">
          ¿Tienes un proyecto en mente o quieres colaborar? Envíame un mensaje.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Información</h2>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <span className="font-semibold">Email:</span>
              {personalInfo.email}
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <span className="font-semibold">GitHub:</span>
              {personalInfo.github}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
            >
              <span className="font-semibold">LinkedIn:</span>
              {personalInfo.linkedin}
            </a>
          </div>

          {/* Formulario */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Envíame un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}