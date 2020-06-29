import React, { useState } from 'react';
import '../stylesheets/Header.css';


function Header() {

  const [dropdownvisible, setdropdownvisible] = useState('false');

  const onClickStories = () => {
    setdropdownvisible(!dropdownvisible)
  }

  return (
    <div className="Header">
      <a href="/" className="TitleNav"><span className="logo">Y</span>Hacker News</a>
      <div className="Subhead">
        <div className="StoryNav">
          <div onClick={onClickStories} style={{cursor: "pointer"}}>Stories&nbsp;<i className="fa fa-caret-down"></i></div>
          <div className="dropdown" style={{display: dropdownvisible ? "none" : "block" }}>
            <div style={{ marginTop: "2px" }}><a href="/" style={{ color: "black", textDecoration: "none" }}>New Stories</a></div>
            <div style={{ marginTop: "10px" }}><a href="/topStories" style={{ color: "black", textDecoration: "none" }}>Top Stories</a></div>
          </div>
        </div>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}><a href="/askStories" style={{ color: "white", textDecoration: "none" }}>Ask</a></div>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}><a href="/jobStories" style={{ color: "white", textDecoration: "none" }}>Jobs</a></div>
      </div>
    </div>
  );
}

export default Header;

