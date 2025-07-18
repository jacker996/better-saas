import '@/styles/globals.css';

import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { appConfig } from '../config/app.config';

export const metadata: Metadata = {
  title: appConfig.metadata.title.default,
  description: appConfig.metadata.description,
  keywords: appConfig.metadata.keywords,
  authors: appConfig.metadata.authors,
  creator: appConfig.metadata.creator,
  robots: appConfig.metadata.robots,
  openGraph: {
    type: appConfig.metadata.openGraph.type as 'website',
    locale: appConfig.metadata.openGraph.locale,
    url: appConfig.metadata.openGraph.url,
    siteName: appConfig.metadata.openGraph.siteName,
    title: appConfig.metadata.title.default,
    description: appConfig.metadata.description,
  },
  twitter: {
    card: appConfig.metadata.twitter.card as 'summary_large_image',
    creator: appConfig.metadata.twitter.creator,
    title: appConfig.metadata.title.default,
    description: appConfig.metadata.description,
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={routing.defaultLocale}
      className={`${geist.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
