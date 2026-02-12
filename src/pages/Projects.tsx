import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, allTags, allStatuses } from '../data/projects'
import type { Project } from '../data/projects'

export default function Projects() {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [activeStatus, setActiveStatus] = useState<Project['status'] | 'all'>('all')

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filtered = projects.filter((p) => {
    const tagMatch = activeTags.length === 0 || p.tags.some((t) => activeTags.includes(t))
    const statusMatch = activeStatus === 'all' || p.status === activeStatus
    return tagMatch && statusMatch
  })

  return (
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-12">
      {/* Filter bar */}
      <div className="mb-10 flex flex-col gap-4">
        {/* Tag filters */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-lavender/50">
            Filter by tag
          </p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  activeTags.includes(tag)
                    ? 'bg-pink text-dark-purple'
                    : 'bg-light-purple/60 text-lavender hover:bg-light-purple'
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTags.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveTags([])}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-lavender/50 underline underline-offset-2 hover:text-lavender transition-colors"
              >
                Clear tags
              </button>
            )}
          </div>
        </div>

        {/* Status filters */}
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-lavender/50">
            Filter by status
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveStatus('all')}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeStatus === 'all'
                  ? 'bg-pink text-dark-purple'
                  : 'bg-light-purple/60 text-lavender hover:bg-light-purple'
              }`}
            >
              All
            </button>
            {allStatuses.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setActiveStatus(status)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium capitalize transition-colors ${
                  activeStatus === status
                    ? 'bg-pink text-dark-purple'
                    : 'bg-light-purple/60 text-lavender hover:bg-light-purple'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-lg text-lavender/50">No projects match the current filters.</p>
          <button
            type="button"
            onClick={() => {
              setActiveTags([])
              setActiveStatus('all')
            }}
            className="mt-4 text-sm text-pink underline underline-offset-2 hover:text-light-pink"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
