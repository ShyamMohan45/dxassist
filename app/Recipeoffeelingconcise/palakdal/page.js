// import React from 'react'
// import Image from 'next/image'

// export default function Page() {
//   return (
//     <main className="bg-[#f7fbfa]">

//       <section className='w-full h-[512.94px] border-2 border-black overflow-hidden'>

//         <div className='w-full h-[50px] border-2 border-black flex items-center px-10 bg-white'>
//           <h1 className='text-3xl font-serif tracking-wide text-teal-900'>
//             Palak Dal
//           </h1>
//         </div>

//         <div className='w-full h-[322px] border-2 border-black relative bg-gradient-to-br from-[#eaf3f1] to-[#d9ebe7]'>
//           <Image
//             src='/palak-dal.jpg'
//             alt='Palak Dal'
//             fill
//             className='object-contain drop-shadow-xl'
//             quality={100}
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
//         </div>

//         <div className='w-full h-[120px] border-2 border-black flex items-center bg-white'>
//           <div className='w-full grid grid-cols-4 text-center divide-x px-6'>

//             <div className='flex flex-col justify-center'>
//               <span className='text-xs uppercase tracking-wider text-gray-400'>Serves</span>
//               <span className='font-semibold text-lg text-gray-800'>2–3 People</span>
//             </div>

//             <div className='flex flex-col justify-center'>
//               <span className='text-xs uppercase tracking-wider text-gray-400'>Prep Time</span>
//               <span className='font-semibold text-sm text-gray-800'>
//                 Wash spinach and rinse dal thoroughly.
//               </span>
//             </div>

//             <div className='flex flex-col justify-center'>
//               <span className='text-xs uppercase tracking-wider text-gray-400'>Cook Time</span>
//               <span className='font-semibold text-lg text-gray-800'>20–25 Minutes</span>
//             </div>

//             <div className='flex flex-col justify-center'>
//               <span className='text-xs uppercase tracking-wider text-gray-400'>Diet Type</span>
//               <span className='font-semibold text-lg text-teal-700'>Iron Rich & High Protein</span>
//             </div>

//           </div>
//         </div>

//       </section>

//       <section className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

//         <div className="col-span-2">

//           <h2 className="text-2xl font-serif text-gray-900 mb-4">Ingredients</h2>
//           <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-10">
//             <li>1 cup toor dal (or moong dal)</li>
//             <li>2 cups fresh spinach (palak), chopped</li>
//             <li>1 small onion (chopped)</li>
//             <li>2 cloves garlic (minced)</li>
//             <li>1 small tomato (chopped)</li>
//             <li>½ tsp turmeric powder</li>
//             <li>Salt to taste</li>
//             <li>1 tsp ghee or oil</li>
//           </ul>

//           <h2 className="text-2xl font-serif text-gray-900 mb-4">Instructions</h2>
//           <ol className="list-decimal ml-6 text-gray-700 space-y-3 leading-relaxed">
//             <li>Wash and pressure cook the dal with turmeric until soft.</li>
//             <li>In a pan, heat ghee and sauté garlic and onion until golden.</li>
//             <li>Add chopped tomato and cook until soft.</li>
//             <li>Add spinach and cook until wilted.</li>
//             <li>Mix in the cooked dal, add salt, and simmer for 5 minutes.</li>
//             <li>Serve hot with rice or roti.</li>
//           </ol>

//         </div>

//         <div className="bg-gray-50 border rounded-md p-6 h-fit">
//           <h2 className="text-xl font-semibold mb-4">Nutrients per serving</h2>

//           <div className="divide-y text-gray-700">
//             <div className="flex justify-between py-2"><span>Calories</span><span>190</span></div>
//             <div className="flex justify-between py-2"><span>Protein</span><span>13 g</span></div>
//             <div className="flex justify-between py-2"><span>Carbohydrates</span><span>26 g</span></div>
//             <div className="flex justify-between py-2"><span>Fat</span><span>5 g</span></div>
//             <div className="flex justify-between py-2"><span>Fiber</span><span>6 g</span></div>
//             <div className="flex justify-between py-2"><span>Iron</span><span>4.1 mg</span></div>
//           </div>
//         </div>

//       </section>

//       <section className="w-full bg-[#083c47] text-white px-10 py-10 mt-20">

//         <div className="max-w-6xl mx-auto text-center space-y-4">

//           <p className="text-sm">
//             DxAssist combines nutritional guidance with AI-powered clinical
//             intelligence to support healthier dietary and lifestyle choices.
//           </p>

//           <p className="text-sm">
//             Using Generative AI and Retrieval-Augmented Generation (RAG), DxAssist
//             assists clinicians and individuals in understanding health conditions
//             and managing nutrition-related concerns.
//           </p>

//           <p className="text-sm">
//             The platform supports multilingual access and image-based symptom
//             analysis to make healthcare insights more accessible to everyone.
//           </p>

//           <p className="text-xs text-gray-300">
//             DxAssist is intended for informational and decision-support purposes only
//             and does not replace professional medical diagnosis or treatment.
//           </p>

//         </div>
//       </section>

//     </main>
//   )
// }
import React from 'react'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="bg-gradient-to-br from-[#f4fffd] via-[#eef7f5] to-[#e9f2f1]">

      {/* HERO */}
      <section className="w-full h-[512.94px] overflow-hidden rounded-b-3xl shadow-2xl border border-black/10 bg-white/70 backdrop-blur-xl">

        {/* HEADER */}
        <div className="w-full h-[60px] flex items-center px-12 bg-white/80 backdrop-blur-md border-b">
          <h1 className="text-4xl font-serif tracking-wide text-teal-900">
            Palak Dal
          </h1>
          <span className="ml-4 px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
            Iron Rich
          </span>
        </div>

        {/* IMAGE */}
        <div className="w-full h-[322px] relative bg-gradient-to-br from-[#dff4f1] to-[#cfe9e5]">
          <Image
            src="/palak-dal.jpg"
            alt="Palak Dal"
            fill
            className="object-contain drop-shadow-2xl scale-95 hover:scale-100 transition-transform duration-700 ease-out"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* INFO STRIP */}
        <div className="w-full h-[120px] flex items-center bg-white/90 backdrop-blur-md">
          <div className="w-full grid grid-cols-4 text-center divide-x px-10">

            {[
              ["Serves", "2–3 People"],
              ["Prep Time", "Wash spinach & dal"],
              ["Cook Time", "20–25 Minutes"],
              ["Diet Type", "Iron Rich & High Protein"],
            ].map(([title, value], i) => (
              <div
                key={i}
                className="flex flex-col justify-center space-y-1 hover:-translate-y-1 hover:text-teal-700 transition-all duration-300"
              >
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {title}
                </span>
                <span className={`font-semibold ${i === 3 ? "text-teal-700" : "text-gray-800"}`}>
                  {value}
                </span>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-12 py-20 grid grid-cols-3 gap-20">

        {/* LEFT */}
        <div className="col-span-2 space-y-16">

          {/* INGREDIENTS */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">
              Ingredients
            </h2>

            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              {[
                "1 cup toor dal / moong dal",
                "2 cups fresh spinach",
                "1 small onion",
                "2 garlic cloves",
                "1 small tomato",
                "½ tsp turmeric powder",
                "Salt to taste",
                "1 tsp ghee or oil",
              ].map((item, i) => (
                <li
                  key={i}
                  className="px-6 py-4 rounded-xl bg-white/70 backdrop-blur-md shadow
                             hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  🥬 {item}
                </li>
              ))}
            </ul>
          </div>

          {/* INSTRUCTIONS */}
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">
              Instructions
            </h2>

            <ol className="space-y-4 text-gray-700">
              {[
                "Pressure cook dal with turmeric",
                "Sauté garlic & onion in ghee",
                "Add tomato and cook until soft",
                "Add spinach and wilt",
                "Mix dal and simmer for 5 minutes",
                "Serve hot with rice or roti",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start bg-white/70 p-6 rounded-xl shadow
                             hover:shadow-lg hover:bg-teal-50/50 transition-all duration-300"
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
              ["Calories", "190"],
              ["Protein", "13 g"],
              ["Carbohydrates", "26 g"],
              ["Fat", "5 g"],
              ["Fiber", "6 g"],
              ["Iron", "4.1 mg"],
            ].map(([k, v], i) => (
              <div
                key={i}
                className="flex justify-between px-4 py-2 rounded-lg
                           hover:bg-emerald-50 hover:scale-[1.02] transition-all duration-200"
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
            DxAssist combines nutritional guidance with AI-powered clinical
            intelligence for healthier lifestyle choices.
          </p>

          <p>
            Using Generative AI and RAG, DxAssist helps users understand health
            conditions and nutrition better.
          </p>

          <p className="text-xs text-gray-400">
            This information does not replace professional medical advice.
          </p>

        </div>
      </section>

    </main>
  )
}
