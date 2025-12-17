import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-[#f7fbfa]">

   
      <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

        <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
          <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
            Sprouted Moong Salad
          </h1>
        </div>

        <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
          <Image
            src='/sproutedmoong.jpg'
            alt='Sprouted Moong'
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
              <span className='font-semibold text-lg text-gray-800'>People (as your need)</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Prep Time</span>
              <span className='font-semibold text-sm text-gray-800'>
                Wrap soaked beans in a clean, damp cloth and tie lightly.
              </span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Cook Time</span>
              <span className='font-semibold text-lg text-gray-800'>No Cooking</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Diet Type</span>
              <span className='font-semibold text-lg text-teal-700'>High Protein</span>
            </div>

          </div>
        </div>

      </section>

     
      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

       
        <div className="col-span-2">

         
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Ingredients</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
            <li>1 cup whole green moong beans (sprouted)</li>
            <li>1 small onion (finely chopped)</li>
            <li>1 tomato (chopped)</li>
            <li>Green chilli (optional)</li>
            <li>Lemon juice</li>
            <li>Salt to taste</li>
            <li>Fresh coriander leaves</li>
          </ul>

         
          <h2 className="text-2xl font-serif text-gray-900 mb-4">Instructions</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
            <li>Wash and soak green moong overnight in clean water.</li>
            <li>Drain and wrap the soaked beans in a clean, damp cloth.</li>
            <li>Keep in a warm place for 24–36 hours until sprouts appear.</li>
            <li>Once sprouted, rinse gently and place in a mixing bowl.</li>
            <li>Add chopped onion, tomato, salt, lemon juice and mix well.</li>
            <li>Garnish with fresh coriander and serve fresh.</li>
          </ol>

        </div>

       
        <div className="bg-gray-50 border rounded-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

          <div className="divide-y text-gray-700">
            <div className="flex justify-between py-2"><span>Calories</span><span>180</span></div>
            <div className="flex justify-between py-2"><span>Protein</span><span>14 g</span></div>
            <div className="flex justify-between py-2"><span>Carbohydrates</span><span>28 g</span></div>
            <div className="flex justify-between py-2"><span>Fat</span><span>2 g</span></div>
            <div className="flex justify-between py-2"><span>Fiber</span><span>8 g</span></div>
            <div className="flex justify-between py-2"><span>Iron</span><span>2.5 mg</span></div>
          </div>
        </div>

      </section>
  
      <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

        <div className="max-w-6xl mx-auto text-center space-y-4">

          <p className="text-sm">
            DxAssist is an AI-powered healthcare support platform that transforms
            unstructured clinical notes and user-uploaded images into clear,
            easy-to-understand health insights.
          </p>

          <p className="text-sm">
            Using Generative AI with Retrieval-Augmented Generation (RAG), DxAssist
            helps clinicians summarize patient conditions and explore possible
            diagnoses, while reducing documentation burden and diagnostic oversight.
          </p>

          <p className="text-sm">
            The platform also supports everyday users through multilingual access,
            image-based symptom analysis, nutrition guidance, and preventive health
            suggestions.
          </p>

          <p className="text-xs text-gray-300">
            DxAssist is intended for informational and decision-support purposes only
            and does not replace professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
