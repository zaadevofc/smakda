/** @format */

'use client';

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

        {/* <section className="flex flex-col px-16 gap-16">
          <div className="flex justify-between pl-16 bg-green-500 rounded-xl">
            <div className="m-4 flex justify-between">
              <div className="text-5xl w-[45%] ">Lorem ipsum, dolor sit met comsesas</div>
              <div className="flex flex-col w-[200px]">
                <div className="font-bold">judul nih bre</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. aperiam aspernatur earu
                </div>
              </div>
              <div className="size-[200px] border-2 border-black rounded-xl"></div>
            </div>
          </div>
          <div className="flex pl-16 items-start justify-between">
            <div className="flex flex-col gap-4">
              <div className="text-5xl font-bold">loremsesa</div>
              <div className="flex">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-bold">Lorem</div>
              <div className="">ipsum</div>
              <div className="">consectetur</div>
              <div className="">sit</div>
              <div className="">adipisicing</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-bold">consequuntur</div>
              <div className="">deleniti</div>
              <div className="">quibusdam</div>
              <div className="">consequuntur</div>
              <div className="">atque</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-bold">deleniti</div>
              <div className="">incidunt</div>
              <div className="">necessitatibusd</div>
            </div>
            <div className="text-white">.</div>
          </div>
        </section> */}
      </main>
    </>
  );
};

export default HomePage;
