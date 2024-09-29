/** @format */

import { HeroParallax } from '../ui/hero-parallax';

const galeri = [
  ...Array.from({ length: 10 }, (x, i) => ({
    link: 'javascript:void()',
    thumbnail: `/gallery/smakda-${i + 1}.jpg`,
  })),
  ...Array.from({ length: 5 }, (x, i) => ({
    link: 'javascript:void()',
    thumbnail: `/gallery/smakda-${i + 1}.webp`,
  })),
];

const SectionGallery = () => {
  return (
    <>
      <section className="w-full">
        <HeroParallax products={galeri as any} />
      </section>
    </>
  );
};

export default SectionGallery;
