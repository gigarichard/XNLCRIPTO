import { Metadata } from 'next';
import { Recursive } from 'next/font/google';

import './globals.css';

import { cn, constructMetadata } from '@/lib/utils';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/components/providers/providers';
import Head from 'next/head'; // Importa el componente Head

const recursive = Recursive({
  subsets: ['latin-ext'],
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(recursive.className, 'grainy-light')}>
        <Head>
          {/* Meta Pixel Code */}
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){
                  if(f.fbq)return;n=f.fbq=function(){
                    n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
                  };
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)
                }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1823113451561684');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1823113451561684&ev=PageView&noscript=1"
            />
          </noscript>
          {/* End Meta Pixel Code */}
        </Head>

        <Providers>
          <Navbar />
          <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
            <div className="flex h-full flex-1 flex-col">{children}</div>
          </main>
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
