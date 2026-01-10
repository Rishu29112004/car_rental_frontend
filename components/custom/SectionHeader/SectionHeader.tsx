import React from "react";

interface TitleProps {
  title: string;
  subTitle: string;
  align?: "left" | "center";
}

const SectionHeader = ({ title, subTitle, align = "center" }: TitleProps) => {
  const isLeft = align === "left";

  return (
    <div
      className={`flex flex-col gap-2 mb-8 md:mb-12 
      ${isLeft ? "items-start text-left" : "items-center text-center"}`}
    >
      <h1 className="font-semibold text-4xl md:text-[40px] text-slate-900">
        {title}
      </h1>

      <p className="text-sm md:text-base text-gray-500/90 max-w-3xl leading-relaxed">
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
