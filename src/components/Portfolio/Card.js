import React from "react";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
    
        // <div className="d-flex-row p-2">
        //     <div className="d-flex p-2">
        //     {item.map((Val) => {
        //         return (
        //         <div key={Val.id}>
        //             <div className="d-flex card-body p-2">
        //             <img src={Val.img} alt={Val.title} className="photo" />
        //             </div>
        //             <div className="d-flex card-body p-2">
        //             <img src={Val.img} alt={Val.title} className="photo" />
        //             </div>
        //             {/* <div className="card-title fw-bold fs-4">
        //                 {Val.title}
        //                 <br></br>
        //                 Languages Used:{Val.price}
        //             </div> */}
                    
        //         </div>
                
        //         );
        //     })}
        //     </div>
        //   </div>
       

// col-md-4 col-sm-6 card my-3 py-3 border-0
const Card = ({ item }) => {            


    return (
        <>
        <div className="d-flex flex-row lg-3">
            
            {item.map((Val) => {

                return (
                <div key={Val.id}>
                    <div>
                    <img src={Val.img} alt={Val.title} className="photo" />
                    </div>
                    <div className="card-title fw-bold fs-4">
                        {Val.title}     
                        <br></br>
                        Languages Used:{Val.price}
                        <br></br>
                    </div>
                    
                </div>
                
                );
            })}
            
          </div>
        
      </>
    );
};
 
export default Card;