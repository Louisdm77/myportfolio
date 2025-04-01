import React from "react";
import MyImage from "../../assets/images/myimage.png";

const AboutMe = () => {
  return (
    <div className="mt-4">
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl fony-bold">About Me</h2>
        <p className="text-lg text-gray-400 lg:text-2xl">
          User engagement and performance enhancement.
        </p>
      </div>

      <div className="block lg:flex lg:justify-around lg:items-center p-4 lg:ml-12">
        <div className="w-full lg:w-[30%] ">
          <img src={MyImage} alt="my photo" className="w-full" />
        </div>{" "}
        <div className="w-full lg:w-[35%] text-gray-400 mt-4 p-6">
          <p className="lg:text-xl">
            I’m a frontend developer passionate about crafting engaging digital
            experiences. I specialize in blending design and functionality to
            create intuitive, responsive applications that enhance user
            interactions. I enjoy tackling challenges such as optimizing
            performance and debugging issues to ensure seamless experiences.
            Collaboration with designers and fellow developers is key to my
            process, allowing me to bring creative ideas to life. Ultimately, my
            goal is to design user-friendly interfaces that make technology
            enjoyable and accessible for everyone.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutMe;
