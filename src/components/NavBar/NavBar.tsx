import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "../../assets/p-high-resolution-logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <div />
          <a href="#home">Home</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#about">About</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#works">Works</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#skills">Skills</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
