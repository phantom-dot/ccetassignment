import React, { useState } from "react";
import "./style.css";
import { CgMenuLeft } from "react-icons/cg";
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
    <div className="close-menu" onClick={toggleSidebar}><CgMenuLeft/></div>
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
    <h2>Computer Science Subjects</h2>
      <ul>
        {subjects.map((subject, index=0) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
    
    </>
  );
};

export default Sidebar;
