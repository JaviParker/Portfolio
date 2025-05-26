import React from 'react';
import './Button.css';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, className }) => {
    return (
        <button type={type} className={className + " uiverse cursor-pointer"} onClick={onClick}>
           <div className="wrapper">
            <span className='text-indigo-950 font-bold'>{label}</span>
            <div className="circle circle-12"></div>
            <div className="circle circle-11"></div>
            <div className="circle circle-10"></div>
            <div className="circle circle-9"></div>
            <div className="circle circle-8"></div>
            <div className="circle circle-7"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-1"></div>
        </div>
        </button>
    );
};

export default Button;