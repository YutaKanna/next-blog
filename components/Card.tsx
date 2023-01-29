import Image from 'next/image';
import React from 'react';

export interface CardProps {
  title: string;
  text: string;
  button: {
    text: string;
    url: string;
  };
}

export const Card: React.FC<CardProps> = ({ title, text, button }) => {
  return (
    <div className='w-[300px] text-center rounded-lg shadow-lg '>
      <Image
        src=""
        alt="hoge"
      />
      <h2 className='my-2 text-xl font-bold'>{title}</h2>
      <p className='px-4 text-sm text-left'>{text}</p>
      <button className='py-1.5 px-4 my-4 text-sm  bg-yellow-500 rounded-full shadow-md'>
        {button.text}
      </button>
    </div>
  );
};

