import React, { Component } from 'react';
import '../stylesheets/Header.css';


class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isdropdownvisible: false
    }
  }

  onClickStories = () => {
    const {isdropdownvisible} = this.state;
    this.setState({ isdropdownvisible: !isdropdownvisible })
  }

  render() {
    return (
      <div className="Header">
        <a href="/" className="TitleNav"><span className="logo">Y</span>Hacker News</a>
        <div className="Subhead">
          <div className="StoryNav">
            <div onClick={this.onClickStories} style={{cursor: "pointer"}}>Stories&nbsp;<i className="fa fa-caret-down"></i></div>
            <div className="dropdown" style={{display: this.state.isdropdownvisible ? "block" : "none" }}>
              <div style={{ marginTop: "2px" }}><a href="/newStories" style={{ color: "black", textDecoration: "none" }}>New Stories</a></div>
              <div style={{ marginTop: "10px" }}><a href="/topStories" style={{ color: "black", textDecoration: "none" }}>Top Stories</a></div>
            </div>
          </div>
          <div style={{ marginRight: "20px", marginLeft: "20px" }}><a href="/askStories" style={{ color: "white", textDecoration: "none" }}>Ask</a></div>
          <div style={{ marginRight: "20px", marginLeft: "20px" }}><a href="/jobStories" style={{ color: "white", textDecoration: "none" }}>Jobs</a></div>
        </div>
      </div>
    );
  }
}

export default Header;

