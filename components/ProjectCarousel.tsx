'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
//import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  // CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
//import { Template } from 'types';
//import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import ProjectItem from './ProjectItem';
//import { CircleCheck } from 'lucide-react';

export interface IProject {
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
    name: 'SimpleBlue template for dgResumes',
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
      'A professional simple blue themed template for dgResumes that offers a clean and modern design for users to showcase their skills and experience.',
    image: '/images/demo-simpleblue-screenshot.jpg',
    projecturl: 'https://demo-simpleblue.dgresume.com'
  },
  {
    name: 'Ocean template for dgResumes',
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
      'A professional ocean themed template for dgResumes that offers a clean and modern design for users to showcase their skills and experience.',
    image: '/images/demo-ocean-screenshot.jpg',
    projecturl: 'https://demo-ocean.dgresume.com'
  }
];

export default function ProjectCarousel() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();

    carouselApi.on('select', updateCarouselState);

    return () => {
      carouselApi.off('select', updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  return (
    <div className="relative w-full px-5 mt-5 lg:mt-6 mb-4 border-4">
      <Carousel
        className=" bg-gray-100 my-5 py-5 px-5 mx-5 rounded-lg"
        setApi={setCarouselApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
      >
        <CarouselContent className="">
          {projects.map((item, index) => (
            <ProjectItem key={index} index={index} item={item} />
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <CarouselContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="w-1/2 px-2">
              <Card className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CardContent className="flex items-center justify-center">
                  <div className="flex justify-center mt-4">
                    <a
                      href={project.projecturl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        height={192}
                        width={192}
                        className="rounded-2xl m-1 h-42 w-auto object-cover shadow-md"
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
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent> */}
      {/* </Carousel> */}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none">
        <Button
          onClick={() => scrollToIndex(currentIndex - 1)}
          className="pointer-events-auto rounded-full w-16 h-16 p-0 bg-transparent shadow-none hover:bg-transparent"
        >
          <ChevronLeft
            className="size-16 text-primary-950"
            strokeWidth={1}
          />
        </Button>
        <Button
          onClick={() => scrollToIndex(currentIndex + 1)}
          className="pointer-events-auto rounded-full w-16 h-16 p-0 bg-transparent shadow-none hover:bg-transparent"
        >
          <ChevronRight
            className="size-16 text-primary-950"
            strokeWidth={1}
          />
        </Button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {Array.from({ length: totalItems }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
