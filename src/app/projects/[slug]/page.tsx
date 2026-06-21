import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/projects" className="link-neon font-display text-sm mb-6 inline-block">
        ← Volver a Proyectos
      </Link>

      <article>
        <h1 className="font-display text-4xl font-bold text-gradient mb-6">
          {project.title}
        </h1>

        <div className="media-neon relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        <p className="text-lg text-dim mb-6">{project.description}</p>

        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold neon-cyan mb-3">
            Tecnologías Utilizadas
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag-neon px-3 py-1 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.demoUrl && (
            <a href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-pink"
            >
              Ver Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-cyan"
            >
              Ver Código
            </a>
          )}
        </div>
      </article>
    </div>
  );
}