import { Metadata } from 'next';

export const SEO = {
  SITE_URL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://smkn2sukoharjo-zaadevofc.vercel.app/',
  SITE_TITLE: 'SMK Negeri 2 Sukoharjo | Website Resmi',
  SITE_DESCRIPTION:
    'Bertekad menyiapkan lulusan kompeten yang siap terjun di dunia kerja. Industri yang berkembang sangat pesat, memerlukan dukungan Sumber Daya Manusia yang profesional agar dapat mengimbangi perkembangan teknologi.',
  SITE_AUTHORS: [
    { name: 'zaadevofc', url: 'https://zaadevofc.tech' },
    { name: 'zaadevofc', url: 'https://instagram.com/zaadevofc' },
  ],
  SITE_CREATOR: 'zaadevofc',
  SITE_CREATOR_EMAIL: 'zaadevofc@gmail.com',
  SITE_CATEGORY: 'school',
  SITE_KEYWORDS: [
    'pendidikan',
    'edukasi',
    'guru',
    'indonesia',
    'smk negeri',
    'smk negeri 2',
    'smakda',
    'smakda sukoharjo',
    'smkn 2 sukoharjo',
    'smk 2 sukoharjo',
    'sekolah adiwiyata',
    'sekolah',
    'adiwiyata',
    'website resmi'
  ],
};

export const METADATA: Metadata = {
  title: {
    default: SEO.SITE_TITLE,
    template: `%s | ${SEO.SITE_TITLE}`,
  },
  description: SEO.SITE_DESCRIPTION,
  authors: SEO.SITE_AUTHORS,
  creator: SEO.SITE_CREATOR,
  category: SEO.SITE_CATEGORY,
  keywords: SEO.SITE_KEYWORDS,
  appLinks: { web: { url: SEO.SITE_URL } },
  alternates: { canonical: SEO.SITE_URL },
  applicationName: SEO.SITE_TITLE,
  bookmarks: SEO.SITE_URL,
  publisher: SEO.SITE_CREATOR,
  openGraph: {
    url: SEO.SITE_URL,
    siteName: SEO.SITE_TITLE,
    type: 'website',
    countryName: 'Indonesia',
    description: SEO.SITE_DESCRIPTION,
    title: SEO.SITE_TITLE,
    emails: SEO.SITE_CREATOR_EMAIL,
    images: SEO.SITE_URL + 'android-chrome-512x512.png',
  },
  twitter: {
    site: SEO.SITE_TITLE,
    title: SEO.SITE_TITLE,
    description: SEO.SITE_DESCRIPTION,
    creator: SEO.SITE_CREATOR,
    images: SEO.SITE_URL + 'android-chrome-512x512.png',
    card: 'summary_large_image',
  },
};
