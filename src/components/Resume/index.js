import React from 'react';
import resume1 from '../../assets/large/ResumePart1.png';
import resume2 from '../../assets/large/ResumePart2.png';
import download from '../../assets/x-small/download_icon.png';
import PDF from '../../assets/large/software_Resume.pdf'
// import TrackStream from "../../assets/large/Track-Stream.png";

function Resume() {
  
  return (
    <div>

        <div className='resumeDownload'>
         
          <h4> Download Resume:</h4>
          <a href={PDF} download> 
            <img src={download} alt="Download Resume"/>
          </a>
        </div>

        <div className='resume'> 
        <img src={resume1} alt="Resume Dimension is 1800W" />
        
        <img src={resume2} alt="Resume Dimension is 1800W" />
        {/* <img src={TrackStream} alt="LinkedIn Link Dimension is 650W" /> */}
        </div>
        
    </div>
  );
}

export default Resume