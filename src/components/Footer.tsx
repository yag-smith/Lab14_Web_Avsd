import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer-neon py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dim text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 font-display text-sm">
            <a href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-neon"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-neon"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`}
              className="link-neon"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}