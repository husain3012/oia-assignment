import React, { Dispatch } from "react";

const Input = ({
  label,
  value,
  placeholder,
  onChange,
  error,
  type,
  className,
}: {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  error?: null | string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
}) => {
  return (
    <div className="flex flex-col font-content">
      <label className="mb-2 text-sm">{label}</label>
      <input
      name={Math.random().toString()}
        placeholder={placeholder}
        type={type}
        onChange={(v) =>
          typeof onChange != "undefined" && onChange(v.target.value)
        }
        className={`w-full p-2 rounded-md outline-none bg-gray-50 focus:bg-gray-100 transition-colors border-2  ${
          error ? "border-red-light" : "border-transparent"
        } ${className ? className : ""}`}
        value={value}
      />
      <span className="text-sm h-2 text-red-dark">{error}</span>
    </div>
  );
};

export default Input;
