
import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f2fbf8] via-[#f7fbfa] to-[#eef6f4] text-gray-800">

      
      <section className="w-full max-w-7xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">

      
        <div className="w-full h-[56px] flex items-center px-10 bg-gradient-to-r from-teal-900 to-teal-700">
          <h1 className="text-3xl font-serif tracking-wide text-white drop-shadow">
            Pomegranate Juice
          </h1>
        </div>

       
        <div className="w-full h-[340px] relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]">
          <Image
            src="/pomegrante_juice.jpg"
            alt="Pomegranate Juice"
            fill
            className="object-contain scale-95 hover:scale-100 transition-transform duration-700 drop-shadow-2xl"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        
        <div className="w-full h-[120px] flex items-center bg-white">
          <div className="w-full grid grid-cols-4 text-center divide-x divide-gray-200 px-8">

            {[
              { label: 'Serves', value: '1 Glass' },
              { label: 'Prep Time', value: 'Fresh seed extraction' },
              { label: 'Consume', value: 'Immediately' },
              { label: 'Health Focus', value: 'Heart & Immunity', highlight: true },
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
              <li>2 medium fresh pomegranates</li>
              <li>½ cup chilled water (optional)</li>
              <li>Few mint leaves (optional)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-4 text-teal-900">
              Instructions
            </h2>
            <ol className="list-decimal ml-6 space-y-3 text-gray-700 leading-loose">
              <li>Peel the pomegranate and collect the seeds.</li>
              <li>Add seeds to a blender and pulse gently.</li>
              <li>Strain the juice if a smoother texture is desired.</li>
              <li>Add water only if required. Avoid sugar.</li>
              <li>Serve immediately for maximum nutrition.</li>
            </ol>
          </div>

        </div>

       
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-teal-900">
            Nutrients per serving
          </h2>

          <div className="divide-y text-gray-700">
            {[
              ['Calories', '150'],
              ['Protein', '3 g'],
              ['Carbohydrates', '34 g'],
              ['Fat', '1 g'],
              ['Fiber', '4 g'],
              ['Vitamin C', '28 mg'],
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
            Pomegranate juice is rich in antioxidants and supports heart health,
            immunity, and improved blood circulation.
          </p>

          <p className="text-sm opacity-90">
            DxAssist blends nutritional science with AI-powered clinical insight
            to help users understand how daily food choices influence health.
          </p>

          <p className="text-sm opacity-90">
            With multilingual access and image-based analysis, DxAssist makes
            preventive healthcare accessible to everyone.
          </p>

          <p className="text-xs text-gray-300 mt-6">
            This content is for general wellness guidance and does not replace
            professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
