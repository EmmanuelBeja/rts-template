import React from "react";

interface Props {
  title: React.ReactNode;
  handleClick?: () => void;
  clickText?: string;
  children?: React.ReactNode;
}

const Card: React.FC<Props>  = ({ title, handleClick, clickText, children }) => (
  <div className="bg-white shadow-md shadow-slate-300 rounded-lg mb-5 py-3 text-base">
    <div className="px-5 py-3 flex justify-between">
      <h1 className="text-lg font-semibold flex justify-center">{title}</h1>
      {clickText && (
        <button
          className={
            "text-xs text-custom-primary font-semibold focus:outline-none bg-slate-100 px-2 rounded-2xl" +
            (handleClick ? " hover:text-custom-warning" : " opacity-50 cursor-not-allowed")
          }
          onClick={handleClick ? () => handleClick() : () => {}}
          disabled={!handleClick}
        >
          {clickText}
        </button>
      )}
    </div>
    {children}
  </div>
);

export default Card;