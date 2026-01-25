import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f3fbf8] via-[#f7fbfa] to-[#eef6f4] text-gray-800">

     
      <section className="w-full max-w-7xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">

       
        <div className="w-full h-[56px] flex items-center px-10 bg-gradient-to-r from-teal-900 to-teal-700">
          <h1 className="text-3xl font-serif tracking-wide text-white drop-shadow">
            Lemon Juice
          </h1>
        </div>

       
        <div className="w-full h-[340px] relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]">
          <Image
            src="/lemon_juice.jpg"
            alt="Lemon Juice"
            fill
            className="object-contain scale-95 hover:scale-100 transition-transform duration-700 drop-shadow-2xl"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

       
        <div className="w-full h-[120px] flex items-center bg-white">
          <div className="w-full grid grid-cols-4 text-center divide-x divide-gray-200 px-8">

            {[
              { label: 'Serves', value: '1 Glass' },
              { label: 'Prep Time', value: 'Fresh lemon squeeze' },
              { label: 'Consume', value: 'Immediately' },
              { label: 'Health Focus', value: 'Digestion & Immunity', highlight: true },
            ].map((item, i) => (
              <div key={i} className="flex flex-col justify-center space-y-1">
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {item.label}
                </span>
                <span
                  className={`font-semibold ${
                    item.highlight
                      ? 'text-lg text-teal-700'
                      : 'text-base text-gray-800'
                  }`}
                >
                  {item.value}
                </span>
              </div>
            ))}

          </div>
        </div>

      </section>

      
      <section className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-3 gap-16">

       
        <div className="col-span-2 space-y-10">

          <div>
            <h2 className="text-3xl font-serif mb-4 text-teal-900">
              Ingredients
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
              <li>1–2 fresh lemons</li>
              <li>1 glass lukewarm water</li>
              <li>Honey (optional)</li>
              <li>Rock salt (optional)</li>
              <li>Few mint leaves (optional)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-4 text-teal-900">
              Instructions
            </h2>
            <ol className="list-decimal ml-6 space-y-3 text-gray-700 leading-loose">
              <li>Squeeze lemons into a glass.</li>
              <li>Add lukewarm water.</li>
              <li>Mix gently without sugar.</li>
              <li>Add honey or rock salt only if needed.</li>
              <li>Consume fresh for maximum benefit.</li>
            </ol>
          </div>

        </div>


        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-teal-900">
            Nutrients per serving
          </h2>

          <div className="divide-y text-gray-700">
            {[
              ['Calories', '30'],
              ['Protein', '1 g'],
              ['Carbohydrates', '9 g'],
              ['Fat', '0 g'],
              ['Fiber', '1 g'],
              ['Vitamin C', '40 mg'],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between py-3">
                <span>{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      
      <section className="w-full bg-gradient-to-r from-[#062f38] to-[#0a4c58] text-white px-10 py-14 mt-24">
        <div className="max-w-5xl mx-auto text-center space-y-4">

          <p className="text-sm opacity-90">
            Lemon juice supports digestion, hydration, and immunity through its
            high vitamin C and antioxidant content.
          </p>

          <p className="text-sm opacity-90">
            DxAssist blends nutritional science with AI-powered clinical insight
            to help users make smarter wellness choices.
          </p>

          <p className="text-sm opacity-90">
            With multilingual access and image-based health analysis, DxAssist
            makes preventive healthcare accessible to everyone.
          </p>

          <p className="text-xs text-gray-300 mt-6">
            This information is for general wellness guidance and does not replace
            professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
