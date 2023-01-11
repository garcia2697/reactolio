import React from 'react'
import Intro from '../../assets/large/intro.JPG';

function About() {
  
  return (
    <section className="my-5" >
      <div className="my-2">
        <p className='intro'>
        Hi my name is Luis Garcia, I graduated from Texas A&M University with a Bachelor's of Science in Civil Engineering. I have been enrolled at the University of Austin's Coding Bootcamp program. I have a strong passion to learn and am looking for a company that can help me become a successful Software Engineer.
        </p>

        <img className='introPic' src={Intro} alt='pic of me'/>


      
        <p className='intro'> You can reach out to me using the information in the Contact Me page. Feel free to check out my LinkedIn and GitHub using the icons below. </p>
      </div>
    </section>
  )
}

export default About