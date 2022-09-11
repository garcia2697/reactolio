import React from 'react';
import GitHub from '../../assets/small/github-logo.png';
import LinkedIn from '../../assets/small/linkedin.png'


function Footer() {
  
  return (
    <section>
        <a data-testid="link" href="https://github.com/garcia2697"> 
        <img src={GitHub} alt="GiHub Link Dimension is 50x50" />
        </a>
        <a data-testid="link" href="https://www.linkedin.com/in/luis-g-garcia-/"> 
        <img src={LinkedIn} alt="LinkedIn Link Dimension is 50x50" />
        </a>
        
        
    </section>
  );
}
export default Footer;