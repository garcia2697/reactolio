import React from "react";
import ModalImage from "react-modal-image";

const Card = ({ item }) => {            


    return (
        <>
        <div className="d-flex flex-row lg-3">
            
            {item.map((Val) => {

                return (
                <div key={Val.id}>
                    <div className="dataCard">
                        {/* title and image picture are contained here */}
                        {Val.title}  <br></br>

                        {/* ModalImage helps you get a zoom in feature of the picture */}
                        <ModalImage
                        small={Val.img}
                        medium={Val.img}
                        large={Val.img}
                        alt={Val.title}
                        />

                        {/* made it to where it hides the languages whenever its phone size also pushes down link application lower*/}
                        <div className="langCard">
                         Languages Used:{Val.language}   
                        </div>
                        
                        
                        {/* gitPhoto gives padding to the bottom of the card */}
                        <div className="gitPhoto">
                            <h4 className="cardText">GitHub Link:  {Val.Github} </h4> 
                            
                        
                            <h4 className="cardText">{Val.Deployed}</h4> 
                        </div>
                    </div>
                    
                    
                </div>
                
                );
            })}
            
          </div>
        
      </>
    );
};
 
export default Card;