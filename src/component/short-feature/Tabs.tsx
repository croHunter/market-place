import React, { useState } from 'react';

const Tabs = (props: any) => {
  const [selected, setselected] = useState(props.selected || 0);
  const handleChange = (index: number) => {
    setselected(index);
  };

  return (
    <>
      <ul className="menu-nav">
        <h1>Our Regular Features</h1>
        {props.children.map((element: any, index: number) => {
          let style = index === selected ? 'selected' : '';
          return (
            <li
              key={index}
              className={style}
              onClick={() => handleChange(index)}
            >
              {element.props.title}
            </li>
          );
        })}
      </ul>
      <div className="tab">{props.children[selected]}</div>
    </>
  );
};

export default Tabs;
