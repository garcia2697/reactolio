// imports all application icons

import GitHub from '../../assets/x-small/github-logo.png';
import Deployed from '../../assets/x-small/deployed.png';
import walkThrough from '../../assets/x-small/video.png'

// imports all repo images
// image dimensions should be 650x316 to keep consistency
import TrackStream from "../../assets/large/Track-Stream.png";
import Reactolio from '../../assets/large/Reactolio.png';
import GitGood from '../../assets/large/GitGood.PNG';
import Bootleg from '../../assets/large/bootleg.PNG';
import Quiz from '../../assets/large/quiz.PNG';
import fresh from '../../assets/large/fresh.PNG';
import ETest from '../../assets/large/employee-testing.png'
import ETrack from '../../assets/large/employee-tracker.PNG'
import generator from '../../assets/large/port-generator.PNG'
import paws from '../../assets/large/Happy-Paws.PNG'

const Data = [
    {
      id: "1",
      title: "Track-Stream ",
      category: "Full Stack",
      language: "JavaScript, HTML, CSS, NodeJS, MySQL",
      img: TrackStream,
      Desciption: "Track Stream's purpose is to keep you notified of all the video streaming services you are subscribed too. The application will give you a visual reminder of how much you're spending on streaming services and when the renewal period starts again.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/streaming-service-tracker" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Deployed Application:<a data-testid="link" href="https://shielded-thicket-83954.herokuapp.com/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="Deployed Link Dimension is 50x50" />
      </a> </h5>
    },
    {
        id: "2",
        title: "Reactolio",
        category: "Front End",
        language: "REACT, CSS, JavaScript",
        img: Reactolio,
        Desciption: "Full stack web application allowing users to add lost pets to the website.",
        Github: <a data-testid="link" href="https://github.com/garcia2697/reactolio" target="_blank" rel="noreferrer"> 
        <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
        </a>,
        Deployed: <h5 className="cardText">Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/reactolio/" target="_blank" rel="noreferrer"> 
        <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
        </a></h5>
    },
    {
      id: "3",
      title: "portfolio-generator",
      category: "Back End",
      language: "NodeJS",
      img: generator,
      Desciption: "Generates a portfolio based off user input",
      Github: <a data-testid="link" href="https://github.com/garcia2697/portfolio-generator" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Walkthrough Video: <a data-testid="link" href="https://drive.google.com/file/d/1Tg1S8TrO5oXJQ7vDbl-Wz3_aKE4PbJUs/view" target="_blank" rel="noreferrer"> 
      <img src={walkThrough} alt="Deployed Link Dimension is 50x50" />
      </a> </h5>,
    },
    {
      id: "4",
      title: "Git-Good ",
      category: "Front End",
      language: "HTML, CSS",
      img: GitGood,
      Desciption: "Web application used as an online database for helping aspiring software developers get started.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/GitGood" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/GitGood/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h5>,
    },
    {
      id: "5",
      title: "bootleg-security",
      category: "Front End",
      language: "JavaScript, CSS, HTML",
      img: Bootleg,
      Desciption: "Generates a password for the user based off the variables the user gave.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/bootleg-security" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/bootleg-security/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h5>,
    },
    {
      id: "6",
      title: "employee-tracker",
      category: "Back End",
      language: "NodeJS, MySQL",
      img: ETrack,
      Desciption: "Creates a database that lets you keep track of what employees you have, their roles, and departments.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/employee-tracker" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Walkthrough Video: <a data-testid="link" href="https://drive.google.com/file/d/1rH9t_0Ssqxu-NKI2HNflwhMffPvi6xie/view" target="_blank" rel="noreferrer"> 
      <img src={walkThrough} alt="Deployed Link Dimension is 50x50" />
      </a> </h5>
    },
    {
      id: "7",
      title: "Quiz Time",
      category: "Front End",
      language: "HTML, CSS, JavaScript",
      img: Quiz,
      Desciption: "Test",
      Github: <a data-testid="link" href="https://github.com/garcia2697/quiz-time" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/quiz-time/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h5>,
    },
    {
      id: "8",
      title: "fresh.ly",
      category: "Front End",
      language: "HTML, CSS, JavaScript",
      img: fresh,
      Desciption: "This repository contains a timed quiz that can be played multiple times.This quiz will also keep track of who has the highest score, by using local storage.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/fresh.ly" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/fresh.ly/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h5>,
    },
    {
      id: "9",
      title: "Employee Testing",
      category: "Back End",
      language: "NodeJS, Jest, HTML",
      img: ETest,
      Desciption: "Creates a quick employee database that allows you to unit test on all models.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/employee-testing" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Walkthrough Video: <a data-testid="link" href="https://drive.google.com/file/d/1rH9t_0Ssqxu-NKI2HNflwhMffPvi6xie/view" target="_blank" rel="noreferrer"> 
      <img src={walkThrough} alt="Deployed Link Dimension is 50x50" />
      </a> </h5>
    },
    {
      id: "10",
      title: "Happy Paws ",
      category: "Full Stack",
      language: "JavaScript, React, NodeJS, Apollo, MongoDB, etc",
      img: paws,
      Desciption: "Full stack web application allowing users to add lost pets to the website.",
      Github: <a data-testid="link" href="https://github.com/garcia2697/vroom-vroom" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h5 className="cardText"> Deployed Application:<a data-testid="link" href="https://guarded-cove-87598.herokuapp.com/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="Deployed Link Dimension is 50x50" />
      </a> </h5>
    }
    
    
];
   
  export default Data;