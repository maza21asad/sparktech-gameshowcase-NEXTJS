import React from 'react'

const HeroSection = () => {
  return (
    <div className='h-auto w-full relative overflow-hidden mx-auto py-10 md:py-0 flex flex-col items-center justify-center'>
        <div className='relative h-auto md:h-[40rem] w-full overflow-hidden mx-auto py-10 md:py-0 flex flex-col items-center justify-center'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero1.png')" }}/>
            {/* <div className="absolute inset-0 bg-black/50" /> */}
            <div className="relative text-white">
                <div className="mt-50 flex space-x-30 text-sm">
                    <button className="px-8 py-3 bg-gradient-to-b from-[#DA5DA3] to-[#5B428A] rounded-tl-lg rounded-tr-lg rounded-br-[50%] rounded-bl-lg text-white font-semibold transition-all duration-300 ease-in-out hover:from-[#E26FB1] hover:to-[#6B52A0]">
                        I AM BRAND NEW
                    </button>

                    <button className="px-8 py-3 bg-gradient-to-b from-[#DA5DA3] to-[#5B428A] rounded-tl-lg rounded-tr-lg rounded-br-[50%] rounded-bl-lg text-white font-semibold transition-all duration-300 ease-in-out hover:from-[#E26FB1] hover:to-[#6B52A0]">
                        I PLAY MUSIC
                    </button>
                </div>
            </div>
        </div>


        <div className='relative h-auto md:h-[40rem] w-full overflow-hidden mx-auto py-10 md:py-0 flex flex-col items-center justify-center'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero2.png')" }}/>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative text-white w-full px-10 flex flex-col">
                <div className="mt-10 flex justify-between space-x-4 items-center">
                    <div className='text-9xl text-outline'>OUR GAMES</div>
                    <div className='flex gap-10'>
                        <div className='w-14 h-14 border border-white rounded-full flex items-center justify-center text-white text-2xl cursor-pointer 
                            hover:bg-gradient-to-b hover:from-[#DA5DA3] hover:to-[#5B428A] hover:text-white transition'>
                            &#60; {/* Left Arrow "<" */}
                        </div>
                        <div className='w-14 h-14 border border-white rounded-full flex items-center justify-center text-white text-2xl cursor-pointer 
                            hover:bg-gradient-to-b hover:from-[#DA5DA3] hover:to-[#5B428A] hover:text-white transition'>
                            &#62; {/* Right Arrow ">" */}
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-between space-x-4">
                    <div className='border-2 p-2'>p</div>
                    <div className='border-2 p-2'>p</div>
                    <div className='border-2 p-2'>q</div>
                    <div className='border-2 p-2'>p</div>
                    <div className='border-2 p-2'>q</div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default HeroSection