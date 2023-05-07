import Image from "next/image";
import React, { useEffect, useState } from "react";
import addressimg from "../../public/images/png/Address.png";
import img1 from "../../public/images/etkinlikler/1.png";
import img2 from "../../public/images/etkinlikler/2.png";
import img3 from "../../public/images/etkinlikler/3.png";
import img4 from "../../public/images/etkinlikler/4.png";
import { format, parse } from "date-fns";
import { tr } from "date-fns/locale";

const Bilet = ({ img, title, address, type, date, tag, tagImg }) => {
  const [isTakvimdeGor, setIsTakvimdeGor] = useState(false);
  const [isDetayGoster, setIsDetayGoster] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isTitleRengiDegisti, setIsTitleRengiDegisti] = useState(false);

  const parsedDate = parse(date, "d MMMM EEEE HH:mm", new Date(), {
    locale: tr,
  });
  const formattedDay = format(parsedDate, "dd", {
    locale: tr,
  });
  const formattedDate = format(parsedDate, "MMM", {
    locale: tr,
  });
  const formattedTime = format(parsedDate, "EEE ", {
    locale: tr,
  });
  const formattedHour = format(parsedDate, "HH:mm ", {
    locale: tr,
  });

  const handleTakvimdeGorClick = () => {
    setIsTakvimdeGor(!isTakvimdeGor);
    setIsDetayGoster(false);
    setIsTitleRengiDegisti(!isTitleRengiDegisti);
  };
  const handleDetayliBilgiClick = () => {
    setIsDetayGoster(!isDetayGoster);
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article
      className={`relative w-full h-[204px] flex items-center border border-[#DEDEDE] bg-light justify-between drop-shadow-lg z-0 sm:flex-col sm:h-[410px] sm:w-[344px] sm:mx-[16px] 
      }`}
    >
      <div className="w-[200px] h-[204px] bg-black absolute z-0 right-[81.2%]  sm:w-[344px] sm:h-[212px] sm:right-[0%]" />
      <p className="flex flex-col absolute z-10 w-[45px] ml-[21px] text-center justify-center text-primary font-acme sm:w-full sm:items-center ">
        {isSmallScreen ? (
          <div className="text-white font-acme">
            <span className="text-[24px] font-[400]">{formattedDay} </span>
            <span className="font-bold ">{formattedDate} </span>
            <span className="">{formattedTime}</span>
            <span className="text-[#9C9C9C]">{formattedHour}</span>
          </div>
        ) : (
          <>{date}</>
        )}
      </p>

      <div
        className={`z-10 flex items-center justify-center 
           bg-${tagImg} absolute h-[22px] left-[92px] top-[32px] sm:left-[-16px] sm:top-0 sm:my-[16px]  
        }`}
      >
        <div className="w-full text-white items-center font-bold px-[20px] ">
          {tag}
        </div>
      </div>

      <div className=" h-auto  ml-[108px] z-5 relative sm:w-[311px] sm:h-[173px] items-center sm:ml-0 sm:mr-0 sm:mt-[54px] ">
        <Image src={img} alt={title} />
      </div>

      <div className="flex flex-col ml-[16px] mr-[33px] w-[416px] gap-y-[10px] sm:items-center sm:ml-0 sm:mr-0  ">
        <h3
          className={`font-bold text-[18px] font-acme sm:mt-[18px] sm:mx-auto ${
            isTitleRengiDegisti ? "text-[#F19653]" : ""
          }`}
        >
          {title}
        </h3>

        <span className="flex text-[14px] ">
          <Image src={addressimg} alt="address" />
          {address}
        </span>
        <p className="flex text-[16px]">
          {isSmallScreen ? (
            <>
              <p>{isDetayGoster ? type : type.slice(0, 20) + "..."}</p>
              <span
                className="text-dark cursor-pointer ml-1 font-bold underline"
                onClick={handleDetayliBilgiClick}
              >
                {isDetayGoster ? "Detayları Gizle" : "Detaylı Bilgi"}
              </span>
            </>
          ) : (
            <>{type}</>
          )}
        </p>
      </div>
      <div className="grid gap-[10px] sm:flex">
        <button className="bg-primary font-bold justify-center w-[166px] h-[48px] text-light items-center mr-[17px] sm:mr-[10px]">
          Bilet al
        </button>
        <div className="flex items-center">
          {!isTakvimdeGor ? (
            <div
              className="flex items-center justify-center w-[26px] h-[26px] border-[2px] border-black rounded-full text-black cursor-pointer"
              onClick={handleTakvimdeGorClick}
            >
              <span className="text-2xl font-bold">+</span>
            </div>
          ) : (
            <div className="flex items-center justify-center w-[22px] h-[22px]  rounded-full bg-primary text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[22px] w-[22px] "
                viewBox="0 -2 22 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 0 0-1.414 0L9 10.586 5.707 7.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
          <span className="ml-2">
            {isTakvimdeGor ? "Takvime Eklendi" : "Takvime Ekle"}
          </span>
        </div>
      </div>
      <div className="bg-or"></div>
      <div className="bg-prp"></div>
      <div className="bg-rd"></div>
      <div className="bg-gr"></div>
    </article>
  );
};

const Biletler = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center  mt-[60px] sm:mt-[16px] ">
      <div className="grid grid-col-12 gap-y-[16px] sm:flex-col sm:flex-col-12">
        <div className="col-span-12 ">
          <Bilet
            tagImg="prp"
            tag="TİYATRO"
            date="7 Eylül Salı 21:15"
            title="BKM Yaz Etkinlikleri: Zengin Mutfağı"
            address="Maximum UNIQ Hall"
            img={img1}
            type="1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi"
          />
        </div>
        <div className="col-span-12 ">
          <Bilet
            tagImg="or"
            tag="STAND-UP"
            date="8 Eylül Çarşamba 21:15"
            title="BKM Yaz Etkinlikleri: Zengin Mutfağı"
            address="Maximum UNIQ Hall"
            img={img2}
            type="1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi"
          />
        </div>
        <div className="col-span-12">
          <Bilet
            tagImg="rd"
            tag="SİNEMA"
            date="7 Eylül Salı 21:15"
            title="BKM Yaz Etkinlikleri: Zengin Mutfağı"
            address="Maximum UNIQ Hall"
            img={img3}
            type="1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi"
          />
        </div>
        <div className="col-span-12">
          <Bilet
            tagImg="gr"
            tag="KONSER"
            date="7 Eylül Salı 21:15"
            title="BKM Yaz Etkinlikleri: Zengin Mutfağı"
            address="Maximum UNIQ Hall"
            img={img1}
            type="1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi"
          />
        </div>
        <div className="col-span-12">
          <Bilet
            tagImg="or"
            tag="STAND UP"
            date="7 Eylül Salı 21:15"
            title="BKM Yaz Etkinlikleri: Zengin Mutfağı"
            address="Maximum UNIQ Hall"
            img={img2}
            type="1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi"
          />
        </div>
        <div className="col-span-12">
          <Bilet
            tagImg="rd"
            tag="SİNEMA"
            date="7 Eylül Salı 21:15"
            title="BKM Yaz Etkinlikleri: Zengin Mutfağı"
            address="Maximum UNIQ Hall"
            img={img4}
            type="1978 yılında ilk kez İstanbul Şehir Tiyatrolarında bu oyunda aşçı Lütfü Usta’yı canlandıran Şener Şen, 40 yıl aradan sonra aynı rolde ve genç bir.... Detaylı Bilgi"
          />
        </div>
      </div>
    </main>
  );
};

export default Biletler;
