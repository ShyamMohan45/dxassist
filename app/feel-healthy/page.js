import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function page() {
  return (
    <main>
        <section className='relative w-full h-[564px] border-2 border-black'>
            <img src="/feel-healthy_image.png" alt="Feeling healthy" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 h-full flex items-center border-2 border-black">
              <div className='px-16 text-white'>
                <h1 className='text-6xl font-serif mb-4'>
                    Explore How We Can Help
                </h1>
                <p className="text-2xl">
              We&apos;re in this together
            </p>

              </div>
            </div>
        </section>
        
        <section className="w-full h-[265.7px] border-2 border-black flex items-center justify-center bg-[#063846] text-white">
  <div className="max-w-3xl text-center px-6">
    
    <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
      Transforming clinical data into clarity — so care comes first.
    </h2>

    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-teal-500"></div>

    <p className="mt-5 text-lg text-white">
      DxAssist leverages AI to streamline documentation, surface critical insights,
      and help clinicians make faster, more confident decisions—without adding complexity.
    </p>

  </div>
</section>
    <section className="w-full h-[706.64px] bg-[#eaf3f1] flex flex-col items-center justify-center border-2 border-black">

  
        <h2 className="text-4xl font-serif text-gray-700 mb-2 border-2 border-black">
            Recipes & Health Tips
        </h2>

        <p className="text-gray-600 mb-12 border-2 border-black">
            Learn more about maintaining good health and managing your conditions.
        </p>


        <div className="max-w-6xl w-full grid grid-cols-3 gap-10 px-8 border-2 border-black">

            <div className="text-center border-2 border-black">
                <img
                    src="/SproutedMoong.jpg"
                    alt="Sprouted Moong"
                    className="w-full h-[260px] object-cover rounded-md mb-4 border-2 border-black"
                />
                <h3 className="text-xl font-serif text-teal-700 underline mb-4">
                    Sprouted Moong
                </h3>
                <Link href="/Recipesoffeelgood/sproutedmoong">
                    <button className="px-6 py-2 border-2 border-teal-700 text-teal-700 rounded-full hover:bg-teal-700 hover:text-white transition">
                        GO TO RECIPE
                    </button>
                </Link>

            </div>

  
        <div className="text-center border-2 border-black">
                <img
                    src="/vegetable-millet-khichdi.jpg"
                    alt="Vegetable Millet Khichdi"
                    className="w-full h-[260px] object-cover rounded-md mb-4 border-2 border-black"
                />
                <h3 className="text-xl font-serif text-teal-700 underline mb-4">
                    Vegetable Millet Khichdi
                </h3>
                        <Link href="/Recipesoffeelgood/milletkhichdi">
                            <button className="px-6 py-2 border-2 border-teal-700 text-teal-700 rounded-full hover:bg-teal-700 hover:text-white transition">
                                GO TO RECIPE
                            </button>
                        </Link>

                </div>


                <div className="text-center border-2 border-black">
                <img
                    src="/palak-dal.jpg"
                    alt="Palak Dal"
                    className="w-full h-[260px] object-cover rounded-md mb-4 border-2 border-black"
                />
                <h3 className="text-xl font-serif text-teal-700 underline mb-4">
                    Palak Dal
                </h3>
                <Link href="/Recipesoffeelgood/palakdal">
                    <button className="px-6 py-2 border-2 border-teal-700 text-teal-700 rounded-full hover:bg-teal-700 hover:text-white transition">
                        GO TO RECIPE
                    </button>
                </Link>

                </div>

        </div>
    </section>

    </main>
  )
}
