import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-[#f7fbfa]">

      <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

        <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
          <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
            Fresh Fruits
          </h1>
        </div>

        <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
          <Image
            src='/fruits.jpg'
            alt='Fresh Fruits'
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
              <span className='font-semibold text-lg text-gray-800'>1 Bowl</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Prep Time</span>
              <span className='font-semibold text-sm text-gray-800'>
                Wash and cut seasonal fruits.
              </span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Consume Time</span>
              <span className='font-semibold text-lg text-gray-800'>Anytime (Daytime)</span>
            </div>

            <div className='flex flex-col justify-center'>
              <span className='text-xs uppercase tracking-wider text-gray-400'>Health Focus</span>
              <span className='font-semibold text-lg text-teal-700'>Vitamins & Immunity</span>
            </div>

          </div>
        </div>

      </section>

      <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

        <div className="col-span-2">

          <h2 className="text-2xl font-serif text-gray-900 mb-4">Recommended Fruits</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
            <li>Apple</li>
            <li>Banana</li>
            <li>Papaya</li>
            <li>Pomegranate</li>
            <li>Orange or Sweet Lime</li>
            <li>Guava</li>
            <li>Seasonal fruits</li>
          </ul>

          <h2 className="text-2xl font-serif text-gray-900 mb-4">How to Consume</h2>
          <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
            <li>Choose fresh and seasonal fruits.</li>
            <li>Wash fruits thoroughly before cutting.</li>
            <li>Prefer whole fruits over juices.</li>
            <li>Consume in small portions if diabetic.</li>
            <li>Avoid adding sugar or salt.</li>
          </ol>

        </div>

        <div className="bg-gray-50 border rounded-md p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

          <div className="divide-y text-gray-700">
            <div className="flex justify-between py-2"><span>Calories</span><span>120</span></div>
            <div className="flex justify-between py-2"><span>Protein</span><span>2 g</span></div>
            <div className="flex justify-between py-2"><span>Carbohydrates</span><span>28 g</span></div>
            <div className="flex justify-between py-2"><span>Fat</span><span>1 g</span></div>
            <div className="flex justify-between py-2"><span>Fiber</span><span>5 g</span></div>
            <div className="flex justify-between py-2"><span>Vitamin C</span><span>35 mg</span></div>
          </div>
        </div>

      </section>

      <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

        <div className="max-w-6xl mx-auto text-center space-y-4">

          <p className="text-sm">
            Fresh fruits support immunity, digestion, and overall health by
            providing essential vitamins, minerals, and natural antioxidants.
          </p>

          <p className="text-sm">
            DxAssist uses AI-powered clinical intelligence to help users understand
            how nutrition choices impact health and recovery.
          </p>

          <p className="text-sm">
            With multilingual access and image-based health analysis, DxAssist
            promotes preventive healthcare and better lifestyle decisions.
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
