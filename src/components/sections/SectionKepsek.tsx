/** @format */

import Image from '@/components/layers/Image';
import { cn } from '@/lib/utils';

const listKepsek = [
  { name: 'Tuti Mahriah, S.P.', periode: '2021 - Sekarang' },
  { name: 'Drs. Mujiono, M.Pd.', periode: '2020 - 2021' },
  { name: 'Triman, S.Pd., M.Si.', periode: '2014 - 2020' },
  { name: 'Drs.Sugiyarno, S.T., M.Pd.', periode: '2007 - 2014' },
  { name: 'Drs. Sudibyo', periode: '2004 - 2007' },
];

const SectionKepsek = () => {
  return (
    <>
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
                SMKN 2 Sukoharjo di bawah naungan Dinas Pendidikan Provinsi Jawa Tengah memiliki 8 Konsentrasi Keahlian
                yaitu Teknik Kendaraan Ringan Otomotif, Teknik Kimia Industri, Teknik Mekanik Industri, Agribisnis
                Ternak Ruminansia, Teknik Mekatronika, Teknik Desain Pemodelan & Informasi Bangunan, Konsentrasi
                Keahlian Agribisnis Pengolahan Hasil Pertanian serta Usaha Pertanian Terpadu.
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
            <Image
              className="border-[10px] drop-shadow-md border-white size-full object-cover rounded-full object-top aspect-square"
              src="/person/kepsek-ibu-tuti-mahriah.webp"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionKepsek;
