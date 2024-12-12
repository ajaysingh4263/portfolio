"use client"

import { cn } from "@/utils/cn";
import { linearGradient } from "framer-motion/client";
import { BackgroundGradientAnimation } from "./GradientBG";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confettie.json"
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id ,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number
  img?:string,
 imgClassName?: string
 titleClassName?:string,
 spareImg?: string,
}) => {
   const [copy , setCopy] = useState(false)

   const handleCopy = () =>{
      navigator.clipboard.writeText("AJAYSINGH426344@GMAIL.COM")
      setCopy(true)
   }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden  rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none    justify-between flex flex-col space-y-4 border border-white/white[0.1]",
        className
      )}
      style={{
        background : 'rgb(2,0,36)',
        backgroundColor : 'linear-gradient(90deg ,rgba(2,0,36,1,) 0% ,rgbs(59,59,68,1) 26%  ,rgba(93,108,111,1) '
      }}
    >
      <div className= {`${id === 6} && flex justify-center h-full`}>
          <div className="w-full h-full absolute ">
           {img && (
            <img 
            src={img}
            alt={img}
            className={cn(imgClassName , 'object-cover object-center')}
            />
           )}
          </div>
          <div className={`absolute right-0 -bottom-5
             ${id === 5 && 'w-ful opacity-80'}`}>
              {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className={cn(imgClassName , ' object-cover object-center')}
                
                />
              )}

          </div>
          {id === 6 &&(
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold">

              </div> */}
            </BackgroundGradientAnimation>
          )}

          <div className={cn(
            titleClassName , ' group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col  px-5 p-5 lg:p-10'
          )}>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96  z-10">
          {title}
        </div>
        

        {id === 2 && <GlobeDemo/>}
        {id === 3 &&(
          <div className="flex gap-1 lg:gap-5 w-fit absolute   -right-40 lg:-right-60 ">
         <div className="flex flex-col gap-4 lg:gap-8">
          {['React Js', 'Next js','TypeScript'] .map((item)=>(
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs  lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
                
             ))}
             <span className="py-4 px-3  rounded-lg text-centre bg-[#10132e]"/>

         </div>
         <div className="flex flex-col gap-3 lg:gap-8">
         <span className="py-4 px-3  rounded-lg text-centre bg-[#10132e]"/>
          {['HTML5','Taiwind Css','Java Script '] .map((item)=>(
              <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs  lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                {item}
              </span>
                
             ))}

         </div>
          </div>

        )}

        {id === 6 && (
          <div className="mt-5 relative ">
            <div className={` absolute -bottom-5 right-0 `}>
              <Lottie 
               options ={{
               loop: copy,
               autoplay :copy,
               animationData,
               rendererSettings :{
                preserveAspectRatio : 'xMidYMid slice'
               }
               }}
              />
              </div>
              <MagicButton   
               title ={copy ? "Email Copied " : "Copy My Email"}
              icon ={<IoCopyOutline />}
              position ="left"
              otherClasses = "`!bg-[#161a31]"
              handleClick={handleCopy}
              />
            </div>
        )}
      </div>
      
    </div>
    </div>
  );
};
