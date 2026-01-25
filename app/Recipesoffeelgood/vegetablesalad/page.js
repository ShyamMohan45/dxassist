import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f2fbf8] via-[#f7fbfa] to-[#eef6f4] text-gray-800">

     
      <section className="w-full max-w-7xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">

      
        <div className="w-full h-[56px] flex items-center px-10 bg-gradient-to-r from-teal-900 to-teal-700">
          <h1 className="text-3xl font-serif tracking-wide text-white drop-shadow">
            Fresh Vegetable Salad
          </h1>
        </div>

      
        <div className="w-full h-[340px] relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]">
          <Image
            src="/vegetable-salad.jpg"
            alt="Vegetable Salad"
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
              { label: 'Serves', value: '1–2 People' },
              { label: 'Prep Time', value: 'Fresh chopping & washing' },
              { label: 'Cook Time', value: 'No Cooking' },
              { label: 'Diet Type', value: 'Light & High Fiber', highlight: true },
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

       
        <div className="col-span-2 space-y-12">

          <div>
            <h2 className="text-3xl font-serif text-teal-900 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
              <li>1 cucumber (sliced)</li>
              <li>1 carrot (grated or sliced)</li>
              <li>1 tomato (chopped)</li>
              <li>½ onion (thinly sliced)</li>
              <li>½ cup boiled sweet corn (optional)</li>
              <li>Fresh lemon juice</li>
              <li>Salt and black pepper to taste</li>
              <li>Fresh coriander or mint leaves</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-teal-900 mb-4">
              Instructions
            </h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-loose">
              <li>Wash all vegetables thoroughly.</li>
              <li>Chop and slice vegetables into a mixing bowl.</li>
              <li>Add salt, pepper, and lemon juice.</li>
              <li>Toss gently to combine ingredients.</li>
              <li>Garnish with fresh coriander or mint.</li>
              <li>Serve immediately for best freshness.</li>
            </ol>
          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-teal-900">
            Nutrients per serving
          </h2>

          <div className="divide-y text-gray-700">
            {[
              ['Calories', '120'],
              ['Protein', '4 g'],
              ['Carbohydrates', '18 g'],
              ['Fat', '2 g'],
              ['Fiber', '6 g'],
              ['Vitamin C', '35 mg'],
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
            Vegetable salad supports digestion, weight management, and overall
            wellness by providing essential vitamins and antioxidants.
          </p>

          <p className="text-sm opacity-90">
            DxAssist blends nutrition guidance with AI-powered clinical insight
            to help users make smarter daily food choices.
          </p>

          <p className="text-sm opacity-90">
            Multilingual access and image-based health analysis make preventive
            healthcare accessible to everyone.
          </p>

          <p className="text-xs text-gray-300 mt-6">
            DxAssist is for informational support only and does not replace
            professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
