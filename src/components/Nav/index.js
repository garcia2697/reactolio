import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import About from '../About';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-5 .navBar">
      <h1>
        <a data-testid="link" href="https://garcia2697.github.io/reactolio/">
          Portfolio
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          
          
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;