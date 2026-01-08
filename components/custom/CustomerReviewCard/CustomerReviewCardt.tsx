import React from "react";
import Image, { StaticImageData } from "next/image";

export type Testimonial = {
  id: number;
  image: StaticImageData | string;
  name: string;
  place: string;
  stars: string;
  comment: string;
};

const CustomerReviewCardt = ({ data }: { data: Testimonial }) => {
  return (
    <div
      className="
        group bg-white rounded-2xl p-6
        shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)]
        hover:shadow-[0_18px_45px_-14px_rgba(0,0,0,0.35)]
        transition-all duration-300 ease-out
        hover:-translate-y-2
        flex flex-col gap-5 sm:gap-3
      "
    >
      {/* Top: User info */}
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            fill
            className="
              object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
            priority
          />
        </div>

        <div>
          <p className="font-semibold text-lg leading-tight">{data.name}</p>
          <p className="text-sm text-gray-500">{data.place}</p>
        </div>
      </div>

      {/* Stars */}
      <p className="text-blue-500 text-md tracking-wide">
        {data.stars}
      </p>

      {/* Comment */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {data.comment}
      </p>
    </div>
  );
};

export default CustomerReviewCardt;
