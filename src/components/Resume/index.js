import React from 'react'
import resume1 from '../../assets/large/ResumePart1.png';
import resume2 from '../../assets/large/ResumePart2.png'
// import TrackStream from "../../assets/large/Track-Stream.png";

function Resume() {
  
  return (
    <section>
        <img src={resume1} alt="GiHub Link Dimension is 1000W" />
        <img src={resume2} alt="LinkedIn Link Dimension is 1000W" />
        {/* <img src={TrackStream} alt="LinkedIn Link Dimension is 650W" /> */}
        
        
    </section>
  );
}

export default Resume