import "./Header.scss";
import { motion } from "framer-motion";
import profile from "../../assets/peter-profile.png";
import circle from "../../assets/circle.svg";
import typescript from "../../assets/typescript.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";

const Header = () => {
  const floatingImages = [typescript, javascript, react];
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Peter</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Developer</p>
            <p className="p-text">Architect</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={profile} alt="profile" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={circle}
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {floatingImages.map((image, index) => (
          <div className="circle-cmp app__flex" key={`image-${index}`}>
            <img src={image} alt="image-circles" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
