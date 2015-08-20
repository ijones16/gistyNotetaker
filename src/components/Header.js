import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/">Gisty Notetaker</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" > About </a>
            </li>
            <li>
              <a href="/" > Take A Note </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Header;
