import React from "react";
import logo from "../../public/images/logo/Exclude.jpg";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="flex items-center justify-center text-primary sm:hidden ">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
