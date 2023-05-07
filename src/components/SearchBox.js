import React from "react";
import search from "../../public/images/png/Search.png";
const SearchBox = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex ml-[127px] mb-[16px]">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className=" "
        style={{
          width: "200px",
          boxSizing: "border-box",
          backgroundImage: `url(${search.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "14px 12px",
          padding: "12px 20px 12px 50px",
          border: "1px solid #DEDEDE",
        }}
      />
    </div>
  );
};

export default SearchBox;
