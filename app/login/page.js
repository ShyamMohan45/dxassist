// "use client";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">

//       {/* ANIMATED GRADIENT BACKGROUND */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#7f5cff,transparent_40%),radial-gradient(circle_at_80%_80%,#00ffd5,transparent_40%),radial-gradient(circle_at_50%_50%,#ff2cdf,transparent_50%)] animate-pulse"></div>

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl"></div>

//       {/* LOGIN CARD */}
//       <div
//         className="
//           relative z-10 w-[400px]
//           rounded-3xl
//           bg-white/10 backdrop-blur-2xl
//           border border-white/20
//           p-10 text-white
//           shadow-[0_0_80px_rgba(255,255,255,0.15)]
//           animate-[fadeUp_0.8s_ease-out]
//         "
//       >
//         <h1 className="text-4xl font-bold text-center mb-2 tracking-wide">
//           Welcome Back
//         </h1>
//         <p className="text-center text-white/70 mb-10">
//           Login to your account
//         </p>

//         {/* EMAIL */}
//         <div className="relative mb-8">
//           <input
//             type="email"
//             required
//             className="
//               peer w-full bg-transparent
//               border-b border-white/30
//               py-3 text-lg
//               outline-none
//               focus:border-cyan-400
//               transition-all
//             "
//           />
//           <label
//             className="
//               absolute left-0 top-3 text-white/60
//               peer-focus:-top-3 peer-focus:text-sm
//               peer-focus:text-cyan-400
//               peer-valid:-top-3 peer-valid:text-sm
//               transition-all
//             "
//           >
//             Email Address
//           </label>
//         </div>

//         {/* PASSWORD */}
//         <div className="relative mb-6">
//           <input
//             type="password"
//             required
//             className="
//               peer w-full bg-transparent
//               border-b border-white/30
//               py-3 text-lg
//               outline-none
//               focus:border-pink-400
//               transition-all
//             "
//           />
//           <label
//             className="
//               absolute left-0 top-3 text-white/60
//               peer-focus:-top-3 peer-focus:text-sm
//               peer-focus:text-pink-400
//               peer-valid:-top-3 peer-valid:text-sm
//               transition-all
//             "
//           >
//             Password
//           </label>
//         </div>

//         {/* OPTIONS */}
//         <div className="flex justify-between text-sm mb-8 text-white/70">
//           <label className="flex gap-2 cursor-pointer hover:text-white">
//             <input type="checkbox" className="accent-cyan-400" />
//             Remember me
//           </label>
//           <span className="hover:text-white cursor-pointer">
//             Forgot?
//           </span>
//         </div>

//         {/* BUTTON */}
//         <button
//           className="
//             w-full py-3 rounded-full text-lg font-semibold
//             bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
//             hover:scale-105
//             hover:shadow-[0_0_40px_rgba(255,0,255,0.6)]
//             transition-all duration-300
//             active:scale-95
//           "
//         >
//           Login
//         </button>

//         {/* FOOTER */}
//         <p className="text-center mt-8 text-white/70">
//           New here?{" "}
//           <span className="text-cyan-400 cursor-pointer hover:underline">
//             Create account
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
// "use client";

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

//       {/* SEXY PREMIUM BACKGROUND */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />

//       {/* GLOW BLOBS */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/40 rounded-full blur-[120px]" />
//       <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[140px]" />

//       {/* DARK GLASS OVERLAY */}
//       <div className="absolute inset-0 bg-black/30 backdrop-blur-xl"></div>

//       {/* LOGIN CARD */}
//       <div
//         className="
//           relative z-10 w-[400px]
//           rounded-3xl
//           bg-white/10 backdrop-blur-2xl
//           border border-white/20
//           p-10 text-white
//           shadow-[0_0_80px_rgba(0,0,0,0.6)]
//           animate-[fadeUp_0.8s_ease-out]
//         "
//       >
//         <h1 className="text-4xl font-bold text-center mb-2 tracking-wide">
//           Welcome Back
//         </h1>
//         <p className="text-center text-white/70 mb-10">
//           Login to your account
//         </p>

//         {/* EMAIL */}
//         <div className="relative mb-8">
//           <input
//             type="email"
//             required
//             className="
//               peer w-full bg-transparent
//               border-b border-white/30
//               py-3 text-lg
//               outline-none
//               focus:border-cyan-400
//               transition-all
//             "
//           />
//           <label
//             className="
//               absolute left-0 top-3 text-white/60
//               peer-focus:-top-3 peer-focus:text-sm
//               peer-focus:text-cyan-400
//               peer-valid:-top-3 peer-valid:text-sm
//               transition-all
//             "
//           >
//             Email Address
//           </label>
//         </div>

//         {/* PASSWORD */}
//         <div className="relative mb-6">
//           <input
//             type="password"
//             required
//             className="
//               peer w-full bg-transparent
//               border-b border-white/30
//               py-3 text-lg
//               outline-none
//               focus:border-pink-400
//               transition-all
//             "
//           />
//           <label
//             className="
//               absolute left-0 top-3 text-white/60
//               peer-focus:-top-3 peer-focus:text-sm
//               peer-focus:text-pink-400
//               peer-valid:-top-3 peer-valid:text-sm
//               transition-all
//             "
//           >
//             Password
//           </label>
//         </div>

//         {/* OPTIONS */}
//         <div className="flex justify-between text-sm mb-8 text-white/70">
//           <label className="flex gap-2 cursor-pointer hover:text-white">
//             <input type="checkbox" className="accent-cyan-400" />
//             Remember me
//           </label>
//           <span className="hover:text-white cursor-pointer">
//             Forgot?
//           </span>
//         </div>

//         {/* BUTTON */}
//         <button
//           className="
//             w-full py-3 rounded-full text-lg font-semibold
//             bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
//             hover:scale-105
//             hover:shadow-[0_0_40px_rgba(124,58,237,0.8)]
//             transition-all duration-300
//             active:scale-95
//           "
//         >
//           Login
//         </button>

//         {/* FOOTER */}
//         <p className="text-center mt-8 text-white/70">
//           New here?{" "}
//           <span className="text-cyan-400 cursor-pointer hover:underline">
//             Create account
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* HEALTHCARE GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f8f5] via-[#f4fbff] to-[#e6f0ff]" />

      {/* SOFT MEDICAL GLOW SHAPES */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[140px]" />

      {/* GLASS OVERLAY */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>

      {/* LOGIN CARD */}
      <div
        className="
          relative z-10 w-[400px]
          rounded-3xl
          bg-white/70 backdrop-blur-2xl
          border border-white/60
          p-10 text-gray-800
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          animate-[fadeUp_0.8s_ease-out]
        "
      >
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-900">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Login to your healthcare account
        </p>

        {/* EMAIL */}
        <div className="relative mb-8">
          <input
            type="email"
            required
            className="
              peer w-full bg-transparent
              border-b border-gray-300
              py-3 text-lg
              outline-none
              focus:border-blue-500
              transition-all
            "
          />
          <label
            className="
              absolute left-0 top-3 text-gray-400
              peer-focus:-top-3 peer-focus:text-sm
              peer-focus:text-blue-500
              peer-valid:-top-3 peer-valid:text-sm
              transition-all
            "
          >
            Email Address
          </label>
        </div>

        {/* PASSWORD */}
        <div className="relative mb-6">
          <input
            type="password"
            required
            className="
              peer w-full bg-transparent
              border-b border-gray-300
              py-3 text-lg
              outline-none
              focus:border-teal-500
              transition-all
            "
          />
          <label
            className="
              absolute left-0 top-3 text-gray-400
              peer-focus:-top-3 peer-focus:text-sm
              peer-focus:text-teal-500
              peer-valid:-top-3 peer-valid:text-sm
              transition-all
            "
          >
            Password
          </label>
        </div>

        {/* OPTIONS */}
        <div className="flex justify-between text-sm mb-8 text-gray-500">
          <label className="flex gap-2 cursor-pointer hover:text-gray-700">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>
          <span className="hover:text-blue-600 cursor-pointer">
            Forgot password?
          </span>
        </div>

        {/* BUTTON */}
        <button
          className="
            w-full py-3 rounded-full text-lg font-semibold text-white
            bg-gradient-to-r from-blue-500 to-teal-400
            hover:shadow-lg hover:-translate-y-0.5
            transition-all duration-300
            active:scale-95
          "
        >
          Login
        </button>

        {/* FOOTER */}
        <p className="text-center mt-8 text-gray-500">
          New here?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
