import * as React from 'react';

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
 
  <button
    className={` group inline-flex items-center px-8 py-4 my-2 mx-2 rounded-full  font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? 'border-gray-200 text-gray-200  focus:text-gray-200 focus:border-gray-200 text-xl rounded-full bg-green-900 '
        : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300 text-xl'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
  
);