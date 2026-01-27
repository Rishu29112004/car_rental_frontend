import CarRentalHOC from "@/components/screens/CarRentalPage/CarRentalHOC";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params; // ✅ yahan se id milegi

  console.log(id); // "123"

  return (
    <div>
      <CarRentalHOC carId={id} />
    </div>
  );
};

export default Page;
