import React, { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  color?: string;
}

const ModalCta = ({ title, children, color }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={handleToggleForm}
        className={`max-w-64 mx-auto rounded-full ${color ? color : "text-white bg-black"
          } px-16 py-4 z-10`}
      >
        {title}
      </button>
      <div
        className={`popupform fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-white/30 ${showForm ? "opacity-100" : "opacity-0 pointer-events-none"
          } transitions-all duration-300 z-50 ${isMobile() ? "overflow-auto" : ""}`}
      >
        <div className="fixed pt-[12rem] md:pt-0 bg-white text-black rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 p-8">
          <button
            className="absolute font-3xl right-10 top-[17.5rem] md:top-10"
            onClick={handleToggleForm}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
};



const isMobile = () => {
  if (typeof window === "undefined" || typeof window.navigator === "undefined") {
    return false; 
  }
  const userAgent = window.navigator.userAgent;
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(userAgent);
};

export default ModalCta;
