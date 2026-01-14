import '@/assets/globals.css';
import { Roboto } from 'next/font/google';

import '@/components/Footer';
//import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Analytics } from '@vercel/analytics/next';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin']
});

const robotoMono = Roboto({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
  weight: '400'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        {/* toast component must be placed within the layout before the children */}

        <Toaster />

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}
