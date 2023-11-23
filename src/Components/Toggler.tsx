import React, { useRef } from "react";

export const Toggler = () => {

    const toggler = useRef<HTMLDivElement>(null);


    return (
        <div
        id="toggler"
        ref={toggler}
        className="hamburger toggle"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {/*toggle button for mobile menu*/}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
}