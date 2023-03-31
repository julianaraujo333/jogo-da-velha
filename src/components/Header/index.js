import React from "react";
import "./styles.css";
import Logo from   "../../objects/Logo";
import Sobre from "../../objects/Sobre";
import Menu from "../../objects/Menu";


const Header = () =>(
  <header>
    <Logo/>
    <Sobre/>
    <Menu/>
  </header>
);

export default Header;