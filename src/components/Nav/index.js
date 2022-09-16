import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
  // selects categories based off what you clicked in the nav
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;


  return (
    <header className="flex-row px-5 .navBar">
      {/* pressing the title page will take you to the home page */}
      <h1>
        <a data-testid="link" href="https://garcia2697.github.io/reactolio/">
          Luis Garcia
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