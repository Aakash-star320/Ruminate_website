import './globals.css';
import type { Metadata } from 'next';
import Navbar from './Navbar';

export const metadata: Metadata = {
  title: 'Ruminate - E-Cell IIIT Surat',
  description: 'Fostering innovation, creativity, and entrepreneurial thinking at IIIT Surat. Join us in shaping the future, one idea at a time.',
  keywords: ['E-Cell', 'IIIT Surat', 'Entrepreneurship', 'Innovation', 'Startups', 'Ruminate'],
  authors: [{ name: 'Ruminate E-Cell' }],
  openGraph: {
    title: 'Ruminate - E-Cell IIIT Surat',
    description: 'Fostering innovation, creativity, and entrepreneurial thinking at IIIT Surat.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruminate - E-Cell IIIT Surat',
    description: 'Fostering innovation, creativity, and entrepreneurial thinking at IIIT Surat.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
