'use client';

import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME, SERVER_URL, SUPPORT_EMAIL } from '@/lib/constants';
import 'dotenv/config';
// import { Button } from './ui/button';
// import { UserIcon, PersonStanding } from 'lucide-react';
import ContactFormDialog from '@/components/ContactFormDialog';
import { useState } from 'react';

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <nav className=" fixed top-0 w-full bg-primary-50/80 backdrop-blur-md z-90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 px-2 mr-6">
            <div className="flex items-center">
              <Link
                href={SERVER_URL}
                className="flex items-center"
                target="_blank"
              >
                <Image
                  src="/images/logos/logo-quickdev.jpg"
                  width={173}
                  height={64}
                  alt={`${APP_NAME} logo`}
                  priority={true}
                  className="rounded-xl shadow-md dark:shadow-gray-100 h-16 w-auto"
                />
              </Link>
            </div>

            <div className="flex pr-4 mx-auto mr-2 md:mr-6 gap-4 items-center justify-end">
              <a
                href="#"
                className="hover:text-blue-900 text-xl font-bold text-primary-800 transition-colors"
                onClick={() => setShowContactForm(true)}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="z-100">
        <ContactFormDialog
          open={showContactForm}
          onClose={() => setShowContactForm(false)}
          subscriberEmail={SUPPORT_EMAIL}
        />
      </div>
    </>
  );
};

export default Header;
