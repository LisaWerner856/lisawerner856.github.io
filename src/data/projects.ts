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
    image: '/image/arduino1.jpg',
    githubUrl: 'https://github.com/LisaWerner856/KD-Microcontroller',
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio website',
    description: 'The Repository for my website.',
    tags: ['html', 'css/tailwind'],
    status: 'in-progress',
    image: '/image/portfoliowebsite-screenshot.png',
    githubUrl: 'https://github.com/LisaWerner856/lisawerner856.github.io',
    blogContent: {
      heading: 'Builind My Website',
      intro: 'The process of building the frontend of my website:',
      sections: [
        {
          title: 'Planning and Design',
          text: 'I began by looking for inspiration. Then, I started designing a wireframe and planning the sites structure in Figma.',
        }, 
        {
          title: 'HTML & CSS (+Tailwind)',
          text: 'I began by building out the wireframe from figm in plain HTML and tailwind. Once that was completed, I moved on to making the mobile version. ',
        }, 
        {
          title: 'Experimenting with React + Vite',
          text: 'After having the HTML and CSS of my site built, I set up a basic React + Vite project and started to recreate my website.',
        }, 
        {
          title: 'Hosting on GithubPages',
          text: 'Lastly, all that was left was to build and deploy the project. (And fix some errors)',
        }
      ],
      conclusion:
        'I re-built this site with react + vite to gain some experience with those technologies. I also used V0 and ChatGPT during this project.',
    },
  },
  {
    slug: 'text-adventure-ds9',
    title: 'TextAdventure Deep Space Nine',
    description:
      'A console application textbased rpg, inspired by the classic game Zork. The setting is the Deep Space Nine space station. You have just graduated from Starfleet academy, ready to start your first assignment.',
    tags: ['c#'],
    status: 'in-progress',
    image: 'public/image/TextAdventure-DS9-screenshot.png',
    githubUrl: 'https://github.com/LisaWerner856/TextbasedAdventure',
  },
  {
    slug: 'wizards-leap',
    title: 'Wizards Leap',
    description:
      'A 2D plattfomer, inspired by Super Mario Bros.',
    tags: ['c#', 'unity3d-engine'],
    status: 'in-progress',
    image: 'public/image/TextAdventure-DS9-screenshot.png',
    githubUrl: 'https://github.com/LisaWerner856/TextbasedAdventure',
  }, 
  {
    slug: 'speed-crash',
    title: 'Speed Crash!',
    description:
      'A semi-realistic racing game. Try not to crash!',
    tags: ['c#', 'unity3d-engine'],
    status: 'in-progress',
    image: 'public/image/TextAdventure-DS9-screenshot.png',
    githubUrl: 'https://github.com/LisaWerner856/TextbasedAdventure',
  },
]

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
export const allStatuses: Project['status'][] = ['completed', 'in-progress', 'planned']
