// import React, { useState } from 'react';
// import Nav from './components/Nav';
// import About from './components/About';
import React, {useState} from 'react';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    {name: 'About Me', description: "Describes who I am and what I'm looking for in a company"},
    { name: 'Portfolio', description: 'Will include a page with all my previous work' },
    { name: 'Contact', description: 'Provides a way to contact me' },
    { name: 'Resume', description: 'Will give the user an opportunity to look at my resume' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
    ></Nav>
  );
}

export default App;
