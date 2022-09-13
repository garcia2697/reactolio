import React, { useState } from "react";
import Data from "./Data";
import Card from "./Card";
import Buttons from "./Buttons";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      
      
      <div>
       <span> <Buttons 
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            /> 
            <Card item={item} /></span>
      </div>
          
          {/* <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1> */}
          {/* <div className="col-lg-3"></div> */}
          {/* <div className="container-fluid"></div> */}
          {/* <div className="row"></div> */}
          {/* <div className="col-lg-9"></div> */}
    </>
  );
};

export default Portfolio;