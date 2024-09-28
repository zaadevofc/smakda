/** @format */

'use client';

import Brand from '@/components/Brand';
import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, LucideChevronRight, LucideMapPin, Youtube } from 'lucide-react';
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
  ];

  const products = [
    {
      title: 'Moonbeam',
      link: 'https://gomoonbeam.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
    },
    {
      title: 'Cursor',
      link: 'https://cursor.so',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cursor.png',
    },
    {
      title: 'Rogue',
      link: 'https://userogue.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/rogue.png',
    },

    {
      title: 'Editorially',
      link: 'https://editorially.org',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editorially.png',
    },
    {
      title: 'Editrix AI',
      link: 'https://editrix.ai',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/editrix.png',
    },
    {
      title: 'Pixel Perfect',
      link: 'https://app.pixelperfect.quest',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
    },

    {
      title: 'Algochurn',
      link: 'https://algochurn.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
    },
    {
      title: 'Aceternity UI',
      link: 'https://ui.aceternity.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
    },
    {
      title: 'Tailwind Master Kit',
      link: 'https://tailwindmasterkit.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
    },
    {
      title: 'SmartBridge',
      link: 'https://smartbridgetech.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
    },
    {
      title: 'Renderwork Studio',
      link: 'https://renderwork.studio',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
    },

    {
      title: 'Creme Digital',
      link: 'https://cremedigital.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://goldenbellsacademy.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://invoker.lol',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/invoker.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://efreeinvoice.com',
      thumbnail: 'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
    },
  ];

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
              <Button className="rounded-full font-bold">Masuk</Button>
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
            <ParallaxBannerLayer image="/banner/smakda-18.png" />
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

        <section className="flex flex-col gap-52 mt-24 w-full [&>section]:px-5">
          <motion.section className="w-full">
            <div className="max-w-screen-2xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col gap-8">
                  <h1 className="text-4xl md:text-5xl font-montser font-black leading-tight">
                    SEKOLAH UNGGULAN DI KABUPATEN <span className="text-gradient-primary">SUKOHARJO</span>
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

          <section className="w-full">
            <div className="max-w-screen-2xl w-full mx-auto flex flex-col gap-20">
              <h1 className="font-black text-5xl w-full font-montser uppercase">
                <span className="text-gradient-primary">Konsentrasi</span>
                <br />
                <span>Keahlian</span>
              </h1>
              <div className="flex gap-20 justify-between">
                <div className="flex flex-col w-full">
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-8 gap-5">
                    {listsJurusan.map(x => (
                      <div
                        style={{ backgroundImage: `url(${x.logo})` }}
                        className={cn(
                          'flex drop-shadow-xl font-extrabold h-40 pt-16 bg-contain bg-no-repeat bg-center bg-opacity-5 text-white'
                        )}
                      >
                        <div className="mx-auto text-center -space-y-1.5 drop-shadow-lg flex flex-col py-1 h-fit mt-auto rounded-b-xl bg-gradient-to-l to-transparent via-primary from-transparent w-full">
                          <h1 className="uppercase font-montser text-2xl">{x.label}</h1>
                          <p className="text-sm mt-auto">{x.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col text-center gap-5 w-1/2">
                  <h1 className="flex items-center justify-center text-4xl h-1/2 text-white p-8 bg-gradient-primary font-black -tracking-wide rounded-xl uppercase font-montser">
                    tentukan jurusan yang sesuai
                  </h1>
                  <h1 className="flex items-center justify-center text-4xl h-1/2 text-white p-8 bg-gradient-primary !bg-gradient-to-bl font-black -tracking-wide rounded-xl uppercase font-montser">
                    lalu mulailah berinovasi !!
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="max-w-screen-2xl w-full mx-auto flex justify-between gap-32">
              <div className="w-full flex flex-col gap-8">
                <div className="flex flex-col">
                  <h1 className="text-5xl font-montser font-black uppercase">
                    Kepala Sekolah
                    <br />
                    <span className="text-gradient-primary">{listKepsek[0].name}</span>
                  </h1>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-xl font-titan text-gray-500 text-justify">
                    SMKN 2 Sukoharjo di bawah naungan Dinas Pendidikan Provinsi Jawa Tengah memiliki 8 Konsentrasi
                    Keahlian yaitu Teknik Kendaraan Ringan Otomotif, Teknik Kimia Industri, Teknik Mekanik Industri,
                    Agribisnis Ternak Ruminansia, Teknik Mekatronika, Teknik Desain Pemodelan & Informasi Bangunan,
                    Konsentrasi Keahlian Agribisnis Pengolahan Hasil Pertanian serta Usaha Pertanian Terpadu.
                  </p>
                  <p className="text-xl font-titan text-gray-500 text-justify">
                    Kami bertekad menyiapkan lulusan kompeten yang siap terjun di dunia kerja. Industri yang berkembang
                    sangat pesat, memerlukan dukungan Sumber Daya Manusia yang profesional agar dapat mengimbangi
                    perkembangan teknologi.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-0">
                  {listKepsek.map((x, i) => (
                    <div
                      className={cn(
                        'border border-primary overflow-hidden',
                        i == 0 && 'text-white bg-primary bg-gradient-primary !via-primary'
                      )}
                    >
                      <div className="relative p-5 -space-y-1 text-center w-full z-10">
                        <h3 className="text-lg font-extrabold font-montser uppercase">{x.periode}</h3>
                        <p className={cn('text-sm font-semibold uppercase mt-2 text-gray-500', i == 0 && 'text-white')}>
                          {x.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="size-[500px] rounded-full border-[12px] border-primary flex-shrink-0">
                <img
                  className="border-[10px] drop-shadow-md border-white size-full object-cover rounded-full object-top aspect-square"
                  src="/person/kepsek-ibu-tuti-mahriah.webp"
                  alt=""
                />
              </div>
            </div>
          </section>

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

          <section className="w-full">
            <div className="flex flex-col max-w-screen-2xl w-full mx-auto gap-16">
              <h1 className="font-black text-5xl w-full font-montser uppercase">
                Berita
                <br />
                <span className="text-gradient-primary">Terbaru</span>
              </h1>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                {Array.from({ length: 4 }).map(x => (
                  <article className="flex flex-col group overflow-hidden rounded-xl border border-primary cursor-pointer">
                    <div className="pb-0 p-3">
                      <img
                        src="https://smkn2sukoharjo.sch.id/wp-content/uploads/2024/09/esport-4-700x430.jpg"
                        className="object-cover aspect-video rounded-xl border border-primary"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-2 p-4 w-full">
                      <h1 className="line-clamp-2 text-lg leading-tight font-extrabold">
                        Perlombaan E-Sport yang dapat meningkatkan keterampilan strategis dan kepemimpinan siswa di
                        kegiatan jeda semester 1
                      </h1>
                      <p className="text-gray-500 text-pretty leading-tight line-clamp-3">
                        Dewasa ini fenomena e-Sport mengalami ketenaran, bahkan dapat dikatakan sedang naik daun.
                        Electronic sport (e-Sport) merupakan olahraga digital yang terorganisir
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <Button className="flex items-center rounded-xl gap-1 w-fit ml-auto -mt-5 font-extrabold">
                <h1>Berita Lainnya</h1>
                <LucideChevronRight className="text-sm" />
              </Button>
            </div>
          </section>

          <section className="relative w-full bg-primary h-full text-white">
            <div className="absolute w-full h-40 z-10 top-0 left-0 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute w-full h-40 z-10 bottom-0 left-0 bg-gradient-to-t from-white to-transparent" />
            <div className="flex flex-col max-w-screen-2xl justify-center items-center text-center w-full mx-auto py-52">
              <h1 className="text-6xl font-black font-montser mb-4 uppercase">
                hidup adalah
                <br />
                perjalanan bukan sebuah
                <br />
                <span className="italic text-clip bg-gradient-to-tr from-white via-white/70 to-transparent">
                  perlombaan
                </span>
              </h1>
            </div>
          </section>
        </section>

        <HeroParallax products={products} />

        <section className="flex flex-col px-16 gap-16">
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
        </section>
      </main>
    </>
  );
};

export default HomePage;
