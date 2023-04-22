import React, { useState } from "react";
import "./style.css";
import { CgMenuRight } from "react-icons/cg";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const subjects = [
    "TOC",
    "DBMS",
    "Algorithms",
    "Data Structures",
    "Operating system",
    "Artificial Intelligence",
    "Data mining and analysis",
    "Computer desiging",
    "Compiler designing",
    "Digital image processing",
    "Digital image processing",
    "Digital image processing",
    "Digital image processing",
    "Digital image processing",
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="close-menu" onClick={toggleSidebar}><CgMenuRight /></div>
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <h2>Computer Science Subjects</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
    
    </>
  );
};

export default Sidebar;
