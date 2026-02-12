export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  status: 'completed' | 'in-progress' | 'planned'
  image: string
  githubUrl: string
  blogContent?: {
    heading: string
    intro: string
    sections: { title: string; text: string }[]
    conclusion: string
  }
}

export const projects: Project[] = [
  {
    slug: 'simon-says',
    title: 'Simon says game',
    description:
      'I recreated the classic simon says game (electronic version) with an arduino uno.',
    tags: ['arduino', 'c/c++'],
    status: 'completed',
    image: 'https://raw.githubusercontent.com/LisaWerner856/lisawerner856.github.io/main/image/arduino1.jpg',
    githubUrl: 'https://github.com/LisaWerner856',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio website',
    description: 'The Repository for my website.',
    tags: ['html', 'css/tailwind'],
    status: 'completed',
    image: 'https://raw.githubusercontent.com/LisaWerner856/lisawerner856.github.io/main/image/portfoliowebsite-screenshot.png',
    githubUrl: 'https://github.com/LisaWerner856/lisawerner856.github.io',
    blogContent: {
      heading: 'How I Built My Website from Scratch',
      intro: 'Building my website from scratch was a rewarding process. Here\'s a quick breakdown:',
      sections: [
        {
          title: 'Planning and Design',
          text: 'I began by sketching a wireframe and planning the site\'s structure for an intuitive user experience.',
        },
        {
          title: 'Writing HTML',
          text: 'I wrote clean, semantic HTML to organize the content and ensure accessibility and SEO.',
        },
        {
          title: 'Styling with Tailwind CSS',
          text: 'I used Tailwind CSS, a utility-first framework, to style the site. It allowed me to quickly customize elements like typography, colors, and spacing without writing extensive custom CSS.',
        },
        {
          title: 'Interactivity',
          text: 'I added simple JavaScript for features like modals and smooth scrolling, keeping the site lightweight and user-friendly.',
        },
        {
          title: 'Optimization and Testing',
          text: 'I optimized the site for speed and tested it across browsers and devices for compatibility.',
        },
        {
          title: 'Launching',
          text: 'Once everything was polished, I deployed the site using GitHub Pages, making it live for everyone to see.',
        },
      ],
      conclusion:
        'Building this site from scratch allowed me to create a unique, responsive experience that reflects my vision. I\'m proud of the final result!',
    },
  },
  {
    slug: 'text-adventure-ds9',
    title: 'TextAdventure Deep Space Nine',
    description:
      'A console application textbased rpg, inspired by the classic game Zork. The setting is the Deep Space Nine space station. You have just graduated from Starfleet academy, ready to start your first assignment.',
    tags: ['c#'],
    status: 'completed',
    image: 'https://raw.githubusercontent.com/LisaWerner856/lisawerner856.github.io/main/image/TextAdventure-DS9-screenshot.png',
    githubUrl: 'https://github.com/LisaWerner856',
  },
]

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
export const allStatuses: Project['status'][] = ['completed', 'in-progress', 'planned']
