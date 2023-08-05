import logo from "./logo.png";
import logo2 from "./logo2.png";
import menu from "./menu.png";
import menu2 from "./menu2.png";
import "./Navbar.css";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="flex-col bg-[#F7FCFC] z-10 fixed top-0 w-[100%]">
      <div className="flex container justify-between items-center z-10">
        <div className="logo py-3 z-10">
          <img src={logo} alt="logo" className={`h-10 md:h-14`} />
        </div>
        <div className="z-10" onClick={toggleHandler}>
          <img src={menu2} alt="menuIcon" className="md:hidden z-10" />
        </div>
        <div
          className={`hidden md:flex md:flex-row z-10 font-bold text-black `}
        >
          <div className="navItem mx-3">
            <NavLink exact="true" to="/">
              HOME
            </NavLink>
          </div>
          <div className="navItem mx-3">
            <NavLink to="/about">ABOUT</NavLink>
          </div>
          <div className="navItem mx-3">
            <NavLink to="/career">CAREER</NavLink>
          </div>
          <div className="navItem mx-3">
            <NavLink to="/invester">INVESTER</NavLink>
          </div>
          <div className="navItem ml-3">
            <NavLink to="/contact">CONTACT US</NavLink>
          </div>
        </div>
      </div>
      {toggle && (
        <div
          className={`md:hidden flex flex-col items-center relative z-10 ${"text-black"}`}
        >
          <div className="navItem" onClick={toggleHandler}>
            <NavLink exact="true" to="/">
              HOME
            </NavLink>
          </div>
          <div className="navItem" onClick={toggleHandler}>
            <NavLink to="/about">ABOUT</NavLink>
          </div>
          <div className="navItem" onClick={toggleHandler}>
            <NavLink to="/career">CAREER</NavLink>
          </div>
          <div className="navItem" onClick={toggleHandler}>
            <NavLink to="/bloghome">BLOG</NavLink>
          </div>
          <div className="navItem" onClick={toggleHandler}>
            <NavLink to="/contact">CONTACT US</NavLink>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Navbar;
