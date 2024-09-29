/** @format */

'use client';

import { cn } from '@/lib/utils';

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

const SectionJurusan = () => {
  return (
    <>
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
    </>
  );
};

export default SectionJurusan;
