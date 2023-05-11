import React from "react";
import { FaDesktop, FaCode, FaDatabase } from "react-icons/fa";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      icon: <FaDesktop className=""></FaDesktop>,
      title: "Web Development",
      description:
        "As a Web Developer, I can create a responsive website that help businesses and individuals establish a strong online presence.",
    },

    {
      icon: <FaCode className=""></FaCode>,
      title: "Front-End Services",
      description:
        "My Front-End services are designed to help businesses and individuals create visually stunning, responsive, and user-friendly websites.",
    },

    {
      icon: <FaDatabase className=""></FaDatabase>,
      title: "Back-End Services",
      description:
        "My Back-End development services are designed to help businesses and individuals build robust, scalable, and secure server-side applications that power their websites and web applications.",
    },

    {
      icon: <FaDesktop className=""></FaDesktop>,
      title: "Web Development",
      description:
        "As a Web Developer, I can create a responsive website that help businesses and individuals establish a strong online presence.",
    },

    {
      icon: <FaCode className=""></FaCode>,
      title: "Front-End Services",
      description:
        "My Front-End services are designed to help businesses and individuals create visually stunning, responsive, and user-friendly websites.",
    },

    {
      icon: <FaDatabase className=""></FaDatabase>,
      title: "Back-End Services",
      description:
        "My Back-End development services are designed to help businesses and individuals build robust, scalable, and secure server-side applications that power their websites and web applications.",
    },
  ];

  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:py-40">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-3">
        {services.map((service, i) => (
          <Service key={i} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
