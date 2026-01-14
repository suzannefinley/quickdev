import Image from 'next/image';
import type { Metadata } from 'next';
import { SERVER_URL, APP_DESCRIPTION } from '@/lib/constants';

import { CircleCheck } from 'lucide-react';

import bg from '@/public/images/hero.jpg';
// import {
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaGithub,
//   FaX,
//   FaDownload
// } from 'react-icons/fa6';

import Header from '@/components/Header';
import HeroCarousel from '@/components/HeroCarousel';
//import ProjectCarousel from '@/components/ProjectCarousel';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

export async function generateMetadata(): Promise<Metadata> {
  try {
    return {
      title: 'QuickDev Solutions|Home of dgResumes',
      description: APP_DESCRIPTION,
      keywords:
        'full-stack web development, QuickDev Solutions, digital resume, online resume, portfolio, cv, professional profile',
      authors: [
        {
          name: 'QuickDev Solutions',
          url: SERVER_URL
        }
      ],
      creator: 'QuickDev Solutions',
      publisher: 'QuickDev Solutions',
      icons: {
        icon: '/images/logos/icons/favicon.svg',
        shortcut: '/images/logos/icons/favicon.svg',
        apple: '/images/logos/icons/favicon.svg'
      },
      openGraph: {
        title: 'QuickDev Solutions - Home of dgResumes',
        description: APP_DESCRIPTION,
        url: SERVER_URL,
        siteName: 'QuickDev Solutions'
      },
      metadataBase: new URL(SERVER_URL)
    };
  } catch (error) {
    console.error('Error generating default metadata:', error);
    return {
      title: 'QuickDev Solutions',
      description: APP_DESCRIPTION
    };
  }
}

interface ITemplate {
  name: string;
  image: string;
  demourl: string;
}

interface IProject {
  name: string;
  role: string;
  description: string;
  image: string;
  projecturl: string;
  technologies: string[];
}

const projects: IProject[] = [
  {
    name: 'dgResumes',
    role: 'Developer',
    technologies: [
      'Next.js 14, 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 3, 4',
      'Shadcn UI',
      'Drizzle ORM',
      'PostgreSQL',
      'Node.js',
      'Better-Auth',
      'Stripe',
      'zod'
    ],
    description:
      'A digital resume builder that allows users to create, customize, and share professional online resumes with ease.',
    image: '/images/dgresumes-screenshot.jpg',
    projecturl: 'https://dgresumes.com'
  },
  {
    name: 'Navy template for dgResumes',
    role: 'Developer',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Shadcn UI',
      'Drizzle ORM',
      'PostgreSQL',
      'zod'
    ],
    description:
      'A professional navy blue themed template for dgResumes that offers a clean and modern design for users to showcase their skills and experience.',
    image: '/images/demo-navy-screenshot.jpg',
    projecturl: 'https://demo-navy.dgresume.com'
  },
  {
    name: "God's Awesome Word",
    role: 'Developer',
    technologies: [
      'Wordpress',
      'Divi',
      'PHP',
      'JavaScript',
      'HTML5',
      'CSS3'
    ],
    description:
      "A faith-based website providing inspirational content based on God's Word to uplift and encourage believers in their spiritual journey.",
    image: '/images/godsawesomeword-screenshot.jpg',
    projecturl: 'https://godsawesomeword.org'
  }
];

const templates: ITemplate[] = [
  {
    name: 'SimpleBlue',
    image: '/images/demo-simpleblue-screenshot.jpg',
    demourl: 'https://demo-simpleblue.dgresume.com'
  },
  {
    name: 'Navy',
    image: '/images/demo-navy-screenshot.jpg',
    demourl: 'https://demo-navy.dgresume.com'
  },
  {
    name: 'Ocean',
    image: '/images/demo-ocean-screenshot.jpg',
    demourl: 'https://demo-ocean.dgresume.com'
  }
];

const nextExpertise: string[] = [
  'Full-Stack Web Development',
  'Next.js v14, v15',
  'React 19',
  'React Hook Forms',
  'React Email',
  'Tailwind CSS v3, v4',
  'PostgreSQL',
  'Drizzle',
  'Shadcn UI',
  'Stripe',
  'Better-Auth',
  'Zod',
  'TypeScript',
  'Vercel',
  'CI/CD'
];

const wpExpertise: string[] = ['WordPress', 'Divi'];

export default function Home() {
  const imageAttribution = `Photo by <a href="https://unsplash.com/@dannypostma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Danny Postma</a> on <a href="https://unsplash.com/photos/a-man-in-a-blue-shirt-smiling-at-the-camera-zNxOw2JFNKs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`;

  //const linkClasses = 'text-blue-800 underline text-sm font-semibold';
  // const socialMediaClasses =
  //   'w-5 h-5 text-primary-foreground hover:text-primary-300 transition-all duration-300 transform hover:-translate-y-1';

  return (
    <div className="bg-primary text-gray-50 transition-colors duration-300">
      {/* <!-- Sticky Navigation --> */}
      <Header />
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-primary-900 text-primary-foreground relative pb-12 pt-16 lg:pb-20 lg:pt-20 undefined"
      >
        <div className="z-10 absolute bottom-0 left-0 right-0 top-0 brightness-90">
          <Image
            src={bg}
            className="object-cover"
            sizes="100vw"
            quality={100}
            placeholder="blur"
            fill
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: 'transparent'
            }}
            alt={imageAttribution}
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-col  gap-5  text-left py-6 pr-4 pl-4 rounded-xl mt-4 items-center justify-center bg-primary-200/40  backdrop-blur-md ">
            <div className="shadow rounded lg:p-4 grid grid-cols-1  lg:grid-cols-[50%_50%] gap-4 max-w-7xl mx-auto">
              <div className="p-4 md:mx-8 md:pl-8 lg:pl-4 xl:pl-10 ">
                <h1 className="text-2xl md:text-4xl font-bold  text-primary-50">
                  QuickDev Solutions
                </h1>
                <h3 className="text-lg md:text-xl font-semibold  text-primary-100 mb-4 italic">
                  Let&apos;s Get To Work!
                </h3>
                <h2 className="my-4 text-3xl">Home of dgResumes</h2>
                <h3 className="text-md md:text-xl text-primary-100 mb-8">
                  <ul>
                    <li className="my-4">
                      You can now create your professional online
                      resume quickly and easily with dgResumes.
                    </li>
                    <li className="my-4">
                      Stand out to employers and recruiters with a
                      personalized digital resume that showcases your
                      skills and experience.{' '}
                    </li>
                    <li className="my-4">
                      All for less than <b>$10 a month</b>
                    </li>
                    <li className="my-4">
                      <b>NO set-up fees</b>
                    </li>
                    <li className="my-4">
                      Choose from multiple professionally designed
                      templates to create a resume that reflects your
                      unique style and personality.
                    </li>
                    <li className="my-4">Cancel Anytime!</li>
                  </ul>
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-2">
                  <a
                    href="https://dgresumes.com"
                    className="border-2 border-secondary-600 text-primary-100 hover:bg-secondary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    target="_blank"
                  >
                    Learn More
                  </a>
                  <a
                    href="#projects"
                    className="bg-linear-to-br from-[#3bc14a] to-[#1ba82b] hover:to-[#11851e]  text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    Our Projects
                  </a>
                </div>

                {/* <div className="flex flex-row gap-6 justify-center lg:justify-start mt-6">
                  <a
                    href={QUICKDEV_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className={socialMediaClasses} />
                  </a>
                </div> */}
              </div>
              <div className=" md:ml-4 lg:pr-2 xl:mx-10 md:justify-center md:items-center">
                <HeroCarousel templates={templates} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <section
          id="projects"
          className="bg-gray-200 text-gray-900 px-4 py-4 md:py-12 w-7/8 mx-2 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-4 col-span-full flex justify-center">
            Our Projects
          </h2>
          {/* <ProjectCarousel /> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="flex justify-center mt-4">
                  <a
                    href={project.projecturl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      height={250}
                      width={224}
                      className="rounded-2xl m-1 h-62 w-auto object-cover shadow-md"
                    />
                  </a>
                </div>
                <div className="px-6 py-2 text-blue-900">
                  <h3 className="text-xl font-bold mb-2">
                    {project.name}
                  </h3>
                  <h6 className="text-md font-semibold mb-2 italic">
                    Role: {project.role}
                  </h6>
                  <div className="font-bold text-lg text-gray-800">
                    Technologies:
                  </div>

                  <div className="px-6 mb-1"></div>
                  <div className="flex flex-col gap-1 px-2 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex flex-row bg-primary-700 text-primary-100 px-1 py-1 rounded-full text-sm"
                      >
                        <span className="mr-2 flex items-center">
                          <CircleCheck />
                        </span>
                        <span className="text-lg">{tech}</span>
                      </div>
                    ))}
                  </div>
                  <div className="px-2 mb-2 text-gray-800 font-semibold">
                    {project.description}
                  </div>
                  <div className="flex flex-row gap-3 px-2 pb-4">
                    <a
                      suppressHydrationWarning={true}
                      href={project.projecturl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section
        id="expertise"
        className="px-1 md:px-4 py-4 md:py-12 w-7/8  mx-auto mt-4 bg-gray-200 text-gray-900  rounded-2xl"
      >
        <Expertise
          nextExpertise={nextExpertise}
          wpExpertise={wpExpertise}
        />
      </section>
      <section className="h-auto bg-primary pb-8">
        <div className="px-4 py-2 w-7/8 mx-auto mt-4 bg-gray-200 text-gray-900  rounded-2xl">
          <Footer />
        </div>
      </section>
    </div>
  );
}
