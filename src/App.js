import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  // all the categories that will be in the header
  const [categories] = useState([
    {name: 'About me', description:<About></About>},
    {name: 'Projects', description: <Portfolio></Portfolio> },
    {name: 'Contact Me', description: <ContactForm></ContactForm> },
    {name: 'Resume', description: <Resume></Resume> },
  ]);

  // makes sure the title name stays at Reactolio
  useEffect(() => {
    document.title = "Reactolio"
  }, []);
  // makes the about the default nav
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


 
  


  return (
    <div>
    
      <div className='wrapper'>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>

        {/*Will alternate between each category body based off what nav button you press  */}
        <main>
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        </main>
      </div>
      {/* footer will stay at the bottom at all times */}
      <footer>
        
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
