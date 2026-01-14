import { CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
//import { imageLoader } from '@/lib/helpers/imageLoader';
import ReadMore from '@/components/ReadMore';
import { IProject } from './ProjectCarousel';
import { CircleCheck } from 'lucide-react';

export default function ProjectItem({
  index,
  item
}: {
  index: number;
  item: IProject;
}) {
  return (
    <div>
      <CarouselItem className="max-w-120 mx-auto">
        <div className="flex px-3 py-3">
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div className="flex justify-center bg-linear-to-br from-blue-800 to-blue-200">
              <Image
                src={item.image}
                alt={item.name || 'Project image'}
                height={192}
                width={192}
                className="rounded-2xl m-2 h-48 w-auto object-cover shadow-md"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-1">
                {item.name}
              </div>

              {item.role && item.role.length > 0 ? (
                <div className="inline-block text-md mb-2">
                  <span className="pr-1 font-semibold">Role:</span>
                  <span className="italic font-semibold">
                    {item.role}
                  </span>
                </div>
              ) : null}
              <div className="flex flex-col gap-1 px-1 mb-2">
                {item.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-row bg-primary-700 text-primary-100 px-1 py-1 rounded-full text-sm"
                  >
                    <span className="mr-2 flex items-center">
                      <CircleCheck className="text-blue-500" />
                    </span>
                    <span className="text-lg">{tech}</span>
                  </div>
                ))}
              </div>
              <div className="text-gray-700 text-base">
                <ReadMore
                  text={item.description ?? ''}
                  buttonClass="bg-blue-500 hover:bg-blue-800 text-white mt-2 px-2 py-1 text-xs mb-0"
                  maxLength={200}
                />
              </div>

              <div className="py-2 w-64">
                {/* {website} {github} */}

                {item.projecturl && item.projecturl.length > 0 ? (
                  <span className="inline-block text-sm font-semibold text-blue-700 mr-6">
                    <a href={item.projecturl} target="_blank">
                      Project Website
                    </a>
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    </div>
  );
}
