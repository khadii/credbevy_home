import React from "react";
import Cardtwo from "./major/Cards/Cardtwo";
import Cardthree from "./major/Cards/Cardthree";

export default function Home_sections_five() {

   const reviews = [
  {
    id: 1,
    username: "@Alexiscoker_",
    rating: 5,
    text: "I had a positive experience borrowing through this marketplace. The application was straightforward, and the funds were quickly disbursed. Great service!",
    platform: "App Store",
     icon:"/images/icon.svg"
  },
  {
    id: 2,
    username: "@JohnDoe",
    rating: 5,
    text: "Amazing service! Quick approval and seamless transactions.",
    platform: "Play Store",
     icon:"/images/icon.svg"
  },
  {
    id: 3,
    username: "@JaneSmith",
    rating: 4,
    text: "Very good service, but could use more flexible payment options.",
    platform: "App Store",
     icon:"/images/icon.svg"
  },
  {
    id: 4,
    username: "@ChrisBrown",
    rating: 5,
    text: "Fast and reliable. Highly recommend!",
    platform: "Play Store",
     icon:"/images/icon.svg"
  },
  {
    id: 5,
    username: "@EmilyJones",
    rating: 5,
    text: "Easy to use and efficient service.",
    platform: "App Store",
     icon:"/images/icon.svg"
  },
  {
    id: 6,
    username: "@MikeDavid",
    rating: 4,
    text: "Great app, but support response time could be better.",
    platform: "Play Store",
     icon:"/images/icon.svg"
  },
  {
    id: 7,
    username: "@SarahLee",
    rating: 5,
    text: "Excellent experience with fast disbursement!",
    platform: "App Store",
     icon:"/images/icon.svg"
  },
  {
    id: 8,
    username: "@TomWilson",
    rating: 5,
    text: "Smooth and easy process.",
    platform: "Play Store",
     icon:"/images/icon.svg"
  },
  {
    id: 9,
    username: "@NinaMills",
    rating: 4,
    text: "Good, but needs more transparency in fees.",
    platform: "App Store",
    icon:"/images/icon.svg"
  },
  {
    id: 10,
    username: "@LiamScott",
    rating: 5,
    text: "Perfect lending experience!",
    platform: "Play Store",
     icon:"/images/icon.svg"
  },
];
return (
  <section className="w-full lg:pb-[80px] pb-[60px] flex justify-center px-[15px]">
    <div className="relative w-full overflow-visible">
      <p className="text-myblack lg:text-[40px] text-2xl font-bold text-center">
        Testimonials
      </p>
      <h1 className="italic opacity-80 font-semibold text-myblack text-base text-center mb-12">
        Our Success stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-5 lg:overflow-visible lg:overflow-x-auto scrollbar-hide custom-scrollbar">
        {reviews.map((review) => (
          <Cardthree
            key={review.id}
            handle={review.username}
            testimonies={review.text}
            imageSrc={review.icon}
            title={""}
            // className="lg:translate-y-5 lg:scale-110"
          />
        ))}
      </div>
    </div>
  </section>
)};
