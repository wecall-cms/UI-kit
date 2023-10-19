import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import PropTypes from "prop-types";

import "./Accordion.scss";

const Accordion = ({ items, size }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = items.map((item, index) => {
    const isActive = index === activeIndex;

    return (
      <div className={`accordion-item ${isActive ? "active" : ""}`} key={index}>
        <div className="accordion-title" onClick={() => onItemClick(index)}>
          <p>{item.title}</p>
          {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <div className={`accordion-content ${isActive ? "active" : ""}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={`accordion size-${size ?? "full"}`}>{renderItems}</div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default Accordion;
