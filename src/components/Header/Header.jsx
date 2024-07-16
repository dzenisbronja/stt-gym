import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/stt.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 855);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 855);
    };

    const handleClickOutside = (event) => {
      if (
        menuOpened &&
        !event.target.closest(".header-menu") &&
        !event.target.closest(".bars-menu")
      ) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpened]);

  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
          className="bars-menu"
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            style={{ width: "1.5rem", height: "1.5rem" }}
            alt="Menu"
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Početna
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="schedule"
              spy={true}
              smooth={true}
            >
              Raspored
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Programs"
              spy={true}
              smooth={true}
            >
              Programi
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Zašto mi?
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Planovi
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="Testimonials"
              spy={true}
              smooth={true}
            >
              Reference
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="faq"
              spy={true}
              smooth={true}
            >
              FAQ
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
