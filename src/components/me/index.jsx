import React from "react";
import MyInfo from "../myInfo";
import MyImage from "../../assets/images/myimage.png"

const Me = () => {
  return (
    <div>
      <div className="block lg:flex lg:justify-between lg:items-center p-4 lg:ml-12" >
        <div className="w-full lg:w-[65%]">
          <MyInfo />
        </div>{" "}
        <div className="w-full lg:w-[35%] mr-20"><img src={MyImage} alt="my photo" className="w-full"/></div>
      </div>
    </div>
  );
};

export default Me;
