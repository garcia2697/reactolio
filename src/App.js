import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';

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
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
    
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
