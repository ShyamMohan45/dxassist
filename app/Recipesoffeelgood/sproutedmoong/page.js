import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f2fbf8] via-[#f7fbfa] to-[#eef6f4] text-gray-800">

      {/* HERO CARD */}
      <section className="w-full max-w-7xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white">

        {/* HEADER */}
        <div className="w-full h-[56px] flex items-center px-10 bg-gradient-to-r from-teal-900 to-teal-700">
          <h1 className="text-3xl font-serif tracking-wide text-white drop-shadow">
            Sprouted Moong Salad
          </h1>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[340px] relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]">
          <Image
            src="/sproutedmoong.jpg"
            alt="Sprouted Moong"
            fill
            className="object-contain scale-95 hover:scale-100 transition-transform duration-700 drop-shadow-2xl"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* INFO STRIP */}
        <div className="w-full h-[120px] flex items-center bg-white">
          <div className="w-full grid grid-cols-4 text-center divide-x divide-gray-200 px-8">

            {[
              { label: 'Serves', value: 'As per need' },
              { label: 'Prep Time', value: 'Natural sprouting process' },
              { label: 'Cook Time', value: 'No Cooking' },
              { label: 'Diet Type', value: 'High Protein', highlight: true },
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

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="col-span-2 space-y-12">

          <div>
            <h2 className="text-3xl font-serif text-teal-900 mb-4">
              Ingredients
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
              <li>1 cup whole green moong beans (sprouted)</li>
              <li>1 small onion (finely chopped)</li>
              <li>1 tomato (chopped)</li>
              <li>Green chilli (optional)</li>
              <li>Lemon juice</li>
              <li>Salt to taste</li>
              <li>Fresh coriander leaves</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif text-teal-900 mb-4">
              Instructions
            </h2>
            <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-loose">
              <li>Wash and soak green moong overnight.</li>
              <li>Drain and wrap beans in a clean damp cloth.</li>
              <li>Keep warm for 24–36 hours until sprouts appear.</li>
              <li>Rinse gently and transfer to a mixing bowl.</li>
              <li>Add onion, tomato, salt and lemon juice.</li>
              <li>Mix well, garnish with coriander and serve fresh.</li>
            </ol>
          </div>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 h-fit">
          <h2 className="text-2xl font-semibold mb-6 text-teal-900">
            Nutrients per serving
          </h2>

          <div className="divide-y text-gray-700">
            {[
              ['Calories', '180'],
              ['Protein', '14 g'],
              ['Carbohydrates', '28 g'],
              ['Fat', '2 g'],
              ['Fiber', '8 g'],
              ['Iron', '2.5 mg'],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between py-3">
                <span>{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <section className="w-full bg-gradient-to-r from-[#062f38] to-[#0a4c58] text-white px-10 py-14 mt-24">
        <div className="max-w-5xl mx-auto text-center space-y-4">

          <p className="text-sm opacity-90">
            DxAssist is an AI-powered healthcare support platform that transforms
            complex medical data into clear, human-friendly insights.
          </p>

          <p className="text-sm opacity-90">
            Using Generative AI and RAG, DxAssist helps clinicians and users
            understand conditions, nutrition, and preventive care with confidence.
          </p>

          <p className="text-sm opacity-90">
            Multilingual access and image-based analysis make health awareness
            inclusive and accessible to everyone.
          </p>

          <p className="text-xs text-gray-300 mt-6">
            DxAssist is for informational purposes only and does not replace
            professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
