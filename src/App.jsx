import { useState } from "react";
import "./App.css";
import menus from "./components/data";
import MenuList from "./components/MenuList";

function App({menus = []}) {
  return (
    <div className="recursive-menu-container">
      <MenuList list={menus}/>
    </div>
  );
}

export default App;
