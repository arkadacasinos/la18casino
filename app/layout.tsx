import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://la18casino.vercel.app'

const PAGE_TITLE =
  'La Casino официальный сайт — Ля Казино играть онлайн: рабочее зеркало La Казино'

const PAGE_DESCRIPTION =
  'La Casino официальный сайт и Ля Казино зеркало рабочее: как зайти, играть онлайн и не попасть на копию. Простой разбор для игрока: адреса, признаки оригинала, проверка зеркала и советы новичку.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e2b24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="0e0c0472fcc35d91" />
        {/* Дополнительные пользовательские теги вставляйте сюда */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="La Casino" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/art/la18-hall.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
      </head>
      <body>{children}</body>
    </html>
  )
}
