import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export default function Header() {
  return (
    <header className="header-neon sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-display text-gradient">
            {personalInfo.name}
          </Link>
          <ul className="flex gap-6 font-display text-sm">
            <li>
              <Link href="/" className="link-neon">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/projects" className="link-neon">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/about" className="link-neon">
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-neon">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}