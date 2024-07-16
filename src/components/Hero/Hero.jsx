import "./Hero.css";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";

import hero_image from "../../assets/dzevad.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = ({ showForm, setShowForm, handleShowForm }) => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 855 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>
            Najbolji u regiji{" "}
            <span style={{ fontWeight: "bold" }}>Sandžak top tim</span>
          </span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Savladaj </span>
            <span>umetnost borenja u</span>
          </div>
          <div>
            <span> Sandžak Top Teamu</span>
          </div>
          <div>
            <span>
              Naš cilj je da vam pomognemo da oblikujete telo i unapredite svoje
              veština. Dođite i pridružite nam se u ostvarenju vašeg punog
              potencijala!
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={4} start={1} delay="0.5" preFix="+" />
            </span>
            <span>Stručna trenera</span>
          </div>
          <div>
            <span>
              <NumberCounter end={216} start={172} delay="4" preFix="+" />
            </span>
            <span>novih članova </span>
          </div>
          <div>
            <span>
              <NumberCounter end={3} start={0} delay="0.5" preFix="+" />
            </span>
            <span>Borbena programa</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn" onClick={handleShowForm}>
            Počni odmah
          </button>
          <Link to="Location" className="btn" spy={true} smooth={true}>
            Pronađi nas📍
          </Link>
        </div>
      </div>
      <div className="right-h">
        <button
          className="btn"
          style={{ zIndex: "3" }}
          onClick={handleShowForm}
        >
          Pridruži se
        </button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Srčani ritam </span>
          <span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />
        <motion.div
          initial={{ right: "34rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Kalorija Sprženo</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
      {showForm && <Modal show={true} onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Hero;
