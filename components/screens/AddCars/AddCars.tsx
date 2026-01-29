"use client"
import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import { AddCarForm } from "./component/AddCarform";

const AddCarsPage = () => {
  return (
    <div className="min-h-screen bg-white space-y-6">
      <SectionHeader
        align="left"
        title="Admin Dashboard"
        subTitle="Monitor overall platform performance including total cars, bookings, revenue, and recent activities"
      />

      <AddCarForm />
    </div>
  );
};

export default AddCarsPage;
