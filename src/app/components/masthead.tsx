import React, { useRef, useContext, useState, useCallback  } from 'react'
import Image from 'next/image'

const Masthead: React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-cyan-400'>
        <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
            <source src='/assets/masthead-bg.m4v' type='video/mp4 codecs=hvc1'/>
            <source src='' type='video codecs=vp9'/>
        </video>
        <div className={`flex-grow-0 pt-10 transition-opacity duration-1000`}>
            <Image src="assets/vercel.svg" width={128 / 3} height={114 / 3 } alt="logo"/>
        </div>
        <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
            <h1 className='mb-6 text-4xl xl:text-5xl'>Margelo</h1>
            <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                <span>App Development,</span> <span>done right.</span>
            </h2>
        </div>
        <div className='flex-grow-0 pb-20 md:pb-10 transition-all duration-1000'>
            <Image src="/assets/arrow-down.jpg" width={188 / 3} height={105 / 3} alt="scroll down" />
        </div>
    </div>
  )
}

export default Masthead