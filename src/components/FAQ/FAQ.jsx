import React, { useState } from "react";
import "./FAQ.css";
import { FAQData } from "../../data/FAQData";

const FAQComponent = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="faq-container" id="faq">
      <div className="faq-title" data-order="2">
        ČESTO <span className="stroke-text">POSTAVLJANA</span> PITANJA
      </div>
      <p className="faq-description">
        Pronađi odgovore na najčešća pitanja o našim programima i uslugama.
      </p>
      <div className="accordion-container">
        {FAQData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-control"
              type="button"
              aria-expanded={openItem === index}
              aria-controls={`mantine-panel-${index + 1}`}
              id={`mantine-control-${index + 1}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-label">{item.question}</span>
              <span className="accordion-chevron">
                <svg
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </button>
            <div
              className="accordion-panel"
              aria-hidden={openItem !== index}
              role="region"
              id={`mantine-panel-${index + 1}`}
              aria-labelledby={`mantine-control-${index + 1}`}
              style={{
                maxHeight: openItem === index ? "500px" : "0",
              }}
            >
              <div className="accordion-content">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
