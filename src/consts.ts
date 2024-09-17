import { Metadata } from "next";

export const SEO = {
  SITE_URL: process.env.NODE_ENV === "development" ? 'http://localhost:3000/' : "https://queti.fun/",
  SITE_TITLE: "Quetifun - Solusi AI untuk Pembuatan Soal yang Mudah dan Cepat!",
  SITE_DESCRIPTION:
    "Quetifun adalah aplikasi AI inovatif yang memudahkan pembuatan soal pilihan ganda dan uraian. Pilih kategori, unggah materi, dan biarkan AI membuatkan soal yang relevan untuk Anda. Efisiensi maksimal untuk guru, dosen, dan lembaga pendidikan!",
  SITE_AUTHORS: [
    { name: "zaadevofc", url: "https://zaadevofc.tech" },
    { name: "zaadevofc", url: "https://instagram.com/zaadevofc" },
  ],
  SITE_CREATOR: "zaadevofc",
  SITE_CREATOR_EMAIL: "zaadevofc@gmail.com",
  SITE_CATEGORY: "education",
  SITE_KEYWORDS: [
    "Quetifun",
    "AI soal",
    "pembuatan soal",
    "soal pilihan ganda",
    "soal uraian",
    "pendidikan",
    "edukasi",
    "AI pendidikan",
    "edtech",
    "soal otomatis",
    "guru",
    "dosen",
    "indonesia",
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
    type: "website",
    countryName: "Indonesia",
    description: SEO.SITE_DESCRIPTION,
    title: SEO.SITE_TITLE,
    emails: SEO.SITE_CREATOR_EMAIL,
    images: SEO.SITE_URL + "android-chrome-512x512.png",
  },
  twitter: {
    site: SEO.SITE_TITLE,
    title: SEO.SITE_TITLE,
    description: SEO.SITE_DESCRIPTION,
    creator: SEO.SITE_CREATOR,
    images: SEO.SITE_URL + "android-chrome-512x512.png",
    card: "summary_large_image",
  }
};
