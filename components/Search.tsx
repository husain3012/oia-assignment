"use client";
import { SearchIcon } from "@/assets/icons";
import Image from "next/image";
import React, { Dispatch } from "react";

const SearchBox = ({
  label,
  value,
  placeholder,
  onChange,

  className,
}: {
  label?: boolean | string;
  value?: string;
  placeholder?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  error?: null | string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col font-content bg-white rounded-md  ${
      className ? className : ""
    }`}>
      {label && <label className="mb-2">{label}</label>}
      <div className="flex items-center">
        <input
          placeholder={placeholder}
          // type="search"
          onChange={(v) =>
            typeof onChange != "undefined" && onChange(v.target.value)
          }
          className={`w-full p-2 pr-6  outline-none bg-inherit rounded-md focus:bg-gray-200 transition-colors`}
        />
        <button onClick={()=>console.log(value)} className="-mx-6 hover:cursor-pointer hover:bg-white rounded-full p-1 transition-all">
        <Image src={SearchIcon} className="w-3" alt="search" />
        </button>
          
      </div>
    </div>
  );
};

export default SearchBox;
