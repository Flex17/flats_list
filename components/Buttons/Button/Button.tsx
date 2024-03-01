import React from 'react';

interface ButtonProps {
  onClick: () => void,
  children: React.ReactNode;
}

const Button = ({
  children,
  onClick,
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-blue t6 rounded py-4 px-24 text-white text-center xxs:py-[12px] xxs:px-[40px] xxs:w-[100%] md:w-auto"
  >
    {children}
  </button>
);

export default Button;
