import React, { useRef } from 'react';

export const Toggler = ({ toggleMenu }: any) => {
  const toggler = useRef<HTMLDivElement>(null);

  const toggle = () => {
    toggler.current?.classList.toggle('open');
    toggleMenu();
  };

  return (
    <div
      id="toggler"
      ref={toggler}
      className="hamburger toggle"
      onClick={toggle}
    >
      {/*toggle button for mobile menu*/}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
