interface RadioProps {
  options: string[];
  selected: string;
  onChange?: (activeSection: string) => void;
  className?: string;
}

const Radio: React.FC<RadioProps> = ({ options, selected, onChange, className }) => {
  return (
    <div className={className} style={{ zIndex: 0 }}>
      {options.map((option) => (
        <label
          key={option}
          className={`radio flex flex-grow items-center justify-center rounded-lg p-1 cursor-pointer transition duration-200 ${
            selected === option ? "bg-white text-black shadow-lg" : "bg-transparent text-gray-400"
          }`}
          onClick={() => onChange && onChange(option)}
        >
          <span className="tracking-widest text-l p-2 rounded-lg transition duration-150 ease-in-out" >
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
