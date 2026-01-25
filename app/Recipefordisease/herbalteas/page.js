
import React from "react"
import Image from "next/image"

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f4fffd] via-[#eef7f5] to-[#e9f2f1] text-gray-800">

      
      <section className="max-w-6xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-white/70 backdrop-blur-xl">

        
        <div className="flex items-center px-12 py-6 bg-white/80 border-b">
          <h1 className="text-4xl font-serif tracking-wide text-teal-900">
            Herbal Teas
          </h1>
          <span className="ml-4 px-3 py-1 text-xs rounded-full bg-teal-100 text-teal-700">
            Natural Wellness
          </span>
        </div>

        <div className="relative h-[360px] bg-gradient-to-br from-[#dff4f1] to-[#cfe9e5]">
          <Image
            src="/herbalteas.jpg"
            alt="Herbal Teas"
            fill
            className="object-contain drop-shadow-2xl scale-95 hover:scale-100 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>

       
        <div className="grid grid-cols-4 text-center bg-white/90 backdrop-blur-md divide-x py-8">

          <InfoBox title="Serves" value="1 Cup" />
          <InfoBox title="Prep" value="5–7 min steep" />
          <InfoBox title="Consume" value="Warm" />
          <InfoBox title="Health Focus" value="Calm & Digestion" highlight />

        </div>

      </section>

      
      <section className="max-w-7xl mx-auto px-10 py-20 grid grid-cols-3 gap-20">

        
        <div className="col-span-2 space-y-14">

          <div>
            <h2 className="text-3xl font-serif mb-6 text-gray-900">
              Recommended Herbal Teas
            </h2>

            <ul className="grid grid-cols-2 gap-4">
              {[
                "Ginger Tea",
                "Tulsi Tea",
                "Chamomile Tea",
                "Mint Tea",
                "Jeera Water",
                "Ajwain Water",
                "Lemongrass Tea",
              ].map((tea, i) => (
                <li
                  key={i}
                  className="px-6 py-4 rounded-xl bg-white/70 backdrop-blur-md shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  🌿 {tea}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-serif mb-6 text-gray-900">
              How to Consume
            </h2>

            <ol className="space-y-4">
              {[
                "Boil fresh water and add herbs",
                "Steep for 5–7 minutes",
                "Strain and drink warm",
                "Use honey instead of sugar",
                "Consume 1–2 cups daily",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start bg-white/70 p-5 rounded-xl shadow hover:shadow-lg transition"
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

       
        <div className="sticky top-24 h-fit rounded-3xl bg-white/80 backdrop-blur-xl shadow-xl p-8 border">

          <h2 className="text-2xl font-serif mb-6 text-gray-900">
            Nutrients per Serving
          </h2>

          <div className="space-y-3 text-sm">
            <Nutrition label="Calories" value="5–10" />
            <Nutrition label="Protein" value="0 g" />
            <Nutrition label="Carbs" value="2 g" />
            <Nutrition label="Fat" value="0 g" />
            <Nutrition label="Fiber" value="0 g" />
            <Nutrition label="Antioxidants" value="Rich" />
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <section className="bg-gradient-to-br from-[#062f37] to-[#041f26] text-white py-14 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-4 text-sm text-gray-300">

          <p>
            Herbal teas support relaxation, digestion, immunity, and stress
            management through natural plant compounds.
          </p>

          <p>
            DxAssist blends nutritional science with AI-powered clinical
            intelligence for smarter wellness decisions.
          </p>

          <p className="text-xs text-gray-400">
            This content is for wellness support only and not a substitute for
            medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}



function InfoBox({ title, value, highlight }) {
  return (
    <div className="flex flex-col items-center">
      <span className="uppercase text-xs tracking-widest text-gray-400">
        {title}
      </span>
      <span
        className={`text-lg font-semibold mt-1 ${
          highlight ? "text-teal-700" : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function Nutrition({ label, value }) {
  return (
    <div className="flex justify-between px-3 py-2 rounded-lg hover:bg-teal-50 transition">
      <span>{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
