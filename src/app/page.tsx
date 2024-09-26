'use client'

import { Button } from '@/components/ui/button'
import { CDN_URI } from '@/lib/utils'
import { useRef } from 'react'

const HomePage = () => {
  return (
    <>
      <main className='min-w-full w-full h-full h-vh mx-auto'>
        <nav className='fixed inset-x-0 mx-auto top-0 z-50 bg-white/80 backdrop-blur-xl w-full border-b border-gray-300 px-6 py-4'>
          <div className='flex items-center max-w-screen-2xl w-full mx-auto'>
            <div className='flex items-center gap-2'>
              <img src="/logo-smk.png" alt="" className='size-10' />
              <div className='overflow-hidden pl-3 border-l border-black'>
                <h1 className='font-extrabold text-xl animate__animated animate__slideInLeft animate__slow'>SMKN 2 SUKOHARJO</h1>
              </div>
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
            { image: '/banner/smakda-8.webp', speed: 40 },
          ]}
          className="aspect-[2/1] object-top h-[100vh] rounded-b-[50px]s"
        >
          <div className="absolute bg-gradient-to-t to-transparent from-black/70 inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold mb-4 uppercase text-center text-white">
              BERSAMA
              <br />
              <div className='relative overflow-hidden'>
                <div className='absolute size-full animate__animated animate__slideInLeft inset-x-0 mx-auto bg-[#5CCDFF] rounded-xl'></div>
                <h1 className='animate__animated animate__slideInUp px-4 py-1'>
                  SMKN 2 SUKOHARJO
                </h1>
              </div>
              <h1 className="font-serifs font-semibold -tracking-wider italic">
                MEMBANGUN NEGERI
              </h1>
            </div>
          </div>
        </ParallaxBanner>
        <section className='w-full mx-auto hidden'>
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
        </section>
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
              <div className=" w-[273px] bg-[#eeebeb]  h-[273px] px-5 py-5 flex flex-col justify-between">
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

        <section className='bg-gradient-to-t from-[#4364AE] to-black text-white min-h-screen'>
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
              <section>
                <div className="flex flex-col">
                  <div className="flex flex-col rounded-[50px] bg-lime-300">
                    <div className="">
                      <h1 className='text-black px-40 font-bold pt-20 text-center text-5xl'>
                        Calculate The Production Property We Can Do.
                      </h1>
                    </div>
                    <div className="flex justify-center w-full gap-10 my-20">
                      <Button variant="outline" className="rounded-full text-xl bg-white text-black">Overview</Button>
                      <Button variant="secondary" className="rounded-full text-xl bg-black text-white">Calculator</Button>
                      <Button variant="outline" className="rounded-full text-xl bg-white text-black">History And Development</Button>
                      <Button variant="outline" className="rounded-full text-xl bg-white text-black">Special Program</Button>
                    </div>
                  </div>
                  <div className="flex gap-5 text-black mt-5">
                    <div className="flex-grow bg-white rounded-[50px] px-10 py-10">
                      <div className="flex justify-between">
                        <h2 className="text-3xl font-semibold mb-4">Calculator Simulation</h2>
                        <div className=" mb-4 p-2 border-2 rounded-2xl border-black">
                          Property Value  V
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <input type="text" placeholder="m²" className=" bg-gray-100 w-[340px] mr-2 p-2 border rounded" />
                          <input type="text" placeholder="Property Value" className=" bg-gray-100 w-[340px] p-2 border rounded" />
                        </div>
                        <div className="flex items-center justify-between">
                          <input type="text" placeholder="m²" className=" bg-gray-100 w-[340px] mr-2 p-2 border rounded" />
                          <input type="text" placeholder="Property Value" className=" bg-gray-100 w-[340px] p-2 border rounded" />
                        </div>
                        <div className="flex w-full justify-between">
                          <input type="text" placeholder="m²" className=" bg-gray-100 w-[340px] mr-2 p-2 border rounded" />
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
                        <p className="text-3xl font-bold">$1,600<span className="text-sm font-normal">/Month</span></p>
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
                <p className="text-lg">
                  Have any question? Feel free to contact us. We are always happy to help.
                </p>
                <p className="text-lg mt-4">
                  Email: <a href="mailto:info@smkn2sukoharjo.sch.id" className="text-blue-600 hover:underline">info@smkn2sukoharjo.sch.id</a>
                </p>
                <p className="text-lg mt-4">
                  Phone: <a href="tel:0271-876543" className="text-blue-600 hover:underline">0271-876543</a>
                </p>
                <p className="text-lg mt-4">
                  Address: Jl. Raya Solo - Yogyakarta No. 12, Sukoharjo, Jawa Tengah
                </p>
              </div>
              <div className="w-full md:w-1/2 p-4 mt-8 md:mt-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.546118645344!2d110.81324461484696!3d-7.666133794436393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f0ebf7c3a09%3A0x5c9f5b9d9c8b39f4!2sSMK%20Negeri%202%20Sukoharjo!5e0!3m2!1sen!2sid!4v1658570111411!5m2!1sen!2sid"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
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
                    <li>Email: <a href="mailto:kasek@smkn2sukoharjo.sch.id" className="text-blue-600 hover:underline">kasek@smkn2sukoharjo.sch.id</a></li>
                    <li>Phone: <a href="tel:085643212345" className="text-blue-600 hover:underline">085643212345</a></li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 p-4">
                  <p className="text-lg">
                    Dr. H. Muhammad Hatta, S.Pd., M.Pd. adalah seorang tokoh pendidikan yang sangat berpengalaman di bidangnya. Beliau memiliki pengalaman mengajar lebih dari 20 tahun dan pernah menjadi Kepala Sekolah di beberapa SMA dan SMK di Sukoharjo.
                  </p>
                  <p className="text-lg mt-4">
                    Pendidikan yang diperoleh dari Universitas Islam Negeri (UIN) Sunan Kalijaga Yogyakarta telah membentuknya menjadi seorang yang sangat berwawasan luas dan berpengalaman di bidang pendidikan.
                  </p>
                  <p className="text-lg mt-4">
                    Sebagai seorang Kepala Sekolah, beliau memiliki visi untuk meningkatkan kualitas pendidikan di SMK Negeri 2 Sukoharjo dengan mengembangkan kurikulum yang berbasis kebutuhan industri dan meningkatkan keterampilan siswa agar siap bekerja di dunia industri.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className='p-10'>
          <div className="flex flex-col gap-10">
            <div className="flex">
              <h1 className='font-bold text-6xl w-[60%]'>Become The Trust Of Users In The World.</h1>
              <h1 className='w-[40%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam reprehenderit accusamus .</h1>
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
              <h1 className='text-5xl text-white p-10 bg-black w-[40%] rounded-xl'>Become The Trust Of Users In The World</h1>
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
        <section className='flex gap-6 w-fit'>
          <div className="relative grid grid-cols-2 !gap-0 w-full h-full">
            <div className="absolute size-[265px] bg-black m-auto inset-0 -z-10"></div>
            <div className='rounded-full border-[25px] border-white overflow-hidden'><img className='rounded-full object-cover size-fit flex-shrink-0' src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png" alt="" /></div>
            <div className='rounded-full border-[25px] border-white overflow-hidden'><img className='rounded-full object-cover size-fit flex-shrink-0' src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png" alt="" /></div>
            <div className='rounded-full border-[25px] border-white overflow-hidden'><img className='rounded-full object-cover size-fit flex-shrink-0' src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png" alt="" /></div>
            <div className='rounded-full border-[25px] border-white overflow-hidden'><img className='rounded-full object-cover size-fit flex-shrink-0' src="https://zaadevofc.tech/assets/zaadevofc-icon-black-white.png" alt="" /></div>
          </div>
          <div className="w-full flex flex-col">
            <div className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci alias modi iusto delectus </div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </section>
      </main >
    </>
  )
}

export default HomePage