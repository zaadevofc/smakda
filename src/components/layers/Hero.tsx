/** @format */

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const Hero = () => {
  const { scrollY } = useScroll();
  const border = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <>
      <motion.section
        style={{
          borderBottomLeftRadius: border,
          borderBottomRightRadius: border,
          overflow: 'hidden',
        }}
        className="shadow-2xl"
      >
        <ParallaxBanner className="aspect-[2/1] h-lvh">
          <ParallaxBannerLayer image="/gallery/smakda-1.png" />
          <ParallaxBannerLayer>
            <div className="absolute bg-gradient-to-t to-transparent from-black inset-0 flex items-center justify-center">
              <div className="text-6xl font-montser font-black mb-4 uppercase text-center text-white">
                <div className="overflow-hidden w-fit mx-auto">
                  <h1 className="italic animate__animated animate__slideInLeft drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-tr to-transparent from-primary">
                    MAJU BERSAMA
                  </h1>
                </div>
                <motion.div className="relative overflow-hidden">
                  <div className="absolute size-full animate__animated animate__slideInRight inset-x-0 mx-auto bg-gradient-to-l to-[#5cceff00] from-primary rounded-xl"></div>
                  <h1 className="animate__animated animate__slideInUp px-4 py-1">SMKN 2 SUKOHARJO</h1>
                </motion.div>
              </div>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </motion.section>
    </>
  );
};

export default Hero;
