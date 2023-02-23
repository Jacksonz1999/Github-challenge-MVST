import React from "react";
import "./Navbar.css";
import firstImg from "../../assets/navbar_icon/first.png";
import secondImg from "../../assets/navbar_icon/second.png";
import thirdImg from "../../assets/navbar_icon/third.png";
import fourthImg from "../../assets/navbar_icon/fourth.png";
const Navbar = () => {
  return (
    <>
      <div className="button_navbar">
        <button>
          <img
            src={firstImg}
            alt="Overview"
            style={{
              width: "15px",
              marginRight: "3px",
            }}
          />
          Overview
        </button>
        <button>
          <img
            src={secondImg}
            alt="Repositories"
            style={{
              width: "15px",
              marginRight: "3px",
            }}
          />
          Repositories
        </button>
        <button>
          <img
            src={thirdImg}
            alt="Project"
            style={{
              width: "15px",
              marginRight: "3px",
            }}
          />
          Project
        </button>
        <button>
          <img
            src={fourthImg}
            alt="Packages"
            style={{
              width: "15px",
              marginRight: "3px",
            }}
          />
          Packages
        </button>
      </div>
    </>
  );
};

export default Navbar;
