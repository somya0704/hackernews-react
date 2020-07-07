import React, { useState } from 'react';
import styled from 'styled-components';

const MainHeader = styled.div`
  margin: -8px;
  background-color: #f60;
  height: 70px;
  display: flex;
  list-style: none;
  position: fixed;
  width: -webkit-fill-available;
  margin-top: -101px;
`
const TitleNav = styled.a`
  color: white;
  font-size: 25px;
  text-decoration: none;
  margin-left: 98px;
  margin-top: 22px;
`

const Logo = styled.span`
  padding: 1px 10px;
  border: 1px solid #fff;
  margin-right: 6px;
  font-family: sans-serif;
`
const Dropdown = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  background-color: white;
  padding: 13px;
  margin-left: -60px;
`

const SubHead = styled.div`
  display: flex;
  color: white;
  list-style: none;
  font-size: 21px;
  margin-top: 26px;
  margin-left: 68px;
`

function Header() {

  const [dropdownvisible, setdropdownvisible] = useState('false');

  const onClickStories = () => {
    setdropdownvisible(!dropdownvisible)
  }

  return (
    <MainHeader>
      <TitleNav href="/"><Logo>Y</Logo>Hacker News</TitleNav>
      <SubHead>
        <div style={{marginRight: "20px"}}>
          <div onClick={onClickStories} style={{cursor: "pointer"}}>Stories&nbsp;<i className="fa fa-caret-down"></i></div>
          <Dropdown style={{display: dropdownvisible ? "none" : "block" }}>
            <div style={{ marginTop: "2px" }}><a href="/" style={{ color: "black", textDecoration: "none" }}>New Stories</a></div>
            <div style={{ marginTop: "10px" }}><a href="/topStories" style={{ color: "black", textDecoration: "none" }}>Top Stories</a></div>
          </Dropdown>
        </div>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}><a href="/askStories" style={{ color: "white", textDecoration: "none" }}>Ask</a></div>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}><a href="/jobStories" style={{ color: "white", textDecoration: "none" }}>Jobs</a></div>
      </SubHead>
    </MainHeader>
  );
}

export default Header;

