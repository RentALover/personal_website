import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'

const title = '个人简介'
const description = '我是张钰钊（YJ），目前是新加坡国立大学的一名学生。热爱编程、设计和创新，致力于在技术领域不断探索和学习。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function PersonalInfoPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Personal Information
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>Education</h2>
        <ul>
          <li>
            <b>National University of Singapore (NUS)</b>
            <ul>
              <li>Bachelor of Computing in Computer Science</li>
              <li>Expected Graduation: 2025</li>
              <li>Relevant Coursework: Data Structures and Algorithms, Software Engineering, Database Systems</li>
            </ul>
          </li>
        </ul>

        <h2>Technical Skills</h2>
        <ul>
          <li>
            <b>Programming Languages</b>: Java, Python, JavaScript/TypeScript, C++
          </li>
          <li>
            <b>Web Development</b>: React, Next.js, Node.js, HTML/CSS
          </li>
          <li>
            <b>Tools & Technologies</b>: Git, Docker, AWS, MongoDB
          </li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>
            <b>Personal Website</b>
            <ul>
              <li>Built with Next.js, TypeScript, and Tailwind CSS</li>
              <li>Features responsive design and dark mode support</li>
            </ul>
          </li>
          {/* Add more projects as needed */}
        </ul>

        <h2>Experience</h2>
        <ul>
          <li>
            <b>Software Engineering Intern</b>
            <ul>
              <li>Developed and maintained web applications using modern technologies</li>
              <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
            </ul>
          </li>
          {/* Add more experiences as needed */}
        </ul>

        <h2>Interests</h2>
        <ul>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Web Development and Design</li>
          <li>Open Source Software</li>
          <li>Problem Solving and Algorithm Design</li>
        </ul>

        <h2>Languages</h2>
        <ul>
          <li>Chinese (Native)</li>
          <li>English (Professional)</li>
        </ul>
      </article>
    </Container>
  )
}
