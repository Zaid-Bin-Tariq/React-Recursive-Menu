import React from "react";
import MenuList from "./MenuList";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./menu.css"


const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  console.log(displayCurrentChildren);

  return (
    <li className="menu-item">
      <div className="item-icon">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>}
          </span>
        ) : null}
      </div>
      <div>
      {item &&
      item.children &&
      item.children.length &&
      displayCurrentChildren[item.label] > 0 ? (
        <MenuList list={item.children} />
      ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
