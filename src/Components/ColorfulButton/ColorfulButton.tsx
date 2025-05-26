import React from 'react';
import './ColorfulButton.css';

interface ColorfulButtonProps {
    label: string;
    className?: string;
}

const ColorfulButton: React.FC<ColorfulButtonProps> = ({  label, className }) => {
   return (
       // JSX body
        <button className={`button ${className}`}>
        <p className='text-gray-800 font-extrabold'>{label}</p>
        </button>
   );
};

export default ColorfulButton;