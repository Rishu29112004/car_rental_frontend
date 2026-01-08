import React from 'react'

interface TitleProps {
  title: string
  subTitle: string
  align?: "left" | "center"
}


const SectionHeader = ({ title, subTitle, align = "center" }: TitleProps) => {
  return (
    <div className={`flex flex-col justify-center items-center gap-2 text-center mb-8 md:mb-12 ${align === "left" ? "md:items-start md:text-left" : ""
      }`}>
      <h1 className='font-semibold text-4xl md:text-[40px]'>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90  max-w-156'>{subTitle}</p>
    </div>
  )
}

export default SectionHeader
