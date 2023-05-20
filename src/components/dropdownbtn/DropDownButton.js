import { useState } from 'react';

import "./dropdownbtn.css";


const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="course__block dropdown">
      <button className="dropdown-button btn__functional__panel" onClick={toggleDropdown}>
        Курс
      </button>
      {isOpen && (
        <div id="myDropdown" className="dropdown-content">
          {/* Содержимое выпадающего списка */}
          <a href="!#">1</a>
          <a href="!#">2</a>
          <a href="!#">3</a>
          <a href="!#">4</a>
          <a href="!#">5</a>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;