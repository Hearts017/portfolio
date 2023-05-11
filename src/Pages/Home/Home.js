import React from "react";
import bannerImg from "../../assets/Banner/MyProfile.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <img
              src={bannerImg}
              alt="banner"
              className="rounded-3xl hover:border-2 hover:border-secondary w-[500px]"
            />
          </div>

          <div className="w-[300px] lg:w-full flex flex-col justify-center items-center">
            <h1 className="lg:text-5xl text-secondary font-bold">
              Hi! I am Jommel Toledo
            </h1>
            <p className="py-6 lg:text-lg text-sm">
              As a recent graduate of KodeGo Bootcamp, I have gained valuable
              experience in both front-end and back-end technologies. With a
              strong foundation in HTML, CSS, Bootstrap, I have developed
              responsive and user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
