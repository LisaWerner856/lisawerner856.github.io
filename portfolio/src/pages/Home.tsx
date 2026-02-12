import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects[0]

  return (
    <div className="relative z-10">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-32">
        <h1 className="font-display text-4xl text-white md:text-5xl text-balance">
          {'Welcome to my Website'}
        </h1>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="https://github.com/LisaWerner856"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-pink underline underline-offset-2 hover:text-light-pink transition-colors"
          >
            Check out my projects on github
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="https://cr4zypumpk1n.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-pink underline underline-offset-2 hover:text-light-pink transition-colors"
          >
            Check out my itch.io page
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Featured Project */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-8 font-display text-2xl text-white">Featured Project</h2>
        <div className="overflow-hidden rounded-2xl bg-light-purple/40 backdrop-blur-sm border border-lavender/10 shadow-purple">
          <div className="aspect-video overflow-hidden">
            <img
              src={featured.image}
              alt={`Screenshot of ${featured.title}`}
              className="h-full w-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <h3 className="font-display text-xl text-white">{featured.title}</h3>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-pink/20 px-3 py-0.5 text-xs font-medium text-pink"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-white">
              {featured.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={featured.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-pink/20 px-4 py-2 text-sm font-medium text-pink transition-colors hover:bg-pink/30"
              >
                Github Repository
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <Link
                to="/projects"
                className="text-sm text-lavender/60 underline underline-offset-2 hover:text-lavender transition-colors"
              >
                View all projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
