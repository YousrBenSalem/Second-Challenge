import React from "react";
import { AiFillFilePpt } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import {
  AiFillSkype,
  AiFillTwitterCircle,
  AiOutlineConsoleSql,
} from "react-icons/ai";
import TagButton from "./TagButton";
import pingu from "../images/PINGU.jpg";
function SideMenu() {
  const content = `PinguCoder is a 100%  Tunisian paltform , in the field of IT development and new technology`;
  return (
    <div style={{ margin: "25px", border: "solid #1d9bf0 5px" }}>
      <TagButton title ="Download CV">
        <div>
          <span>🐱‍👤🎂🌹😉😢😉✔</span>
        <AiFillFilePpt />
        <AiOutlineDownload />
        </div>
        
      </TagButton>

      <TagButton title ={content}>
        <img style ={{width:"100px"}} src={pingu} alt="pingu" />
      </TagButton>
      <TagButton title ={content}>
        <AiFillSkype />
        <AiFillTwitterCircle />
        <AiOutlineConsoleSql />
        <h1>Click me</h1>
        <span>😉🎉✔</span>
        <br />
        <img style ={{width:"100px"}} src={pingu} alt="pingu" />
      </TagButton>
    </div>
  );
}

export default SideMenu;
