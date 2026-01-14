import Image from 'next/image';
import {
  APP_NAME,
  COMPANY_NAME,
  DGRESUMES_SERVER_URL
} from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-200 text-gray-700 flex justify-center ">
      <div className="grid grid-cols-1 my-10 ">
        <div className="flex justify-center ">
          © {currentYear} {COMPANY_NAME}. All Rights reserved.
        </div>
        <div className="flex justify-center mb-5">
          <a
            href="/legal/disclaimer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:underline"
          >
            Disclaimer
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href={DGRESUMES_SERVER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 font-bold hover:underline"
          >
            Get Your Own dgResume Today!
            <span className="flex justify-center mt-2 mx-2">
              <Image
                src="/images/logos/logo-dgresumes.jpg"
                width={160}
                height={200}
                alt={`${DGRESUMES_SERVER_URL} logo`}
                priority={true}
                className="rounded-xl shadow-md dark:shadow-gray-100"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
