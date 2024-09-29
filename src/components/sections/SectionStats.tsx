/** @format */

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Instagram, LucideMapPin, Youtube } from 'lucide-react';

const stats = [
  { label: 'SISWA', value: '2K+' },
  { label: 'GURU MAPEL', value: '400+' },
  { label: 'FASILITAS', value: '40+' },
  { label: 'PROGRAM AHLI', value: '40+' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'Youtube' },
  { icon: Youtube, label: 'TikTok' },
  { icon: LucideMapPin, label: 'Maps' },
];

const SectionStats = () => {
  return (
    <>
      <motion.section className="w-full">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-8">
              <h1 className="text-4xl md:text-5xl font-montser font-black leading-tight">
                SEKOLAH UNGGULAN DI KABUPATEN <span className="text-gradient-primary">SUKOHARJO</span>
              </h1>
              <p className="text-xl font-titan text-gray-500 text-justify">
                Bertekad menyiapkan lulusan kompeten yang siap terjun di dunia kerja. Industri yang berkembang sangat
                pesat, memerlukan dukungan Sumber Daya Manusia yang profesional agar dapat mengimbangi perkembangan
                teknologi.
              </p>
              <div className="grid grid-cols-4 gap-0">
                {stats.map((stat, i) => (
                  <div className={cn('glow-border pr-0.5 pt-0.5', i == 0 && 'pl-0.5')}>
                    <div className="relative bg-white py-3 text-center w-full overflow-hidden z-10">
                      <h3 className="text-4xl font-bold font-montser text-gray-800">{stat.value}</h3>
                      <p className="text-sm font-semibold uppercase mt-2 text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col h-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl">
                <h2 className="text-2xl font-black font-montser mb-6 ml-auto px-3 text-white rounded-tr-xl bg-primary">
                  IKUTI KAMI
                </h2>
                <div className="grid grid-cols-4 gap-6 my-auto">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="text-center">
                      <link.icon className="mx-auto h-10 w-10 mb-2" />
                      <span className="font-semibold">{link.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border mt-auto rounded-xl px-6 py-3 text-center cursor-pointer">
                <p>Pantau aktifitas seru dari sosial media kami</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SectionStats;
