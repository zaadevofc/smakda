/** @format */

'use client';

import Footer from '@/components/layers/Footer';
import { lazy } from 'react';

const Hero = lazy(() => import('@/components/layers/Hero'));
const Navbar = lazy(() => import('@/components/layers/Navbar'));

const SectionAdiwiyata = lazy(() => import('@/components/sections/SectionAdiwiyata'));
const SectionBerita = lazy(() => import('@/components/sections/SectionBerita'));
const SectionJurusan = lazy(() => import('@/components/sections/SectionJurusan'));
const SectionKepsek = lazy(() => import('@/components/sections/SectionKepsek'));
const SectionQuotes = lazy(() => import('@/components/sections/SectionQuotes'));
const SectionStats = lazy(() => import('@/components/sections/SectionStats'));
const SectionGallery = lazy(() => import('@/components/sections/SectionGallery'));

const HomePage = () => {
  return (
    <>
      <main className="min-w-full w-full h-full min-h-lvh mx-auto">
        <Navbar />
        <Hero />

        <section className="flex flex-col gap-52 mt-24 w-full [&>section]:px-5">
          <SectionStats />
          <SectionJurusan />
          <SectionKepsek />
          <SectionAdiwiyata />
          <SectionBerita />
          <SectionQuotes />
        </section>

        <SectionGallery />

        <Footer />
      </main>
    </>
  );
};

export default HomePage;
