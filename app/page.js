
                            import Image from "next/image";
import GoogleSignButton from "./components/GoogleSignButton";

                            export default function Home() {
                              return (
                                <>
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
    <section className="w-full h-[770.14px] bg-gray-100 border-2 border-black mt-20 overflow-x-hidden">
                                <div className="heading  w-[1200px] h-[40px] border-2 border-black ml-[145px] flex items-center justify-center mt-16">
                                  <h2 className="text-3xl font-medium text-center">Let's Get Started</h2>
                                </div>
                                <div className="border-2 border-black w-[calc(100%-1rem)] h-[475px] mx-2 my-2">
                                  <div className="w-[1200px] h-[445px] border-2 border-black ml-[135px] mt-2 flex gap-8 justify-center">
                                   
                                    <div className="first-box w-[384px] h-[445px] bg-[#073B44] rounded-2xl flex flex-col overflow-hidden">
  
  
                                          <div className="h-[260px] flex items-center justify-center">
                                            <img
                                              src="/feeling_good_image.png"   
                                              alt="I feel healthy most of the time"
                                              className="h-[240px] w-auto opacity-90"
                                            />
                                          </div>

                                          
                                          <div className="flex flex-col items-center text-center px-6 pb-8 mt-auto">
                                            <p className="text-white text-lg mb-6">
                                              I feel healthy most of the time
                                            </p>

                                            <a className="text-white uppercase underline tracking-wide font-medium cursor-pointer">
                                              We can help &gt;
                                            </a>
                                          </div>
                                        </div>

                                    <div className="first-box w-[384px] h-[445px] bg-[#073B44] rounded-2xl flex flex-col overflow-hidden">
  
  
                                          <div className="h-[260px] flex items-center justify-center">
                                            <img
                                              src="/feeling_concern_image.png"   
                                              alt="I am concerned about some health conditions"
                                              className="h-[240px] w-auto opacity-90"
                                            />
                                          </div>

                                          
                                          <div className="flex flex-col items-center text-center px-6 pb-8 mt-auto">
                                            <p className="text-white text-lg mb-6">
                                             I am concerned about some health conditions
                                            </p>

                                            <a className="text-white uppercase underline tracking-wide font-medium cursor-pointer">
                                              We can help &gt;
                                            </a>
                                          </div>
                                        </div>
                                    <div className="first-box w-[384px] h-[445px] bg-[#073B44] rounded-2xl flex flex-col overflow-hidden">
  
  
                                          <div className="h-[260px] flex items-center justify-center">
                                            <img
                                              src="/concern_about_serious_disease.png"   
                                              alt="I am concerned about my kidneys"
                                              className="h-[240px] w-auto opacity-90"
                                            />
                                          </div>

                                          
                                          <div className="flex flex-col items-center text-center px-6 pb-8 mt-auto">
                                            <p className="text-white text-lg mb-6">
                                              I am concerned about my kidneys
                                            </p>

                                            <a className="text-white uppercase underline tracking-wide font-medium cursor-pointer">
                                              We can help &gt;
                                            </a>
                                          </div>
                                        </div>
                                  </div>
                                </div>
     <p className="max-w-[900px] mx-auto text-center text-[20px] leading-relaxed text-gray-800">
  DxAssist supports clinicians by converting unstructured clinical notes and patient-uploaded images
  into concise summaries and evidence-backed, prioritized diagnostic hypotheses using generative AI
  with retrieval augmentation. It reduces documentation burden and diagnostic oversight while
  preserving privacy, accuracy, and traceability, and never replaces professional medical judgment.
</p>


    </section>
                                
                                </div>
                              </>
                              );
                            }
