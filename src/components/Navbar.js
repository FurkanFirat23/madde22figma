import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBox from "./SearchBox";
import Biletler from "./Biletler";
import Image from "next/image";
import calendar from "../../public/images/png/Calendar.png";
import ucnokta from "../../public/images/png/Group 1363.png";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  // Determine if this link is currently selected
  const isSelected = router.asPath === href;

  // Add a CSS class to the title element based on whether it's selected or not
  const titleClassName = `transition-colors ${
    isSelected ? "text-primary font-bold" : "text-black "
  } ${className}`;

  return (
    <Link href={href} className={`relative group mr-[30px]`}>
      <span className={titleClassName}>{title}</span>
      <span
        className={`h-[4px] inline-block bg-primary absolute left-0 -bottom-[34px] sm:-bottom-[30px] group-hover:w-full transition-[width] ease-in-out duration-200   ${
          isSelected ? "w-full bg-primary" : "w-0 bg-black "
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };

  return (
    <header>
      <div className="mt-[155px] sm:mt-[74px] sm:items-center">
        <h1 className="font-bold text-[32px] mb-[40px] text-center sm:mb-[52px]">
          ETKİNLİKLER
        </h1>
        <div className="flex justify-between  items-center">
          <div className="w-[438px]" />
          <div className="text-center sm:ml-4 flex  z-10 ">
            <nav className="grid-row w-[565px] h-[53px] ">
              <CustomLink href="/" title="Tüm Etkinlikler" />
              <CustomLink href="/tiyatro" title="Tiyatro" />
              <CustomLink href="/konser" title="Konser" />
              <CustomLink href="/standUp" title="Stand Up" />
              <CustomLink href="/sinema" title="Sinema" />
              <CustomLink href="/çocuk" title="Çocuk" />
            </nav>
          </div>
          <div className="w-[437px]  sm:hidden">
            <SearchBox
              placeholder="Etkinlik Ara"
              value={searchValue}
              onChange={handleSearchChange}
              onSubmit={handleSearchSubmit}
            />
          </div>
        </div>
        <div className="flex bg-grey justify-between items-center  h-[52px] ">
          <div className="flex ml-[83px] sm:ml-[16px] gap-[13px]">
            <Image
              src={ucnokta}
              alt="ucnokta"
              className=" h-[18px] w-[10px]  justify-center items-center sm:text-black "
            />
            <p>Filtreler</p>
          </div>
          <div className="mr-[78px] flex sm:mr-[17px]">
            <Image src={calendar} alt="calendar" />
            <p className="ml-[13px]">Takvimde Gör</p>
          </div>
        </div>
      </div>

      <Biletler />

      <div className="absolute left-[50%] top-[37px] translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
