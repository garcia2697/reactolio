import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {name: 'About me', description:<About></About>},
    {name: 'Projects', description: <Portfolio></Portfolio> },
    {name: 'Contact Me', description: <ContactForm></ContactForm> },
    {name: 'Resume', description: <Resume></Resume> },
  ]);
  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);


 
  


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
