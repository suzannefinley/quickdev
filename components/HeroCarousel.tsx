'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
//import { Template } from 'types';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroCarousel({
  templates
}: {
  templates: {
    name: string;
    image: string;
    demourl: string;
  }[];
}) {
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
    <div className="relative px-5 mt-5 lg:mt-6 mb-4">
      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3000
          })
        ]}
        className="z-10 "
      >
        <CarouselContent className="max-w-[calc(100vw-20px)]!">
          {templates.map((template, index) => (
            <CarouselItem key={index}>
              <Card className="bg-gray-200">
                <CardContent className="flex items-center justify-center">
                  <div className="p-2 sm:p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform overflow-hidden">
                    {template.demourl && (
                      <a
                        href={template.demourl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          priority={true}
                          src={template.image}
                          alt={template.name}
                          className="object-cover rounded-xl shadow-lg shadow-gray-900 w-400 h-auto"
                          height={300}
                          width={500}
                        />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
          {/* {additionalImages.map((i, index) => (
            <CarouselItem key={index}>
              <Card className="bg-gray-200">
                <CardContent className="flex items-center justify-center">
                  <div className="p-2 sm:p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform overflow-hidden">
                    <Image
                      priority={true}
                      src={i.image}
                      alt={i.name}
                      className="object-cover rounded-xl shadow-lg shadow-gray-900 w-200 h-auto"
                      height={300}
                      width={400}
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))} */}
        </CarouselContent>
      </Carousel>

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
