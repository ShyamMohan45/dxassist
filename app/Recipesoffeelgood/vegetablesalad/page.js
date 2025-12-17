import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-[#f7fbfa]">

      <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

        <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
          <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
            Fresh Vegetable Salad
          </h1>
        </div>

        <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
          <Image
            src='/vegetable-salad.jpg'
            alt='Vegetable Salad'
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
              <span className='font-semibold text-lg text-gray-800'>1–2 People</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Prep Time</span>
              <span className='font-semibold text-sm text-gray-800'>
                Wash and chop fresh vegetables.
              </span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Cook Time</span>
              <span className='font-semibold text-lg text-gray-800'>No Cooking</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Diet Type</span>
              <span className='font-semibold text-lg text-teal-700'>Light & High Fiber</span>
            </div>

          </div>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

        <div className="col-span-2">

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Ingredients</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
            <li>1 cucumber (sliced)</li>
            <li>1 carrot (grated or sliced)</li>
            <li>1 tomato (chopped)</li>
            <li>½ onion (thinly sliced)</li>
            <li>½ cup boiled sweet corn (optional)</li>
            <li>Fresh lemon juice</li>
            <li>Salt and black pepper to taste</li>
            <li>Fresh coriander or mint leaves</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Instructions</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
            <li>Wash all vegetables thoroughly.</li>
            <li>Chop and slice vegetables into a mixing bowl.</li>
            <li>Add salt, pepper, and lemon juice.</li>
            <li>Toss gently to combine all ingredients.</li>
            <li>Garnish with fresh coriander or mint.</li>
            <li>Serve immediately for best freshness.</li>
          </ol>

        </div>

        <div className="bg-gray-50 border rounded-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

          <div className="divide-y text-gray-700">
            <div className="flex justify-between py-2"><span>Calories</span><span>120</span></div>
            <div className="flex justify-between py-2"><span>Protein</span><span>4 g</span></div>
            <div className="flex justify-between py-2"><span>Carbohydrates</span><span>18 g</span></div>
            <div className="flex justify-between py-2"><span>Fat</span><span>2 g</span></div>
            <div className="flex justify-between py-2"><span>Fiber</span><span>6 g</span></div>
            <div className="flex justify-between py-2"><span>Vitamin C</span><span>35 mg</span></div>
          </div>
        </div>

      </section>

      <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

        <div className="max-w-6xl mx-auto text-center space-y-4">

          <p className="text-sm">
            Vegetable salad supports digestion, weight management, and overall
            wellness by providing essential vitamins, minerals, and antioxidants.
          </p>

          <p className="text-sm">
            DxAssist combines nutrition guidance with AI-powered clinical insight
            to help users make healthier daily food choices.
          </p>

          <p className="text-sm">
            With multilingual access and image-based health analysis, DxAssist
            makes preventive healthcare and nutrition awareness accessible to all.
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
