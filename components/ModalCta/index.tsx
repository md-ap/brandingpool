import React, { useState, useEffect } from "react";

interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  color?: string;
}

const ModalCta = ({ title, children, color }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    let scrollYPosition = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && showForm) {
        setShowForm(false);
      }
    };

    if (showForm) {
      if (body) {
        body.classList.add('h-screen', 'overflow-hidden');
        document.addEventListener('keydown', handleKeyDown);
      }
    } else {
      if (body) {
        body.classList.remove('h-screen', 'overflow-hidden');
        document.removeEventListener('keydown', handleKeyDown);
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showForm]);

  return (
    <>
      <button
        onClick={handleToggleForm}
        className={`rounded-full ${color ? color : "text-white bg-black"
          } px-16 py-4 z-10`}
      >
        {title}
      </button>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-white/30 ${showForm ? "opacity-100" : "opacity-0 pointer-events-none"
          } transitions-all duration-300 z-50 overflow-scroll md:overflow-hidden`}
      >
        <div onClick={handleToggleForm} className="absolute w-full h-full"></div>
        <div  className="absolute md:pt-0 bg-white text-black md:rounded-4xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-1/2 p-8 shadow-2xl">
          <button
            className="absolute font-3xl right-10 md:top-10 w-8 h-8 rounded-full flex justify-center items-center"
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

export default ModalCta;
