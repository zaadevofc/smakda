/** @format */

'use client';

const SectionQuotes = () => {
  return (
    <>
      <section className="relative w-full bg-primary h-full text-white">
        <div className="absolute w-full h-40 z-10 top-0 left-0 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute w-full h-40 z-10 bottom-0 left-0 bg-gradient-to-t from-white to-transparent" />
        <div className="flex flex-col max-w-screen-2xl justify-center items-center text-center w-full mx-auto py-52">
          <h1 className="text-6xl font-black font-montser mb-4 uppercase">
            hidup adalah
            <br />
            perjalanan bukan
            <br />
            <span className="italic text-clip bg-gradient-to-tr from-white via-white/70 to-transparent">
              perlombaan
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default SectionQuotes;
