'use client'

import { Button } from '@/components/ui/button'
import { CDN_URI } from '@/lib/utils'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const HomePage = () => {
  return (
    <>
      <main className='min-w-full w-full h-full h-vh mx-auto'>
        <nav className='fixed inset-x-0 mx-auto top-0 z-50 bg-white/80 backdrop-blur-xl w-full border-b border-gray-300 px-6 py-4'>
          <div className='flex items-center max-w-screen-2xl w-full mx-auto'>
            <div className='flex items-center gap-1'>
              <img src="/logo-smk.png" alt="" className='size-10' />
              <h1 className='font-extrabold text-xl'>SMKN 2 SUKOHARJO</h1>
            </div>
            <div className='flex gap-5 mx-auto'>
              <h1>Beranda</h1>
              <h1>Profil</h1>
              <h1>Jurusan</h1>
              <h1>Program</h1>
              <h1>Manajemen</h1>
              <h1>Ekstrakurikuler</h1>
              <h1>Informasi</h1>
            </div>
            <div className='flex gap-3 ml-auto'>
              <Button>Masuk</Button>
            </div>
          </div>
        </nav>
        <ParallaxBanner
          layers={[
            { image: '/banner/smakda-4.webp', speed: -20 },
          ]}
          className="aspect-[2/1]"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
          </div>
        </ParallaxBanner>
        <section className='w-full fixed inset-x-0 -z-10 mx-auto'>
          <div className='max-w-screen-2xl w-full flex flex-col mx-auto py-5s'>
            <div className="relative w-full overflow-hidden max-h-[500px]">
              <div className="absolute flex inset-0 bg-gradient-to-r from-white/0 via-transparent to-white/0">
              </div>
              <div className="absolute flex inset-0 bg-gradient-to-t from-white via-transparent">
              </div>
              <video controls={false} autoPlay loop muted preload="metadata" className="aspect-video w-full">
                {/* <source src={CDN_URI("/showcase/adiwiyata-smakda.webm")} type="video/webm" /> */}
                <source src={CDN_URI("/showcase/adiwiyata-smakda-cut-muted.mp4")} type="video/mp4" />
                Maaf, browser Anda tidak mendukung tag video HTML5.
              </video>
            </div>
          </div>
        </section>
        <section className='w-full border-b grid mb-[2000px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] bg-white'>
          <div className='flex items-center max-w-screen-2xl w-full mx-auto'>
            <div className="w-full mx-auto p-8">
              <div className='flex justify-between w-full flex-row-reverse'>
                <h1 className='text-3xl font-black text-right'>CIPTAKAN GENERASI EMAS<br />BERSAMA SMKN 2 SUKOHARJO</h1>
                <div className="flex flex-col md:flex-row gap-20 justify-center items-start md:items-center">
                  <div className="mb-8 md:mb-0 border p-10">
                    <h2 className="text-xl font-bold mb-4">HUBUNGI KAMI:</h2>
                    <div className="flex space-x-6">
                      <img src="https://g-te-ajuvb5fj.vusercontent.net/placeholder.svg?height=40&width=40" alt="Spotify" width={40} height={40} />
                      <img src="https://g-te-ajuvb5fj.vusercontent.net/placeholder.svg?height=40&width=40" alt="Google Podcasts" width={40} height={40} />
                      <img src="https://g-te-ajuvb5fj.vusercontent.net/placeholder.svg?height=40&width=40" alt="YouTube" width={40} height={40} />
                      <img src="https://g-te-ajuvb5fj.vusercontent.net/placeholder.svg?height=40&width=40" alt="Apple Podcasts" width={40} height={40} />
                    </div>
                    <div className="flex mt-2 space-x-6 text-sm text-gray-600">
                      <span>Spotify</span>
                      <span>G-podcast</span>
                      <span>Youtube</span>
                      <span>Podcast</span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-10'>
                    <div className="flex space-x-8">
                      <div className="text-center">
                        <h3 className="text-4xl font-bold">2K+</h3>
                        <p className="text-sm text-gray-600">SISWA</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold">400+</h3>
                        <p className="text-sm text-gray-600">GURU</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold">40+</h3>
                        <p className="text-sm text-gray-600">PROGRAM</p>
                      </div>
                    </div>
                    <div className="flex space-x-8">
                      <div className="text-center">
                        <h3 className="text-4xl font-bold">2K+</h3>
                        <p className="text-sm text-gray-600">SISWA</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold">400+</h3>
                        <p className="text-sm text-gray-600">GURU</p>
                      </div>
                      <div className="text-center">
                        <h3 className="text-4xl font-bold">40+</h3>
                        <p className="text-sm text-gray-600">PROGRAM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage