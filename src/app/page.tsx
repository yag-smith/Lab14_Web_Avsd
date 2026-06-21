import Image from 'next/image';
import Link from 'next/link';
import { projects, personalInfo } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="avatar-ring relative w-32 h-32 mx-auto mb-8 rounded-full">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            fill
            className="rounded-full object-cover"
            priority
            sizes="128px"
          />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-4">
          {personalInfo.name}
        </h1>
        <p className="font-display text-xl md:text-2xl neon-cyan mb-6">
          {personalInfo.title}
        </p>
        <p className="text-lg text-dim max-w-2xl mx-auto mb-8">
          {personalInfo.description}
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/projects" className="btn-neon btn-pink">
            Ver Proyectos
          </Link>
          <Link href="/about" className="btn-neon btn-cyan">
            Sobre Mí
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="font-display text-3xl font-bold neon-pink mb-8 text-center">
          Proyectos Destacados
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}