import React from 'react';
import GitHub from '../../assets/small/github-logo.png';
import LinkedIn from '../../assets/small/linkedin.png';
import insta from '../../assets/small/insta.png';


function Footer() {
  
  return (
    <section>
        
        <a data-testid="link" href="https://github.com/garcia2697"> 
        <img src={GitHub} alt="GiHub Link Dimension is 60x60" />
        </a>
        <a data-testid="link" href="https://www.linkedin.com/in/luis-g-garcia-/"> 
        <img src={LinkedIn} alt="LinkedIn Link Dimension is 60x60" />
        </a>
        <a data-testid="link" href="https://www.instagram.com/luis.garcia20/"> 
        <img src={insta} alt="LinkedIn Link Dimension is 60x60" />
        </a>
        
        
    </section>
  );
}
export default Footer;