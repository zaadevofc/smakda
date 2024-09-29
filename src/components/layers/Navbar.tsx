/** @format */

'use client';

import Brand from '@/components/layers/Brand';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const nav = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <>
      <motion.nav style={{ opacity: nav }} className="fixed inset-x-0 mx-auto top-0 z-50 p-5 w-full">
        <motion.div className="flex items-center max-w-screen-2xl rounded-full w-full mx-auto drop-shadow-xl px-6 py-2 bg-white/80 backdrop-blur-md border border-gray-300">
          <Brand />
          <div className="flex gap-5 mx-auto">
            <h1>Beranda</h1>
            <h1>Profil</h1>
            <h1>Jurusan</h1>
            <h1>Program</h1>
            <h1>Manajemen</h1>
            <h1>Ekstrakurikuler</h1>
            <h1>Informasi</h1>
          </div>
          <div className="flex gap-3 ml-auto">
            <Button className="rounded-full font-bold">Masuk</Button>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
