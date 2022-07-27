import React from "react";

interface Props {
  name: string;
  type: "text" | "email" | "textarea";
}

const Input = ({ name, type }: Props) => {
  const captialName = name[0].toUpperCase() + name.substring(1);
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-sm font-medium">
        {captialName}
      </label>
      {type == "textarea" ? (
        <textarea
          name={name}
          id={name}
          placeholder={captialName}
          className="h-36 rounded-xl border-2 border-gray py-4 pl-6 placeholder:text-base focus:border-transparent focus:shadow-2xl focus:outline-none"
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={captialName}
          className="rounded-xl border-2 border-[#e3e6e9] bg-white py-4 pl-6 placeholder:text-base focus:border-transparent focus:shadow-2xl focus:outline-none"
        />
      )}
    </div>
  );
};

export default Input;
