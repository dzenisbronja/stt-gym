import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = ({ showForm, setShowForm, handleShowForm }) => {
  return (
    <div className="Programs" id="programs">
      {/*header*/}
      <div className="programs-header">
        <span className="stroke-text">Izaberi svoj </span>
        <span> idealani</span>
        <span className="stroke-text">program </span>
      </div>

      <div className="program-categories">
        {programsData.map((program, index) => (
          <div onClick={handleShowForm} className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>

            <div className="join-now">
              <span>Prijavi se</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
