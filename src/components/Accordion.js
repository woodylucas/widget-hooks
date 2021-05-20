import React from "react";
import { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const handleClick = (idx) => {
    setActiveIdx(idx);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIdx ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => handleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
