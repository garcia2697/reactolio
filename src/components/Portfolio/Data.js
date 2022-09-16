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


const Data = [
    {
      id: "1",
      title: "Track-Stream ",
      category: "Full Stack",
      language: "JavaScript, HTML, CSS, NodeJS, MySQL, etc",
      img: TrackStream,
      Github: <a data-testid="link" href="https://github.com/garcia2697/streaming-service-tracker" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Deployed Application:<a data-testid="link" href="https://shielded-thicket-83954.herokuapp.com/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="Deployed Link Dimension is 50x50" />
      </a> </h4>
    },
    {
        id: "2",
        title: "Reactolio",
        category: "Front End",
        language: "REACT, CSS, JavaScript",
        img: Reactolio,
        Github: <a data-testid="link" href="https://github.com/garcia2697/reactolio" target="_blank" rel="noreferrer"> 
        <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
        </a>,
        Deployed: <h4 className="cardText">Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/reactolio/" target="_blank" rel="noreferrer"> 
        <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
        </a></h4>
    },
    {
      id: "3",
      title: "portfolio-generator",
      category: "Back End",
      language: "NodeJS",
      img: generator,
      Github: <a data-testid="link" href="https://github.com/garcia2697/portfolio-generator" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Walkthrough Video: <a data-testid="link" href="https://drive.google.com/file/d/1Tg1S8TrO5oXJQ7vDbl-Wz3_aKE4PbJUs/view" target="_blank" rel="noreferrer"> 
      <img src={walkThrough} alt="Deployed Link Dimension is 50x50" />
      </a> </h4>,
    },
    {
      id: "4",
      title: "Git-Good ",
      category: "Front End",
      language: "HTML, CSS",
      img: GitGood,
      Github: <a data-testid="link" href="https://github.com/garcia2697/GitGood" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/GitGood/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h4>,
    },
    {
      id: "5",
      title: "bootleg-security",
      category: "Front End",
      language: "JavaScript, CSS, HTML",
      img: Bootleg,
      Github: <a data-testid="link" href="https://github.com/garcia2697/bootleg-security" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/bootleg-security/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h4>,
    },
    {
      id: "6",
      title: "employee-tracker",
      category: "Back End",
      language: "NodeJS, MySQL",
      img: ETrack,
      Github: <a data-testid="link" href="https://github.com/garcia2697/employee-tracker" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Walkthrough Video: <a data-testid="link" href="https://drive.google.com/file/d/1rH9t_0Ssqxu-NKI2HNflwhMffPvi6xie/view" target="_blank" rel="noreferrer"> 
      <img src={walkThrough} alt="Deployed Link Dimension is 50x50" />
      </a> </h4>
    },
    {
      id: "7",
      title: "Quiz Time",
      category: "Front End",
      language: "HTML, CSS, JavaScript",
      img: Quiz,
      Github: <a data-testid="link" href="https://github.com/garcia2697/quiz-time" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/quiz-time/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h4>,
    },
    {
      id: "8",
      title: "fresh.ly",
      category: "Front End",
      language: "HTML, CSS, JavaScript",
      img: fresh,
      Github: <a data-testid="link" href="https://github.com/garcia2697/fresh.ly" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Deployed Application: <a data-testid="link" href="https://garcia2697.github.io/fresh.ly/" target="_blank" rel="noreferrer"> 
      <img src={Deployed} alt="GiHub Link Dimension is 50x50" />
      </a></h4>,
    },
    {
      id: "9",
      title: "Employee Testing",
      category: "Back End",
      language: "NodeJS, Jest, HTML",
      img: ETest,
      Github: <a data-testid="link" href="https://github.com/garcia2697/employee-testing" target="_blank" rel="noreferrer"> 
      <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
      </a>,
      Deployed: <h4 className="cardText"> Walkthrough Video: <a data-testid="link" href="https://drive.google.com/file/d/1rH9t_0Ssqxu-NKI2HNflwhMffPvi6xie/view" target="_blank" rel="noreferrer"> 
      <img src={walkThrough} alt="Deployed Link Dimension is 50x50" />
      </a> </h4>
    },
    
];
   
  export default Data;