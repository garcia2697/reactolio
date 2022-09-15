import React from 'react'
import resume1 from '../../assets/large/ResumePart1.png';
import resume2 from '../../assets/large/ResumePart2.png'
// import TrackStream from "../../assets/large/Track-Stream.png";

function Resume() {
  
  return (
    <div className='resume'>
      
        <img src={resume1} alt="Resume Dimension is 1800W" />
        
        <img src={resume2} alt="Resume Dimension is 1800W" />
        {/* <img src={TrackStream} alt="LinkedIn Link Dimension is 650W" /> */}
        
        
    </div>
  );
}

export default Resume