import React from "react";
import firstImg from "../assets/navbar_icon/first.png";
import secondImg from "../assets/navbar_icon/second.png";
import thirdImg from "../assets/navbar_icon/third.png";
import fourthImg from "../assets/navbar_icon/fourth.png";

export interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}


export const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: activeTab === "Overview" ? "red" : "white",
          
        }}
        onClick={() => onTabChange("Overview")}
      >
         <img src={firstImg} alt="Overview" style={{ width: "15px", marginRight: "3px" }} />
        Overview
      </button>
     
      <button
        style={{
          backgroundColor: activeTab === "Repositories" ? "red" : "white",
          
        }}
        onClick={() => onTabChange("Repositories")}
      >
        <img src={secondImg} alt="Repositories" style={{ width: "15px", marginRight: "3px" }} />
        Repositories
      </button>
      <button
        style={{
          backgroundColor: activeTab === "Project" ? "red" : "white",
         
        }}
        onClick={() => onTabChange("Project")}
      >
        <img src={thirdImg} alt="Project" style={{ width: "15px", marginRight: "3px" }} />
        Project
      </button>
      <button
        style={{
          backgroundColor: activeTab === "Packages" ? "red" : "white",
          
        }}
        onClick={() => onTabChange("Packages")}
      >
        <img src={fourthImg} alt="Packages" style={{ width: "15px", marginRight: "3px" }} />
        Packages
      </button>
    </div>
  );
};

