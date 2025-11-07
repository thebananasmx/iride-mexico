import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = 'font-bold py-3 px-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-[#F24A09] text-white hover:bg-black focus:ring-[#F24A09]',
    secondary: 'bg-yellow-500 text-gray-900 hover:bg-yellow-600 focus:ring-yellow-400',
    outline: 'bg-transparent border-2 border-[#F24A09] text-[#F24A09] hover:bg-black hover:text-white hover:border-black focus:ring-[#F24A09]',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;