import React from "react";
import { FaReact } from "react-icons/fa";
import wave from "../../../img/wave Gif.gif";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Loreepellat qui iure, deserunt eum nam magni fugit dolor tenetur beatae molestias adipisci iste voluptatum illo reiciendis exercitationem?",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "300",
  },
  {
    title: "FPT",
    content: "500-4500km",
    description:
      "Loreepellat qui iure, deserunt eum nam magni fugit dolor tenetur beatae molestias adipisci iste voluptatum illo reiciendis exercitationem?",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "500",
  },
  {
    title: "CCC",
    content: "800-5500km",
    description:
      "Loreepellat qui iure, deserunt eum nam magni fugit dolor tenetur beatae molestias adipisci iste voluptatum illo reiciendis exercitationem?",
    icon: <FaReact className="text-7xl" />,
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <div className="bg-black ">
      <div className="container">
        <div className="min-h-[400px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
            {ServiceData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm  text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
              >
                {data.icon}
                <h1>{data.title}</h1>
                <p>{data.content}</p>
                <p className="text-sm">{data.description}</p>
              </div>
            ))}
          </div>
          <img
            src={wave}
            alt=""
            className="h-[200px] w-full  object-cover mix-blend-screen -translate-y-24 relative z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
