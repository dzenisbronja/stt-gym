import React, { useState } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = ({ showForm, setShowForm, handleShowForm }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">spremi se </span>
        <span>za svoje putovanje</span>
        <span className="stroke-text">sa nama</span>
      </div>

      {/* Toggle Button */}
      <div className="toggle-wrapper" onClick={handleToggle}>
        <div className={`toggle-button ${toggle ? "toggled" : ""}`}>
          <div className="toggle-circle"></div>
          <span>{toggle ? "6 meseci" : "mesečno"}</span>
        </div>
      </div>

      {/*plans card*/}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {i === 1 && <div className="mini-div">Jednokratna ponuda🥷🏻</div>}
            {plan.icon}
            <span style={i === 1 ? { fontSize: "1rem" } : {}}>{plan.name}</span>

            <span
              style={
                i === 1
                  ? { fontSize: "3rem", fontWeight: "bold" }
                  : { fontSize: "2.3rem" }
              }
            >
              € {toggle ? plan.price2 : plan.price}
              {i !== 1 && (
                <span style={{ fontSize: "1.5rem" }}> / mesečno</span>
              )}
            </span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={handleShowForm} className="btn">
              Prijavi se
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
