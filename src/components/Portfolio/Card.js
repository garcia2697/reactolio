import React from "react";
import ModalImage from "react-modal-image";
import { Container, Row, Col } from "react-grid-system";

const Card = ({ item }) => {
  return (
    <>
      <Container fluid className="boo">
        <Row debug className="boo">
          {item.map((Val) => {
            return (
              <Col sm={12} md={6} lg={6}  debug key={Val.id} className="boo">
                <div className="dataCard">
                  {/* title and image picture are contained here */}
                  {Val.title}
                  <br></br>
                  {/* ModalImage helps you get a zoom in feature of the picture */}
                  <ModalImage
                    small={Val.img}
                    medium={Val.img}
                    large={Val.img}
                    alt={Val.title}
                  />
                  {/* made it to where it hides the languages whenever its phone size also pushes down link application lower*/}
                  <h5 className="langCard">Desciption:{Val.Desciption}</h5>
                  <h5 className="langCard">Technologies Used:{Val.language}</h5>
                  {/* gitPhoto gives padding to the bottom of the card */}
                  <div className="gitPhoto">
                    <h5 className="cardText">GitHub Link: {Val.Github} </h5>

                    <h5 className="cardText">{Val.Deployed}</h5>
                  </div>
                </div>
                <br></br>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Card;
