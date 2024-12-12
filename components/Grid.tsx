import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
          {
         gridItems .map(({id, title,description,className,titleClassName,imgClassName,img ,spareImg})=>(
            <BentoGridItem 
             id={id}
             key={id}
             description ={description}
             title ={title}
             className={className}
             img={img}
             imgClassName = {imgClassName}
             titleClassName ={titleClassName}
             spareImg ={spareImg}

            />
          ))}
        </BentoGrid>
    </section>
  )
}

export default Grid