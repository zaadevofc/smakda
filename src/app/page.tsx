/** @format */

'use client';

import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { CDN_URI, cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, LucideMapPin, Youtube } from 'lucide-react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const HomePage = () => {
  const { scrollY } = useScroll();
  const border = useTransform(scrollY, [0, 500], [0, 100]);
  const nav = useTransform(scrollY, [0, 100], [0, 1]);

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

  const listsJurusan = [
    { label: 'TM', detail: 'Teknik Mekatronika', logo: '/logo/logo-tm.webp' },
    { label: 'TKR', detail: 'Teknik Kendaraan Ringan', logo: '/logo/logo-tkr.webp' },
    { label: 'TKI', detail: 'Teknik Kimia Industri', logo: '/logo/logo-tki.webp' },
    { label: 'TMI', detail: 'Teknik Mekanik Industri', logo: '/logo/logo-tmi.webp' },
    { label: 'DPIB', detail: 'Desain Pemodelan & Informasi Bangunan', logo: '/logo/logo-dpib.webp' },
    { label: 'APHP', detail: 'Agribisnis Pengolahan Hasil Pertanian', logo: '/logo/logo-aphp.webp' },
    { label: 'UPT', detail: 'Usaha Pertanian Terpadu', logo: '/logo/logo-upt.webp' },
    { label: 'ATR', detail: 'Agribisnis Ternak Ruminansia', logo: '/logo/logo-atr.webp' },
  ];

  const listKepsek = [
    { name: 'Tuti Mahriah, S.P.', periode: '2021 - Sekarang' },
    { name: 'Drs. Mujiono, M.Pd.', periode: '2020 - 2021' },
    { name: 'Triman, S.Pd., M.Si.', periode: '2014 - 2020' },
    { name: 'Drs.Sugiyarno, S.T., M.Pd.', periode: '2007 - 2014' },
    { name: 'Drs. Sudibyo', periode: '2004 - 2007' },
  ]

  return (
    <>
      <main className="min-w-full w-full h-full min-h-lvh mx-auto">
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
              <Button className="rounded-full">Masuk</Button>
            </div>
          </motion.div>
        </motion.nav>

        <motion.section
          style={{
            borderBottomLeftRadius: border,
            borderBottomRightRadius: border,
            overflow: 'hidden',
          }}
          className="shadow-2xl"
        >
          <ParallaxBanner className="aspect-[2/1] h-lvh">
            <ParallaxBannerLayer image="/banner/smakda-17.png" />
            <ParallaxBannerLayer>
              <div className="absolute bg-gradient-to-t to-transparent from-black inset-0 flex items-center justify-center">
                <div className="text-6xl font-montser font-black mb-4 uppercase text-center text-white">
                  <div className="overflow-hidden w-fit mx-auto">
                    <h1 className="italic animate__animated animate__slideInLeft drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-tr to-transparent from-[#5CCDFF]">
                      MAJU BERSAMA
                    </h1>
                  </div>
                  <motion.div className="relative overflow-hidden">
                    <div className="absolute size-full animate__animated animate__slideInRight inset-x-0 mx-auto bg-gradient-to-l to-[#5cceff00] from-[#5CCDFF] rounded-xl"></div>
                    <h1 className="animate__animated animate__slideInUp px-4 py-1">SMKN 2 SUKOHARJO</h1>
                  </motion.div>
                </div>
              </div>
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </motion.section>

        <section className="flex flex-col gap-52 mt-24 w-full [&>section]:px-5">
          <motion.section className="w-full">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col gap-8">
                  <h1 className="text-4xl md:text-5xl font-montser font-black leading-tight">
                    SEKOLAH UNGGULAN DI KABUPATEN{' '}
                    <span className="text-transparent drop-shadow-md bg-clip-text bg-gradient-to-bl to-transparent via-[#5CCDFF] from-[#5CCDFF]">
                      SUKOHARJO
                    </span>
                  </h1>
                  <p className="text-xl font-titan text-gray-500 text-justify">
                    Bertekad menyiapkan lulusan kompeten yang siap terjun di dunia kerja. Industri yang berkembang
                    sangat pesat, memerlukan dukungan Sumber Daya Manusia yang profesional agar dapat mengimbangi
                    perkembangan teknologi.
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
                    <h2 className="text-2xl font-black font-montser mb-6 ml-auto px-3 text-white rounded-tr-xl bg-[#5CCDFF]">
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

          <section className="w-full">
            <div className="max-w-screen-2xl w-full mx-auto flex flex-col gap-20">
              <div className="">
                <h1 className="font-black text-5xl w-full font-montser uppercase">
                  <span className="text-transparent drop-shadow-md bg-clip-text bg-gradient-to-bl to-transparent via-[#5CCDFF] from-[#5CCDFF]">
                    Konsentrasi
                  </span>
                  <br />
                  <span>Keahlian</span>
                </h1>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col w-full">
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-8 gap-5">
                    {listsJurusan.map(x => (
                      <div
                        style={{ backgroundImage: `url(${x.logo})` }}
                        className={cn(
                          'flex drop-shadow-xl font-extrabold h-40 pt-16 bg-contain bg-no-repeat bg-center bg-opacity-5 text-white'
                        )}
                      >
                        <div className="mx-auto text-center -space-y-1.5 drop-shadow-lg flex flex-col py-1 h-fit mt-auto rounded-b-xl bg-gradient-to-l to-transparent via-[#5CCDFF] from-transparent w-full">
                          <h1 className="uppercase font-montser text-2xl">{x.label}</h1>
                          <p className="text-sm mt-auto">{x.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col text-center gap-5 w-1/2">
                  <h1 className="flex items-center justify-center text-4xl h-1/2 text-white p-8 bg-gradient-to-tr to-[#5cceff00] from-[#5CCDFF] drop-shadow-xl font-black -tracking-wide rounded-xl uppercase font-montser">
                    bangun tekad mu untuk melangkah lebih baik di depan
                  </h1>
                  <div className="rounded-xl overflow-hidden w-full relative">
                    <div className="absolute w-full h-full bg-gradient-to-t from-white via-transparent to-transparent" />
                    <img src="/banner/smakda-16.jpg" className="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="max-w-screen-2xl w-full mx-auto flex justify-between gap-32">
              <div className="w-full flex flex-col gap-8">
                <div className='flex flex-col'>
                  <h1 className="text-5xl font-montser font-black uppercase">
                    Kepala Sekolah
                    <br />
                    <span className="text-transparent drop-shadow-md bg-clip-text bg-gradient-to-bl to-transparent via-[#5CCDFF] from-[#5CCDFF]">
                      {listKepsek[0].name}
                    </span>
                  </h1>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className="text-xl font-titan text-gray-500 text-justify">
                    SMKN 2 Sukoharjo di bawah naungan Dinas Pendidikan Provinsi Jawa Tengah memiliki 8
                    Konsentrasi Keahlian yaitu Teknik Kendaraan Ringan Otomotif, Teknik Kimia Industri, Teknik Mekanik
                    Industri, Agribisnis Ternak Ruminansia, Teknik Mekatronika, Teknik Desain Pemodelan & Informasi
                    Bangunan, Konsentrasi Keahlian Agribisnis Pengolahan Hasil Pertanian serta Usaha Pertanian Terpadu.
                  </p>
                  <p className="text-xl font-titan text-gray-500 text-justify">
                    Kami bertekad menyiapkan lulusan kompeten yang siap terjun di dunia kerja. Industri yang berkembang sangat pesat, memerlukan dukungan Sumber Daya Manusia yang profesional agar dapat mengimbangi perkembangan teknologi.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-0">
                  {listKepsek.map((x, i) => (
                    <div className={cn('border border-[#5CCDFF] overflow-hidden', i == 0 && 'text-white bg-[#5CCDFF]')}>
                      <div className="relative p-5 -space-y-1 text-center w-full z-10">
                        <h3 className="text-lg font-bold font-montser uppercase">{x.periode}</h3>
                        <p className={cn("text-sm font-semibold uppercase mt-2 text-gray-500", i == 0 && 'text-white')}>{x.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="size-[500px] rounded-full border-[12px] border-[#5CCDFF] flex-shrink-0">
                <img
                  className="border-[10px] drop-shadow-md border-white size-full object-cover rounded-full object-top aspect-square"
                  src="/person/kepsek-ibu-tuti-mahriah.webp"
                  alt=""
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col max-w-screen-2xl w-full mx-auto">
            <div className="flex justify-between">
              <h2 className="text-7xl font-bold h-44 w-full">FEATURES</h2>
              <div className="flex">
                <div className="bg-[#eeebeb] w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                  <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                    <p className="text-gray-700 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                    </p>
                  </div>
                </div>
                <div className="bg-white w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                  <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                    <p className="text-gray-700 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                    </p>
                  </div>
                </div>
                <div className=" w-[273px] bg-[#eeebeb]  h-[273px] px-5 py-5 flex flex-col justify-between">
                  <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                    <p className="text-gray-700 text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="text-black font-bold bg-white w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between ">
                <div className="">
                  <h1>Launch</h1>
                  <h1>White ease</h1>
                </div>
                <div className="">v</div>
              </div>
              <div className="bg-[#eeebeb] w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                  <p className="text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                  </p>
                </div>
              </div>
              <div className="bg-white w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                  <p className="text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                  </p>
                </div>
              </div>
              <div className="bg-[#eeebeb] w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                  <p className="text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                  </p>
                </div>
              </div>
              <div className="bg-white w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                  <p className="text-gray-700 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum{' '}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <motion.section
            style={{
              borderTopLeftRadius: border,
              borderTopRightRadius: border,
              overflow: 'hidden',
            }}
            className="h-lvh flex flex-col bg-gradient-to-t to-transparent via-white from-black text-center"
          >
            <h1 className="text-6xl font-bold mb-4 uppercase">
              cahaya kehidupan
              <br />
              membangun masa depan
              <br />
              <span className="font-serif italic">gemilang</span>
            </h1>
            <p className="text-black max-w-md mx-auto">
              We're a creative agency integrating AI technology to deliver next-gen solutions for brands.
            </p>
            <div className="mt-8">
              <a href="#" className="inline-block border border-black rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </motion.section>

          <section className="py-20 flex flex-col max-w-screen-2xl w-full mx-auto">
            <div className="pb-20">
              <h4 className="w-full text-center text-8xl">Our Works</h4>
            </div>
            <div className="flex flex-col gap-6">
              <img
                className="rounded-3xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Txr-rpW-8kRSLWUe8gkR_h_0MUaQFHGrNQ&s"
                alt=""
              />
              <div className="gap-6 flex">
                <img
                  className="rounded-3xl"
                  width="50%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkVy4wUpcaWXKS_38R60zcPbPbMhIAUv6qQ&s"
                  alt=""
                />
                <img
                  className="rounded-3xl"
                  width="50%"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkVy4wUpcaWXKS_38R60zcPbPbMhIAUv6qQ&s"
                  alt=""
                />
              </div>
              <img
                className="rounded-3xl"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Txr-rpW-8kRSLWUe8gkR_h_0MUaQFHGrNQ&s"
                alt=""
              />
            </div>
          </section>

          <section className="bg-gradient-to-t from-[#4364AE] to-black text-white min-h-screen">
            <div className="p-20 max-w-screen-2xl w-full mx-auto">
              <main>
                <section className="mb-16 flex flex-col mx-12">
                  <div className="text-[90px] font-bold ">
                    <h1>Make Your Financial</h1>
                  </div>
                  <div className="flex-col">
                    <div className="flex">
                      <div className="flex-col w-[66%] ">
                        <div className="text-[90px] font-bold mb-4">
                          <h1>Goals Real</h1>
                        </div>
                        <div className="flex my-10 ">
                          <div className="w-[50%] flex">
                            <div className="text-gray-400 w-fit text-left border-2 rounded-xl flex gap-5 border-gray-400 text-3xl px-2 py-1 h-fit">
                              <h1>get started</h1>
                              <h1 className="text-white">/\</h1>
                            </div>
                          </div>
                          <div className="w-[50%]">
                            <h1 className="pl-2 w-52 text-left text-sm text-gray-400">
                              adipisicing elit adipisicing elit. Veritatis, tempora fugit expedita
                            </h1>
                          </div>
                        </div>
                      </div>
                      <div className="mb-10 flex flex-col w-[33%] gap-3 pl-4 pt-10 text-gray-400">
                        <h1 className="">Lorem ipsum </h1>
                        <h1 className="">Lorem ipsum Lorem </h1>
                        <h1 className="">Lorem ipsum </h1>
                        <h1 className="">Lorem ipsum Lorem </h1>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex-col w-[33%] text-left">
                        <h1 className="text-3xl font-bold">$460 Tr</h1>
                        <h1 className="text-gray-400">Total Assets</h1>
                      </div>
                      <div className="flex-col w-[33%] text-left">
                        <h1 className="text-3xl font-bold">17,000+</h1>
                        <h1 className="text-gray-400">Clients We Serve</h1>
                      </div>
                      <div className="flex-col w-[33%] text-left">
                        <h1 className="text-3xl font-bold">$20,000</h1>
                        <h1 className="text-gray-400">Minimum Investment lorem</h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="flex flex-col">
                    <div className="flex flex-col rounded-[50px] bg-lime-300">
                      <div className="">
                        <h1 className="text-black px-40 font-bold pt-20 text-center text-5xl">
                          Calculate The Production Property We Can Do.
                        </h1>
                      </div>
                      <div className="flex justify-center w-full gap-10 my-20">
                        <Button variant="outline" className="rounded-full text-xl bg-white text-black">
                          Overview
                        </Button>
                        <Button variant="secondary" className="rounded-full text-xl bg-black text-white">
                          Calculator
                        </Button>
                        <Button variant="outline" className="rounded-full text-xl bg-white text-black">
                          History And Development
                        </Button>
                        <Button variant="outline" className="rounded-full text-xl bg-white text-black">
                          Special Program
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-5 text-black mt-5">
                      <div className="flex-grow bg-white rounded-[50px] px-10 py-10">
                        <div className="flex justify-between">
                          <h2 className="text-3xl font-semibold mb-4">Calculator Simulation</h2>
                          <div className=" mb-4 p-2 border-2 rounded-2xl border-black">Property Value V</div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <input
                              type="text"
                              placeholder="m²"
                              className=" bg-gray-100 w-[340px] mr-2 p-2 border rounded"
                            />
                            <input
                              type="text"
                              placeholder="Property Value"
                              className=" bg-gray-100 w-[340px] p-2 border rounded"
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <input
                              type="text"
                              placeholder="m²"
                              className=" bg-gray-100 w-[340px] mr-2 p-2 border rounded"
                            />
                            <input
                              type="text"
                              placeholder="Property Value"
                              className=" bg-gray-100 w-[340px] p-2 border rounded"
                            />
                          </div>
                          <div className="flex w-full justify-between">
                            <input
                              type="text"
                              placeholder="m²"
                              className=" bg-gray-100 w-[340px] mr-2 p-2 border rounded"
                            />
                            <div className="mt-4 w-[340px]">
                              <div className="flex justify-between items-center">
                                <span>Total Value</span>
                                <span>$ 7000</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-lime-300 h-2.5 rounded-full w-3/4"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-1/3 bg-white rounded-[50px] p-10 ">
                        <h2 className="text-3xl font-semibold mb-8">Bid For Data Results</h2>
                        <div className="bg-gray-100 p-2 rounded-xl mb-8">
                          <p className="text-3xl font-bold">
                            $1,600<span className="text-sm font-normal">/Month</span>
                          </p>
                        </div>
                        <button className="w-full bg-black text-white text-3xl p-2 rounded-xl">
                          $1,200<span className="text-sm">/Month</span>
                        </button>
                        <p className="text-sm text-center mt-2">Payment includes Tax 0%</p>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </section>

          <section className="bg-gray-100 py-20">
            <div className="container mx-auto p-4">
              <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 p-4">
                  <p className="text-lg">Have any question? Feel free to contact us. We are always happy to help.</p>
                  <p className="text-lg mt-4">
                    Email:{' '}
                    <a href="mailto:info@smkn2sukoharjo.sch.id" className="text-blue-600 hover:underline">
                      info@smkn2sukoharjo.sch.id
                    </a>
                  </p>
                  <p className="text-lg mt-4">
                    Phone:{' '}
                    <a href="tel:0271-876543" className="text-blue-600 hover:underline">
                      0271-876543
                    </a>
                  </p>
                  <p className="text-lg mt-4">Address: Jl. Raya Solo - Yogyakarta No. 12, Sukoharjo, Jawa Tengah</p>
                </div>
                <div className="w-full md:w-1/2 p-4 mt-8 md:mt-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.546118645344!2d110.81324461484696!3d-7.666133794436393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f0ebf7c3a09%3A0x5c9f5b9d9c8b39f4!2sSMK%20Negeri%202%20Sukoharjo!5e0!3m2!1sen!2sid!4v1658570111411!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: '0' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <section className="bg-white py-20">
              <div className="container mx-auto p-4">
                <h2 className="text-4xl font-bold text-center mb-10">Profile Kepala Sekolah</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                  <div className="w-full lg:w-1/2 p-4">
                    <img src="/images/kasek.jpg" alt="Kepala Sekolah" className="rounded-full w-48 h-48 mb-8 mx-auto" />
                    <h3 className="text-2xl font-bold">Dr. H. Muhammad Hatta, S.Pd., M.Pd.</h3>
                    <p className="text-lg">Kepala Sekolah SMK Negeri 2 Sukoharjo</p>
                    <p className="text-lg mt-4">Pendidikan:</p>
                    <ul className="list-disc list-inside">
                      <li>S1 Pendidikan Agama Islam Universitas Islam Negeri (UIN) Sunan Kalijaga Yogyakarta</li>
                      <li>S2 Pendidikan Agama Islam Universitas Islam Negeri (UIN) Sunan Kalijaga Yogyakarta</li>
                      <li>S3 Pendidikan Agama Islam Universitas Islam Negeri (UIN) Sunan Kalijaga Yogyakarta</li>
                    </ul>
                    <p className="text-lg mt-4">Kontak:</p>
                    <ul className="list-disc list-inside">
                      <li>
                        Email:{' '}
                        <a href="mailto:kasek@smkn2sukoharjo.sch.id" className="text-blue-600 hover:underline">
                          kasek@smkn2sukoharjo.sch.id
                        </a>
                      </li>
                      <li>
                        Phone:{' '}
                        <a href="tel:085643212345" className="text-blue-600 hover:underline">
                          085643212345
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-1/2 p-4">
                    <p className="text-lg">
                      Dr. H. Muhammad Hatta, S.Pd., M.Pd. adalah seorang tokoh pendidikan yang sangat berpengalaman di
                      bidangnya. Beliau memiliki pengalaman mengajar lebih dari 20 tahun dan pernah menjadi Kepala
                      Sekolah di beberapa SMA dan SMK di Sukoharjo.
                    </p>
                    <p className="text-lg mt-4">
                      Pendidikan yang diperoleh dari Universitas Islam Negeri (UIN) Sunan Kalijaga Yogyakarta telah
                      membentuknya menjadi seorang yang sangat berwawasan luas dan berpengalaman di bidang pendidikan.
                    </p>
                    <p className="text-lg mt-4">
                      Sebagai seorang Kepala Sekolah, beliau memiliki visi untuk meningkatkan kualitas pendidikan di SMK
                      Negeri 2 Sukoharjo dengan mengembangkan kurikulum yang berbasis kebutuhan industri dan
                      meningkatkan keterampilan siswa agar siap bekerja di dunia industri.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className="p-10">
            <div className="flex flex-col gap-10">
              <div className="flex">
                <h1 className="font-bold text-6xl w-[60%]">Become The Trust Of Users In The World.</h1>
                <h1 className="w-[40%]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reprehenderit accusamus .
                </h1>
              </div>
              <div className="flex">
                <div className="flex flex-col w-[60%]">
                  <div className="flex [&_div]:w-[30%] [&_div]:h-40 [&_div]:text-3xl [&_div]:flex [&_div]:justify-center [&_div]:items-center  [&_div]:m-auto [&_div]:text-center [&_div]:rounded-xl">
                    <div className="bg-green-500">Lorem ipsumaa </div>
                    <div className="">Lorem ipsumaa</div>
                    <div className="">Lorem ipsumaa</div>
                  </div>
                  <div className="flex [&_div]:w-[30%] [&_div]:h-28 [&_div]:text-3xl [&_div]:flex [&_div]:justify-center [&_div]:items-center  [&_div]:m-auto [&_div]:text-center [&_div]:rounded-xl">
                    <div className="">Lorem ipsumaa</div>
                    <div className="">Lorem ipsumaa</div>
                    <div className="">Lorem ipsumaa</div>
                  </div>
                </div>
                <h1 className="text-5xl text-white p-10 bg-black w-[40%] rounded-xl">
                  Become The Trust Of Users In The World
                </h1>
              </div>
              <div className="flex justify-between [&_div]:flex [&_div]:text-2xl">
                <div>Lorem ipsumaa</div>
                <div>Lorem ipsumaa</div>
                <div>Lorem ipsumaa</div>
                <div>Lorem ipsumaa</div>
                <div>Lorem ipsumaa</div>
              </div>
            </div>
          </section>

          <section className="flex gap-20 w-fit pr-10 pt-20">
            <div className="relative grid grid-cols-2 !gap-0 w-full h-full">
              <div className="absolute size-[265px] bg-black m-auto inset-0 -z-10"></div>
              <div className="rounded-full border-[25px] border-white overflow-hidden">
                <img
                  className="rounded-full object-cover size-fit flex-shrink-0"
                  src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png"
                  alt=""
                />
              </div>
              <div className="rounded-full border-[25px] border-white overflow-hidden">
                <img
                  className="rounded-full object-cover size-fit flex-shrink-0"
                  src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png"
                  alt=""
                />
              </div>
              <div className="rounded-full border-[25px] border-white overflow-hidden">
                <img
                  className="rounded-full object-cover size-fit flex-shrink-0"
                  src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png"
                  alt=""
                />
              </div>
              <div className="rounded-full border-[25px] border-white overflow-hidden">
                <img
                  className="rounded-full object-cover size-fit flex-shrink-0"
                  src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-10">
              <div className="text-7xl font-bold">Lorem ipsum dolor sit amet consectetur</div>
              <div className="flex gap-10">
                <div className="bg-green-400 rounded-xl p-1 text-5xl font-bold">400 T+</div>
                <div className="text-5xl font-bold">redy with you</div>
              </div>
              <div className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quaerat sint quam maiores aperiam
              </div>
              <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                <h1>looking for a Financial</h1>
                <h1>^</h1>
              </div>
            </div>
          </section>

          <section className="flex gap-32 w-fit pl-32 pr-10 py-20">
            <div className="w-full flex flex-col gap-5">
              <div className="text-7xl font-bold">looking to refinance</div>
              <div className="text-2xl">
                Lorem ipsum dolor sit amet consectetur elit. Ab quaerat sint quam maiores aperiam
              </div>
              <div className="">
                <div className="flex">
                  <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                    <h1>looking for a Financial</h1>
                  </div>
                  <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                    <h1> for a </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                    <h1>looking for a </h1>
                  </div>
                  <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                    <h1>looking a Financial</h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                    <h1>looking Financial</h1>
                  </div>
                  <div className="text-2xl border-2 w-fit px-2 py-1 flex gap-20 border-black rounded-xl mt-1">
                    <h1> for a Financial</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative grid grid-cols-2 w-full">
              <div className="absolute size-[450px] m-auto inset-0">
                <img
                  className="border-[20px] border-green-400 rounded-full"
                  src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png"
                  alt=""
                />
              </div>
              <div className="absolute size-[225px] justify-end">
                <div className="text-center font-bold w-full h-[56px] bg-black rounded-t-3xl text-white">lorem as</div>
                <div className="text-center font-bold w-full h-[56px] bg-yellow-200">asajea feas</div>
                <div className="text-center font-bold w-full h-[56px] bg-green-300">fadakla</div>
                <div className="text-center font-bold w-full h-[56px] bg-yellow-200 rounded-b-3xl">sdsf asais</div>
              </div>
            </div>
          </section>
        </section>
        <section className='flex flex-col px-16 gap-16'>
          <div className="flex justify-between pl-16 bg-green-500 rounded-xl">
            <div className="m-4 flex justify-between">
              <div className="text-5xl w-[45%] ">
                Lorem ipsum, dolor sit met comsesas
              </div>
              <div className="flex flex-col w-[200px]">
                <div className="font-bold">
                  judul nih bre
                </div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. aperiam aspernatur earu
                </div>
              </div>
              <div className="size-[200px] border-2 border-black rounded-xl"></div>
            </div>
          </div>
          <div className="flex pl-16 items-start justify-between">
            <div className="flex flex-col gap-4">
              <div className="text-5xl font-bold">
                loremsesa
              </div>
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
        </section>
      </main>
    </>
  );
};

export default HomePage;