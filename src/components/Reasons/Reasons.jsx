import React from "react";
import "./Reasons.css";

import image1 from "../../assets/rifat.png";
import image2 from "../../assets/grad.png";
import image3 from "../../assets/aldin.png";
import image4 from "../../assets/jusko.png";
import mma from "../../assets/mma-savez.png";
import triangle from "../../assets/triangle.png";
import liga from "../../assets/mma-liga.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="right-r">
        <span>Neki od razloga</span>

        <div>
          <span className="stroke-text">Zašto</span>
          <span> izabrati nas?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>5 StruČnih trenera</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>treniraj pametnije i brŽe nego pre</span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>
              Popust za studente, upošljenike hitne službe, policije i
              vatrogasce
            </span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>Pouzdani PARTNERI</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
        >
          naši partneri
        </span>

        <div className="partners">
          <img src={mma} alt="" />
          <img src={triangle} alt="" />
          <img src={liga} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
