import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-[#f7fbfa]">

      <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

        <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
          <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
            Palak Dal
          </h1>
        </div>

        <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
          <Image
            src='/palak-dal.jpg'
            alt='Palak Dal'
            fill
            className='object-contain drop-shadow-xl'
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div className='w-full h-[120px] border-2 border-black flex items-center bg-white'>
          <div className='w-full grid grid-cols-4 text-center divide-x px-6'>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Serves</span>
              <span className='font-semibold text-lg text-gray-800'>2–3 People</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Prep Time</span>
              <span className='font-semibold text-sm text-gray-800'>
                Wash spinach and rinse dal thoroughly.
              </span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Cook Time</span>
              <span className='font-semibold text-lg text-gray-800'>20–25 Minutes</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Diet Type</span>
              <span className='font-semibold text-lg text-teal-700'>Iron Rich & High Protein</span>
            </div>

          </div>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

        <div className="col-span-2">

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Ingredients</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
            <li>1 cup toor dal (or moong dal)</li>
            <li>2 cups fresh spinach (palak), chopped</li>
            <li>1 small onion (chopped)</li>
            <li>2 cloves garlic (minced)</li>
            <li>1 small tomato (chopped)</li>
            <li>½ tsp turmeric powder</li>
            <li>Salt to taste</li>
            <li>1 tsp ghee or oil</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Instructions</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
            <li>Wash and pressure cook the dal with turmeric until soft.</li>
            <li>In a pan, heat ghee and sauté garlic and onion until golden.</li>
            <li>Add chopped tomato and cook until soft.</li>
            <li>Add spinach and cook until wilted.</li>
            <li>Mix in the cooked dal, add salt, and simmer for 5 minutes.</li>
            <li>Serve hot with rice or roti.</li>
          </ol>

        </div>

        <div className="bg-gray-50 border rounded-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

          <div className="divide-y text-gray-700">
            <div className="flex justify-between py-2"><span>Calories</span><span>190</span></div>
            <div className="flex justify-between py-2"><span>Protein</span><span>13 g</span></div>
            <div className="flex justify-between py-2"><span>Carbohydrates</span><span>26 g</span></div>
            <div className="flex justify-between py-2"><span>Fat</span><span>5 g</span></div>
            <div className="flex justify-between py-2"><span>Fiber</span><span>6 g</span></div>
            <div className="flex justify-between py-2"><span>Iron</span><span>4.1 mg</span></div>
          </div>
        </div>

      </section>

      <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

        <div className="max-w-6xl mx-auto text-center space-y-4">

          <p className="text-sm">
            DxAssist combines nutritional guidance with AI-powered clinical
            intelligence to support healthier dietary and lifestyle choices.
          </p>

          <p className="text-sm">
            Using Generative AI and Retrieval-Augmented Generation (RAG), DxAssist
            assists clinicians and individuals in understanding health conditions
            and managing nutrition-related concerns.
          </p>

          <p className="text-sm">
            The platform supports multilingual access and image-based symptom
            analysis to make healthcare insights more accessible to everyone.
          </p>

          <p className="text-xs text-gray-300">
            DxAssist is intended for informational and decision-support purposes only
            and does not replace professional medical diagnosis or treatment.
          </p>

        </div>
      </section>

    </main>
  )
}
