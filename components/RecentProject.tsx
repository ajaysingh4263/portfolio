import { projects } from '@/data'
import { title } from 'process'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { img } from 'framer-motion/client'
import { FaLocationArrow } from 'react-icons/fa'



const RecentProject = () => {
  return (
    <div className=" py-20" id='projects'>
        <h1 className='heading'>
    A Small Selection { ' '}
      <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-8 mt-10'>
               {projects.map(({id,title , des ,iconLists,link ,img})=>(
               <div key={id} className=' sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center  justify-center  sm:w-[520px] w-[80vw]'>
                <PinContainer title={link} href={link} >
                  <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10 '>
                    <div className='relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                      <img src='/bg.png' alt='bg-img' />
                      <img
                       src= {img}
                      alt={title}
                      className='z-10 absolute bottom-0'
                      />
                    </div>
                  </div>
                  <h1 >
                       {title}
                    </h1>
                    <p className='lg:text-xl lg:font-normal font-light text-sm  line-clamp-2'>
                       {des}
                    </p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                      <div className='flex items-center'>
                      {iconLists.map((icon , index)=>(
                        <div key={icon} className=' border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center  ' style={
                           {transform:`translateX(-${5 * index * 2}px)`}
                        }>
                              <img
                              src={icon}
                              alt={icon}
                              className='p-2'
                              />
                          </div>
                      ))}
                      </div>
                         <div className='flex items-center justify-center'>
                          <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                          <FaLocationArrow className='ms-3 ' color='#CBACF9'  />
                         </div>
                    </div>
                </PinContainer>
                </div>
               ))}
        </div>
    </div>
  )
}

export default RecentProject