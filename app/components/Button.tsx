"use client";
import React from "react";
import { IconType } from "react-icons";
interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  smallWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  smallWidth,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative 
  disabled:opacity-50
  disabled:cursor-not-allowed
  
  hover:bg-[white]
  transition

  border-black
 
  text-lg
  border-2
  rounded-full
  font-bold

  ${outline ? "bg-white" : "bg-[#e3d6c3]"}

  ${outline ? "text-black" : "text-black"}
  ${small ? "py-1" : "py-3"}
  ${smallWidth ? "w-40" : "w-full"}



  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
