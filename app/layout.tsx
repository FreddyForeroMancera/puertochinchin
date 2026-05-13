import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';
import { StickyWhatsAppCTA } from '@/components/ui/StickyWhatsAppCTA';
import { siteMeta } from '@/lib/seo';

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.siteUrl),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    siteName: siteMeta.title,
    images: [
      {
        url: siteMeta.openGraphImage,
        width: 1200,
        height: 630,
        alt: 'Puerto ChinChin Campestre'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-cream text-brand-dark">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <StickyWhatsAppCTA />
      </body>
    </html>
  );
}
