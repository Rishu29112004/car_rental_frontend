import CustomerReviewCardt from "@/components/custom/CustomerReviewCard/CustomerReviewCardt";
import SectionHeader from "@/components/custom/SectionHeader/SectionHeader";
import React from "react";

export const testimonialData = [
  {
    id: 1,
    image: "/testimonial_image_1.png",
    name: "Emma Rodriguez",
    place: "Barcelona, Spain",
    stars: "★★★★★",
    comment:
      "I've rented cars from various companies, but the experience with CarRental was exceptional.",
  },
  {
    id: 2,
    image: "/testimonial_image_2.png",
    name: "Daniel Thompson",
    place: "New York, USA",
    stars: "★★★★★",
    comment:
      "Booking was quick and hassle-free. The car was clean, well-maintained, and exactly as described.",
  },
  {
    id: 3,
    image: "/testimonial_image_1.png",
    name: "Priya Sharma",
    place: "Mumbai, India",
    stars: "★★★★★",
    comment:
      "Excellent service and transparent pricing. I felt completely safe and comfortable throughout my trip.",
  },
];

const CustomersSay = () => {
  return (
    <div className="mb-12 md:mb-14">
      <div className="max-w-7xl w-auto p-4 ">
        <div>
          <SectionHeader
            title="What Our Customers Say"
            subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonialData.map((data) => (
            <div key={data.id}>
              <CustomerReviewCardt data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
