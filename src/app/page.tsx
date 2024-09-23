'use client'

import { Button } from '@/components/ui/button'
import { CDN_URI } from '@/lib/utils'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

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
            { image: '/banner/smakda-5.webp', speed: -20 },
          ]}
          className="aspect-[2/1] object-top"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl font-bold mb-4 uppercase text-center text-white">
              cahaya kehidupan
              <br />
              membangun masa depan
              <br />
              <span className="font-serif italic">
                gemilang</span>
            </h1>
          </div>
        </ParallaxBanner>
        {/* <section className='w-full fixed inset-x-0 -z-10 mx-auto'>
          <div className='max-w-screen-2xl w-full flex flex-col mx-auto py-5s'>
            <div className="relative w-full overflow-hidden max-h-[500px]">
              <div className="absolute flex inset-0 bg-gradient-to-r from-white/0 via-transparent to-white/0">
              </div>
              <div className="absolute flex inset-0 bg-gradient-to-t from-white via-transparent">
              </div>
              <video controls={false} autoPlay loop muted preload="metadata" className="aspect-video w-full">
                <source src={CDN_URI("/showcase/adiwiyata-smakda.webm")} type="video/webm" />
                <source src={CDN_URI("/showcase/adiwiyata-smakda-cut-muted.mp4")} type="video/mp4" />
                Maaf, browser Anda tidak mendukung tag video HTML5.
              </video>
            </div>
          </div>
        </section> */}
        <section className='w-full border-b grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] bg-white'>
          <div className='flex items-center max-w-screen-2xl w-full mx-auto'>
            <div className="w-full mx-auto p-8">
              <div className='flex justify-between w-full flex-row-reverse'>
                <h1 className='text-3xl font-black text-right max-w-md'>CIPTAKAN ZAHRAN DEVELOPER BERSAMA SMKN 2 SUKOHARJO</h1>
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
                        <p className=" text-sm text-gray-600">GURU</p>
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

        <section className="py-32 text-center">
          <h1 className="text-6xl font-bold mb-4 uppercase">
            cahaya kehidupan
            <br />
            membangun masa depan
            <br />
            <span className="font-serif italic">
              gemilang</span>
          </h1>
          <p className="text-black max-w-md mx-auto">
            We're a creative agency integrating AI technology to deliver next-gen
            solutions for brands.
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        <section className='flex flex-col py-20 max-w-screen-2xl w-full mx-auto'>
          <div className="flex justify-between">
            <h2 className="text-7xl font-bold h-44 w-full">FEATURES</h2>
            <div className="flex">
              <div className="bg-[#eeebeb] w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                  <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum </p>
                </div>
              </div>
              <div className="bg-white w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
                <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                  <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum </p>
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
              <div className="">
                v
              </div>
            </div>
            <div className="bg-[#eeebeb] w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
              <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="">
                <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum </p>
              </div>
            </div>
            <div className="bg-white w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
              <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="">
                <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum </p>
              </div>
            </div>
            <div className="bg-[#eeebeb] w-[273px] h-[273px] px-5 py-5 flex flex-col justify-between">
              <div className="bg-red-600 w-10 h-10 mt-2 ml-2 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="">
                <h3 className="text-xl font-bold mb-1">Lorem ipsum dolor</h3>
                <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatum </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-20 flex flex-col max-w-screen-2xl w-full mx-auto'>
          <div className="pb-20">
            <h4 className="w-full text-center text-8xl">Our Works</h4>
          </div>
          <div className="flex flex-col gap-6">
            <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Txr-rpW-8kRSLWUe8gkR_h_0MUaQFHGrNQ&s" alt="" />
            <div className="gap-6 flex">
              <img className="rounded-3xl" width="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkVy4wUpcaWXKS_38R60zcPbPbMhIAUv6qQ&s" alt="" />
              <img className="rounded-3xl" width="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkVy4wUpcaWXKS_38R60zcPbPbMhIAUv6qQ&s" alt="" />
            </div>
            <img className="rounded-3xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Txr-rpW-8kRSLWUe8gkR_h_0MUaQFHGrNQ&s" alt="" />
          </div>
        </section>

        <section className='bg-gray-900 text-white min-h-screen'>
          <div className="p-20 max-w-screen-2xl w-full mx-auto">
            <main>

              <section className="mb-16 flex flex-col mx-12">
                <div className="text-[90px] font-bold ">
                  <h1>
                    Make Your Financial
                  </h1>
                </div>
                <div className="flex-col">
                  <div className="flex">
                    <div className="flex-col w-[66%] ">
                      <div className="text-[90px] font-bold mb-4">
                        <h1>
                          Goals Real
                        </h1>
                      </div>
                      <div className="flex my-10 ">
                        <div className="w-[50%] flex">
                          <div className='text-gray-400 w-fit text-left border-2 rounded-xl flex gap-5 border-gray-400 text-3xl px-2 py-1 h-fit'>
                            <h1>
                              get started
                            </h1>
                            <h1 className='text-white'>
                              /\
                            </h1>
                          </div>
                        </div>
                        <div className="w-[50%]">
                          <h1 className='pl-2 w-52 text-left text-sm text-gray-400'>
                            adipisicing elit adipisicing elit. Veritatis, tempora fugit expedita
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="mb-10 flex flex-col w-[33%] gap-3 pl-4 pt-10 text-gray-400">
                      <h1 className=''>Lorem ipsum  </h1>
                      <h1 className=''>Lorem ipsum Lorem </h1>
                      <h1 className=''>Lorem ipsum </h1>
                      <h1 className=''>Lorem ipsum Lorem </h1>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex-col w-[33%] text-left">
                      <h1 className='text-3xl font-bold'>
                        $460 Tr
                      </h1>
                      <h1 className='text-gray-400'>
                        Total Assets
                      </h1>
                    </div>
                    <div className="flex-col w-[33%] text-left">
                      <h1 className='text-3xl font-bold'>
                        17,000+
                      </h1>
                      <h1 className='text-gray-400'>
                        Clients We Serve
                      </h1>
                    </div>
                    <div className="flex-col w-[33%] text-left">
                      <h1 className='text-3xl font-bold'>
                        $20,000
                      </h1>
                      <h1 className='text-gray-400'>
                        Minimum Investment lorem
                      </h1>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-green-400 text-black p-8 rounded-lg mb-16">
                <h3 className="text-2xl font-bold mb-4">Calculate The Production Property We Can Do.</h3>
                <button className="bg-black text-white px-6 py-2 rounded-full">Calculate Now</button>
              </section>

              <section className="mb-16">
                <h3 className="text-2xl font-bold mb-4">Become The Trust Of Users In The World.</h3>
                <div className="grid grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Trusted</h4>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Secure</h4>
                    <p className="text-gray-400">Consectetur adipiscing elit</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Reliable</h4>
                    <p className="text-gray-400">Sed do eiusmod tempor</p>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h3 className="text-2xl font-bold mb-4">Collaborating With Many Investors As Financiers.</h3>
                <div className="flex items-center space-x-4">
                  <Image src="/placeholder.svg" alt="Investor 1" width={50} height={50} className="rounded-full" />
                  <Image src="/placeholder.svg" alt="Investor 2" width={50} height={50} className="rounded-full" />
                  <Image src="/placeholder.svg" alt="Investor 3" width={50} height={50} className="rounded-full" />
                  <Image src="/placeholder.svg" alt="Investor 4" width={50} height={50} className="rounded-full" />
                  <div className="bg-green-400 text-black px-4 py-2 rounded-full">
                    <p>4,000+ Ready With You</p>
                  </div>
                </div>
              </section>

              <section className="mb-16 flex items-center space-x-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Looking To Refinance.</h3>
                  <div className="space-y-4">
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full">Apply Now</button>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-full">Learn More</button>
                  </div>
                </div>
                <Image src="/placeholder.svg" alt="Refinance" width={300} height={300} className="rounded-full" />
              </section>

              <section className="bg-green-400 text-black p-8 rounded-lg mb-16 flex justify-between items-center">
                <h3 className="text-2xl font-bold">Let's Discuss With Our Team</h3>
                <button className="bg-black text-white p-2 rounded-full">
                  <ArrowUpRight size={24} />
                </button>
              </section>
            </main>

            <footer className="text-center text-gray-400">
              <p>&copy; 2023 theClose. All rights reserved.</p>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage