import React from "react";
import Portfolio from "./Portfolio";
import p1 from "../../assets/Portfolio/p1.jpg";
import p2 from "../../assets/Portfolio/p2.jpeg";
import p3 from "../../assets/Portfolio/p3.jpg";
import p4 from "../../assets/Portfolio/p4.jpg";
import p5 from "../../assets/Portfolio/p5.jpg";
import p6 from "../../assets/Portfolio/p6.jpg";

const Portfolios = () => {
  const portfolios = [
    {
      image: p1,
      title: "Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim mauris, pharetra feugiat sem eget, finibus rhoncus nunc. Nullam sit amet tortor vel magna sodales porttitor. Fusce.",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p2,
      title: "Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim mauris, pharetra feugiat sem eget, finibus rhoncus nunc. Nullam sit amet tortor vel magna sodales porttitor. Fusce.",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p3,
      title: "Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim mauris, pharetra feugiat sem eget, finibus rhoncus nunc. Nullam sit amet tortor vel magna sodales porttitor. Fusce.",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p4,
      title: "Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim mauris, pharetra feugiat sem eget, finibus rhoncus nunc. Nullam sit amet tortor vel magna sodales porttitor. Fusce.",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p5,
      title: "Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim mauris, pharetra feugiat sem eget, finibus rhoncus nunc. Nullam sit amet tortor vel magna sodales porttitor. Fusce.",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },

    {
      image: p6,
      title: "Title 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim mauris, pharetra feugiat sem eget, finibus rhoncus nunc. Nullam sit amet tortor vel magna sodales porttitor. Fusce.",
      stack1: "React",
      stack2: "JavaScript",
      stack3: "Tailwind",

      gitHubLink: "www.git",
      liveLink: "www.live",
    },
  ];

  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-10">
        {portfolios.map((portfolio, i) => (
          <Portfolio key={i} portfolio={portfolio}></Portfolio>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
