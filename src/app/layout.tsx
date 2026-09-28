import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import './globals.css';

const TITLE = 'Klinik Pratama Oilia Medical Centre Rorotan';
const DESC =
  'Media informasi pasien: alur berobat BPJS & pribadi, jadwal dokter, layanan, rujukan, dan kontak Klinik Pratama Oilia Medical Centre Rorotan, Cilincing, Jakarta Utara.';

export const metadata: Metadata = {
  // Ganti dengan domain Anda setelah terpasang, mis. https://info.klinikoilia.com
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: 'Media informasi pasien — alur berobat, jadwal dokter, dan layanan klinik.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: TITLE }],
    locale: 'id_ID',
    type: 'website',
  },
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#15803B',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
