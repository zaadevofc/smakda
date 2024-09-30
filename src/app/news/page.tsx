import LayoutsPage from '@/components/layers/Layouts'
import { DivideSquare } from 'lucide-react'
import React from 'react'
import Image from '@/components/layers/Image';

const NewsPage = () => {
    return (
        <>
            <LayoutsPage>
                <section className="w-full">
                    <div className="flex flex-col max-w-screen-2xl w-full mx-auto gap-16 text-center mt-20"> 
                        <h1 className="font-black text-7xl w-full font-montser uppercase">
                            Berita
                            <br />
                            <span className="text-gradient-primary">Terbaru</span>
                        </h1>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                            {Array.from({ length: 23 }).map(x => (
                                <article className="flex flex-col group overflow-hidden rounded-xl border border-primary cursor-pointer">
                                    <div className="pb-0 p-3">
                                        <Image
                                            src="https://smkn2sukoharjo.sch.id/wp-content/uploads/2024/09/esport-4-700x430.jpg"
                                            className="object-cover aspect-video rounded-xl border border-primary"
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 p-4 w-full">
                                        <h1 className="line-clamp-2 text-lg leading-tight font-extrabold">
                                            Perlombaan E-Sport yang dapat meningkatkan keterampilan strategis dan kepemimpinan siswa di kegiatan
                                            jeda semester 1
                                        </h1>
                                        <p className="text-gray-500 text-pretty leading-tight line-clamp-3">
                                            Dewasa ini fenomena e-Sport mengalami ketenaran, bahkan dapat dikatakan sedang naik daun. Electronic
                                            sport (e-Sport) merupakan olahraga digital yang terorganisir
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </LayoutsPage>
        </>
    )
}

export default NewsPage
