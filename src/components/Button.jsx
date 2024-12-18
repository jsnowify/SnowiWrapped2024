import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass, href }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-white ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>
          <a href={href}>{title}</a>
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
