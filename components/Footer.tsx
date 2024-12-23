import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full  pb-10 mb-[100px] md:mb-5 ' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96' >
            <img
            src='/footer-grid.svg'
            alt='grid'
            className='w-full h-full opacity-50 '
            />
        </div>
        <div className='flex flex-col items-center'>
             <h1 className='heading lg:max-w-[45vw]'>
                Ready To Take <span className=' text-purple'>Your </span> Digital  Presence  To The  <span className=' text-purple'>Next</span> Level
             </h1>
             <p className='text-white-200 md:mt-10 my-5 text-center'>
                Contact me today 
             </p>
             <a href='mailto:ajaysingh426344@gmail.com'>
                <MagicButton
                title="Touch to get Connect"
                icon ={<FaLocationArrow/>}
                position="right"
                
                />
             </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center '>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright ©  2024  Pintu Kumar </p>
            
            <div className='flex items-center md:gap-3 gap-6'>
                   {socialMedia.map((items)=>(
                    <div key={items.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg-border border-black-300'>
                        <img
                        src={items.img} 
                        alt="items.id"
                        width={20}
                        height={20}
                        />

                    </div>
                   ))}
                </div>
        </div>
        </footer>
  )
}

export default Footer