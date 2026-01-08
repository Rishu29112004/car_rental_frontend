import { CustomButton } from "@/components/custom/CustomButton/CustomButton";
import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React from "react";

const Subscribe = () => {
  return (
    // <div className="pt-20 flex items-center justify-center w-full bg-amber-200">
    //   <div className="flex flex-col bg-amber-600 items-center justify-center">
    //     <div>
    //       <SectionHeader
    //         title="Never Miss a Deal!"
    //         subTitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
    //       />
    //     </div>
    //     <div className="max-w-4xl w-auto bg-amber-300">
    //       <form className="flex items-center justify-between w-full md:h-13 h-12">
    //         <input
    //           type="text"
    //           placeholder="Enter your email id"
    //           required
    //           className="
    //       border border-gray-300 rounded-md h-full
    //       outline-none w-full rounded-r-none
    //       px-3 text-gray-500
    //     "
    //         />

    //         <button
    //           type="submit"
    //           className="
    //       md:px-12 px-8 h-full
    //       text-white bg-primary
    //       hover:bg-primary-dull
    //       transition-all cursor-pointer
    //       rounded-md rounded-l-none
    //     "
    //         >
    //           Subscribe
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full mb-12 md:mb-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full p-4 md:p-6 ">
        <SectionHeader
          title="Never Miss a Deal!"
          subTitle="Subscribe to get the latest offers, new arrivals, and exclusive discounts"
        />

        {/* INNER CONTAINER — YAHAN WIDTH CONTROL HOGA */}
      <div className="flex w-full max-w-4xl items-center rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 overflow-hidden">
  
  <input
    type="email"
    placeholder="Enter your email address"
    className="flex-1 px-6 py-4 text-base outline-none placeholder:text-gray-400"
  />

  <button className="px-10 py-4 font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-200">
    Subscribe
  </button>

</div>

      </div>
    </div>
  );
};

export default Subscribe;
