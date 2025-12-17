import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-[#f7fbfa]">

      <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

        <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
          <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
            Herbal Teas
          </h1>
        </div>

        <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
          <Image
            src='/herbalteas.jpg'
            alt='Herbal Teas'
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
              <span className='font-semibold text-lg text-gray-800'>1 Cup</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Prep Time</span>
              <span className='font-semibold text-sm text-gray-800'>
                Steep herbs in hot water.
              </span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Consume Time</span>
              <span className='font-semibold text-lg text-gray-800'>Warm</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Health Focus</span>
              <span className='font-semibold text-lg text-teal-700'>Calm & Digestion</span>
            </div>

          </div>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

        <div className="col-span-2">

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Recommended Herbal Teas</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
            <li>Ginger tea</li>
            <li>Tulsi (Holy Basil) tea</li>
            <li>Chamomile tea</li>
            <li>Mint tea</li>
            <li>Jeera (Cumin) water</li>
            <li>Ajwain water</li>
            <li>Lemongrass tea</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">How to Consume</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
            <li>Boil water and add fresh or dried herbs.</li>
            <li>Let it steep for 5–7 minutes.</li>
            <li>Strain and drink warm.</li>
            <li>Avoid adding sugar; use honey if needed.</li>
            <li>Consume 1–2 cups daily.</li>
          </ol>

        </div>

        <div className="bg-gray-50 border rounded-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

          <div className="divide-y text-gray-700">
            <div className="flex justify-between py-2"><span>Calories</span><span>5–10</span></div>
            <div className="flex justify-between py-2"><span>Protein</span><span>0 g</span></div>
            <div className="flex justify-between py-2"><span>Carbohydrates</span><span>2 g</span></div>
            <div className="flex justify-between py-2"><span>Fat</span><span>0 g</span></div>
            <div className="flex justify-between py-2"><span>Fiber</span><span>0 g</span></div>
            <div className="flex justify-between py-2"><span>Antioxidants</span><span>Rich</span></div>
          </div>
        </div>

      </section>

      <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

        <div className="max-w-6xl mx-auto text-center space-y-4">

          <p className="text-sm">
            Herbal teas support relaxation, digestion, immunity, and stress
            management through natural plant-based compounds.
          </p>

          <p className="text-sm">
            DxAssist combines nutritional guidance with AI-powered clinical
            intelligence to help users make informed wellness and lifestyle
            decisions.
          </p>

          <p className="text-sm">
            With multilingual access and image-based health analysis, DxAssist
            makes preventive healthcare simple and accessible.
          </p>

          <p className="text-xs text-gray-300">
            This information is for general wellness support only and does not
            replace professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
