import React from "react";
import Data from "./Data";
 
const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}

        {/* Resets page to show all images */}
        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(Data)}
        >
          All
        </button> 
      </div>
    </>
  );
};
 
export default Buttons;