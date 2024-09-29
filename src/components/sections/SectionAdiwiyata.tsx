/** @format */

'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';

const SectionAdiwiyata = () => {
  return (
    <>
      <section className="relative w-full bg-primary h-full text-white">
        <div className="absolute w-full h-40 z-10 top-0 left-0 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute w-full h-40 z-10 bottom-0 left-0 bg-gradient-to-t from-white to-transparent" />
        <div className="flex flex-col max-w-screen-2xl w-full mx-auto my-16">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col mb-20">
                {Array.from({ length: 4 }).map(x => (
                  <h1 className="font-black text-5xl w-full font-montser uppercase text-clip bg-gradient-to-tr from-white via-white/70 to-transparent">
                    Sekolah Adiwiyata
                  </h1>
                ))}
              </div>
            }
          >
            <div className="video-responsive rounded-xl">
              <iframe
                src={`https://www.youtube.com/embed/fFdbn35sw2o`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Adiwiyata SMK Negeri 2 Sukoharjo"
              />
            </div>
          </ContainerScroll>
        </div>
      </section>
    </>
  );
};

export default SectionAdiwiyata;
