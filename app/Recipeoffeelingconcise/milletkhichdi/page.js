import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-[#f7fbfa]">

      <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

        <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
          <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
            Vegetable Millet Khichdi
          </h1>
        </div>

        <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
          <Image
            src='/Vegetable-Millet-Khichdi.jpg'
            alt='Vegetable Millet Khichdi'
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
                Chop vegetables and rinse millets thoroughly.
              </span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Cook Time</span>
              <span className='font-semibold text-lg text-gray-800'>20–25 Minutes</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Diet Type</span>
              <span className='font-semibold text-lg text-teal-700'>Balanced & High Fiber</span>
            </div>

          </div>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

        <div className="col-span-2">

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Ingredients</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
            <li>½ cup mixed millets (foxtail, little, or barnyard)</li>
            <li>¼ cup moong dal</li>
            <li>1 carrot (chopped)</li>
            <li>1 small potato or bottle gourd (chopped)</li>
            <li>½ cup green peas or beans</li>
            <li>½ tsp turmeric powder</li>
            <li>Salt to taste</li>
            <li>1 tsp ghee</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Instructions</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
            <li>Wash and soak millets and moong dal for 15–20 minutes.</li>
            <li>Heat ghee in a pressure cooker and add vegetables.</li>
            <li>Add soaked millets, dal, turmeric, salt, and water.</li>
            <li>Pressure cook for 3–4 whistles until soft.</li>
            <li>Mix well and adjust consistency with warm water if needed.</li>
            <li>Serve hot with curd or a drizzle of ghee.</li>
          </ol>

        </div>

        <div className="bg-gray-50 border rounded-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

          <div className="divide-y text-gray-700">
            <div className="flex justify-between py-2"><span>Calories</span><span>220</span></div>
            <div className="flex justify-between py-2"><span>Protein</span><span>9 g</span></div>
            <div className="flex justify-between py-2"><span>Carbohydrates</span><span>34 g</span></div>
            <div className="flex justify-between py-2"><span>Fat</span><span>6 g</span></div>
            <div className="flex justify-between py-2"><span>Fiber</span><span>7 g</span></div>
            <div className="flex justify-between py-2"><span>Iron</span><span>3.2 mg</span></div>
          </div>
        </div>

      </section>

      <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

        <div className="max-w-6xl mx-auto text-center space-y-4">

          <p className="text-sm">
            DxAssist supports healthy eating decisions by combining nutrition
            guidance with AI-powered clinical insight and personalized health data.
          </p>

          <p className="text-sm">
            Using Generative AI and Retrieval-Augmented Generation (RAG), DxAssist
            helps both clinicians and users understand health conditions and make
            informed lifestyle choices.
          </p>

          <p className="text-sm">
            The platform is multilingual and enables users to upload images or
            clinical information to receive clear, supportive health insights.
          </p>

          <p className="text-xs text-gray-300">
            DxAssist is for informational support only and does not replace
            professional medical diagnosis or treatment.
          </p>

        </div>
      </section>

    </main>
  )
}
