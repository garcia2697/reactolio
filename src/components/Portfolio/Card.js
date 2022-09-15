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
                        
                        {Val.title}  <br></br>

                        <ModalImage
                        
                        small={Val.img}
                        medium={Val.img}
                        large={Val.img}
                        alt={Val.title}

                        />
                        {/* <img src={Val.img} alt={Val.title}  /> */}

                        
                        <div className="langCard">
                         Languages Used:{Val.language}   
                        </div>
                        
                        <br></br>
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