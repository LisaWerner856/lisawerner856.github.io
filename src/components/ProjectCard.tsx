import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-light-purple/40 backdrop-blur-sm border border-lavender/10 shadow-purple transition-transform hover:scale-[1.02]">
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl text-white">{project.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-pink/20 px-3 py-0.5 text-xs font-medium text-pink"
            >
              {tag}
            </span>
          ))}
          <StatusBadge status={project.status} />
        </div>

        <p className="flex-1 text-sm leading-relaxed text-white">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-pink/20 px-4 py-2 text-sm font-medium text-pink transition-colors hover:bg-pink/30"
          >
            Github Repository
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          {project.blogContent && (
            <Link
              to={`/project/${project.slug}`}
              className="text-sm text-lavender/60 underline underline-offset-2 hover:text-lavender transition-colors"
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: Project['status'] }) {
  const styles: Record<Project['status'], string> = {
    completed: 'bg-green-500/20 text-green-300',
    'in-progress': 'bg-yellow-500/20 text-yellow-300',
    planned: 'bg-lavender/20 text-lavender/60',
  }

  const labels: Record<Project['status'], string> = {
    completed: 'Completed',
    'in-progress': 'In Progress',
    planned: 'Planned',
  }

  return (
    <span className={`rounded-full px-3 py-0.5 text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}
