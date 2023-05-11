import React from "react";
import aboutmeImg from "../../assets/About Me/aboutMe.jpg";
import Tabs from "../../Components/Tabs";
import CV from "../../Components/myCV.pdf";

const Aboutme = () => {
  return (
    <div>
      <div className="bg-base-200 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
          <div className="w-[300px] lg:w-full">
            <img
              src={aboutmeImg}
              alt="banner"
              className="rounded-3xl hover:border-2 hover:border-secondary w-full"
            />
          </div>

          <div className="w-[300px] lg:w-full flex flex-col items-center lg:py-20">
            <Tabs />
            <a
              href={CV}
              download
              className="btn btn-info m-12 hover:btn-secondary hover:font-bold"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
