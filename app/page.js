
                            import Image from "next/image";
import GoogleSignButton from "./components/GoogleSignButton";

                            export default function Home() {
                              return (
                                <div className="bg-white h-[70px] w-full">
                                  <div className="text-center w-full text-5xl">
                                                  Hey
                                  </div>

              <main>
                                    <section className="grid grid-cols-2">
                                      <div
                                        className="first bg-black text-white  h-[69.5vh] text-center flex flex-col justify-center items-center w-full">                                        
                                        <h1 className="text-5xl mb-2 font-bold">Enjoy care again</h1>
                                        <p className="text-xl leading-relaxed text-justify max-w-xl">
                                          DxAssist is your AI-powered healthcare assistant, designed to
                                          process unstructured clinical notes and to give a concise, factual
                                          summary of a patient&apos;s condition and a prioritised list of
                                          potential diagnoses.
                                        </p>
                                       <GoogleSignButton />


                                      </div>

                                      <div className="second text-6xl border border-black h-[69vh]">
                                    <div className="second h-[69vh]">
  <video
    src="/Hailuo_Video_A realistic cinematic healthca_456572131441737731 (1).mp4"
    className="w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

                                      </div>
                                    </section>


                                  </main>
                                  <div>
                                    <section className="w-full">
        <div className="max-w-324 mx-auto border-t border-[#dce0e9]" />

        <div className="pt-18 pb-18">
          <div className="mx-auto w-[calc(min(100%,86rem)-5rem)] border-2 border-black">

            <div className="flex flex-col items-center text-center gap-4 border-2 border-black">
              <h2 className="text-[2.75rem] leading-[1.3] font-bold border-2 border-black">
                See how our AI analyzes clinical notes
                <br />
                and patient images to identify
                <br />
                <span className="text-gray-500 font-normal">
                  possible diseases and provide solutions
                </span>
              </h2>
            </div>

            <div className="w-full pt-11 border-2 border-black"></div>

            <div className="mx-auto h-75 max-w-225 border-2 border-black flex items-center justify-center">
              Demo Video Here
            </div>

            <div className="w-full pt-11 border-2 border-black"></div>
          </div>
        </div>

        <div className="max-w-324 mx-auto border-t border-[#dce0e9]" />
      </section>

                                  </div>
                  <div className="container bg-[#adeadf] rounded-lg h-105 w-115 px-2 py-12 mx-70 border-2 border-black">
  <img
    src="https://cdn.prod.website-files.com/67c6ddc58c9e7b3f7d095cb3/67c96abe244a0825c2c5ff32_b7b66a6e735ec6f8dcee4fe321702443_Logo%20Multilingue.avif"
    alt="logo"
  />
  <div className=" text-[#084c42] mx-40  ">MULTILINGUAL</div>
<div  className="text-black text-xl">English,Spanish,Hindi and 33 more...</div>
</div>

                                
                                </div>
                              );
                            }
