
import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f4fffd] via-[#eef7f5] to-[#e9f2f1]">

      
      <section className="w-full h-[512.94px] overflow-hidden rounded-b-3xl shadow-2xl border border-black/10 bg-white/60 backdrop-blur-xl">

     
        <div className="w-full h-[60px] flex items-center px-12 bg-white/80 backdrop-blur-md border-b">
          <h1 className="text-4xl font-serif tracking-wide text-teal-900">
            Vegetable Khichdi
          </h1>
          <span className="ml-4 px-3 py-1 text-xs rounded-full bg-teal-100 text-teal-700">
            Comfort Food
          </span>
        </div>

        <div className="w-full h-[322px] relative bg-gradient-to-br from-[#dff4f1] to-[#cfe9e5]">
          <Image
            src="/vegetablekhichdi.jpg"
            alt="Vegetable Khichdi"
            fill
            className="object-contain drop-shadow-2xl scale-95 hover:scale-100 transition-transform duration-700"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>

        
        <div className="w-full h-[120px] flex items-center bg-white/90 backdrop-blur-md">
          <div className="w-full grid grid-cols-4 text-center divide-x px-10">

            <div className="flex flex-col justify-center space-y-1 hover:-translate-y-1 transition">
              <span className="text-xs uppercase tracking-widest text-gray-400">Serves</span>
              <span className="font-semibold text-lg text-gray-800">1–2 People</span>
            </div>

            <div className="flex flex-col justify-center space-y-1 hover:-translate-y-1 transition">
              <span className="text-xs uppercase tracking-widest text-gray-400">Prep Time</span>
              <span className="font-medium text-sm text-gray-700">
                Wash rice, dal & vegetables
              </span>
            </div>

            <div className="flex flex-col justify-center space-y-1 hover:-translate-y-1 transition">
              <span className="text-xs uppercase tracking-widest text-gray-400">Cook Time</span>
              <span className="font-semibold text-lg text-gray-800">20–25 Min</span>
            </div>

            <div className="flex flex-col justify-center space-y-1 hover:-translate-y-1 transition">
              <span className="text-xs uppercase tracking-widest text-gray-400">Health Focus</span>
              <span className="font-semibold text-lg text-teal-700">
                Easy Digestion
              </span>
            </div>

          </div>
        </div>

      </section>

     
      <section className="max-w-7xl mx-auto px-12 py-20 grid grid-cols-3 gap-20">

       
        <div className="col-span-2 space-y-16">

          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">
              Ingredients
            </h2>

            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              {[
                "½ cup rice",
                "¼ cup moong dal",
                "1 carrot (chopped)",
                "½ cup bottle gourd / pumpkin",
                "½ cup beans or peas",
                "½ tsp turmeric",
                "Salt to taste",
                "1 tsp ghee",
              ].map((item, i) => (
                <li
                  key={i}
                  className="px-6 py-4 rounded-xl bg-white/70 backdrop-blur-md shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  🍚 {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">
              Instructions
            </h2>

            <ol className="space-y-4 text-gray-700">
              {[
                "Wash rice and moong dal thoroughly",
                "Add vegetables, turmeric, salt & water",
                "Pressure cook for 3–4 whistles",
                "Mix to porridge consistency",
                "Add ghee before serving",
                "Serve warm with curd or plain",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start bg-white/70 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  <span className="text-teal-700 font-bold text-lg">
                    {i + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="h-fit sticky top-24 rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl p-8 border border-black/10">

          <h2 className="text-2xl font-serif mb-6 text-gray-900">
            Nutrients per Serving
          </h2>

          <div className="space-y-3 text-gray-700 text-sm">
            {[
              ["Calories", "200"],
              ["Protein", "8 g"],
              ["Carbohydrates", "32 g"],
              ["Fat", "5 g"],
              ["Fiber", "6 g"],
              ["Iron", "2.8 mg"],
            ].map(([k, v], i) => (
              <div
                key={i}
                className="flex justify-between px-4 py-2 rounded-lg hover:bg-teal-50 transition"
              >
                <span>{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <section className="w-full bg-gradient-to-br from-[#062f37] to-[#041f26] text-white px-10 py-14 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-4 text-sm text-gray-300">

          <p>
            Vegetable khichdi is a light, nourishing meal that supports digestion,
            recovery, and overall wellness.
          </p>

          <p>
            DxAssist blends nutrition guidance with AI-powered clinical
            intelligence for smarter dietary decisions.
          </p>

          <p className="text-xs text-gray-400">
            This information is for general wellness only and does not replace
            professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
