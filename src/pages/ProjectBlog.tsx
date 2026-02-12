import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectBlog() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project || !project.blogContent) {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        <p className="text-lg text-lavender/50">Project not found.</p>
        <Link
          to="/projects"
          className="mt-4 text-sm text-pink underline underline-offset-2 hover:text-light-pink"
        >
          Back to Projects
        </Link>
      </div>
    )
  }

  const { blogContent } = project

  return (
    <div className="relative z-10 mx-auto max-w-3xl px-6 py-12">
      {/* Back link */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-lavender/60 hover:text-lavender transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      <article className="rounded-2xl bg-light-purple/40 backdrop-blur-sm border border-lavender/10 shadow-purple p-8">
        {/* Header */}
        <h1 className="font-display text-3xl text-lavender">{project.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-pink/20 px-3 py-0.5 text-xs font-medium text-pink"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Image */}
        <div className="mt-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full object-cover"
            crossOrigin="anonymous"
          />
        </div>

        {/* Blog content */}
        <div className="mt-8">
          <h2 className="font-display text-2xl text-lavender">{blogContent.heading}</h2>
          <p className="mt-3 text-sm leading-relaxed text-lavender/70">{blogContent.intro}</p>

          <div className="mt-6 flex flex-col gap-5">
            {blogContent.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-display text-lg text-pink">{section.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-lavender/70">{section.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-lavender/70 italic">
            {blogContent.conclusion}
          </p>
        </div>

        {/* Footer links */}
        <div className="mt-8 flex items-center gap-4 border-t border-lavender/10 pt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-pink/20 px-4 py-2 text-sm font-medium text-pink transition-colors hover:bg-pink/30"
          >
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            to="/projects"
            className="text-sm text-lavender/60 underline underline-offset-2 hover:text-lavender transition-colors"
          >
            Back to Projects
          </Link>
        </div>
      </article>
    </div>
  )
}
