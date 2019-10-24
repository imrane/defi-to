import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__center center center_lg">
          <a href="www.google.com" className="header__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="19">
              <path d="M 23.051 6.163 C 23.051 9.303 23.051 15.819 23.051 15.819 L 25.768 15.819 L 25.768 11.021 L 31.369 11.021 L 31.369 8.355 L 25.768 8.355 L 25.768 6.163 L 31.371 6.163 L 31.371 3.261 L 23.051 3.261 C 23.051 3.261 23.051 3.024 23.051 6.163 Z" fill="#FFFFFF"></path>
              <path d="M 12.741 6.095 C 12.741 9.234 12.741 15.751 12.741 15.751 L 21.041 15.77 L 21.041 13.3 L 15.449 13.3 L 15.458 10.952 L 21.059 10.953 L 21.059 8.286 L 15.458 8.287 L 15.458 6.095 L 21.061 6.095 L 21.061 3.192 L 12.741 3.192 C 12.741 3.192 12.741 2.955 12.741 6.095 Z" fill="#FFFFFF"></path>
              <path d="M 33.213 6.095 C 33.213 9.234 33.213 15.751 33.213 15.751 L 35.93 15.751 L 35.921 3.277 L 33.213 3.192 C 33.213 3.192 33.213 2.955 33.213 6.095 Z" fill="#FFFFFF"></path>
              <path d="M 5.605 0 L 3.903 0 L 3.888 2.042 L 0 2.047 L 0 3.495 L 3.888 3.481 L 3.903 5.592 L 5.605 5.592 Z" transform="translate(38.947 3.474) rotate(270 2.803 2.796)" fill="#FFFFFF"></path>
              <path d="M 41.75 10.165 C 43.294 10.165 44.545 11.42 44.545 12.967 C 44.545 14.515 43.294 15.77 41.75 15.77 C 40.205 15.77 38.954 14.515 38.954 12.967 C 38.954 11.42 40.205 10.165 41.75 10.165 Z M 40.352 12.967 C 40.352 13.741 40.977 14.369 41.75 14.369 C 42.522 14.369 43.147 13.741 43.147 12.967 C 43.147 12.194 42.522 11.566 41.75 11.566 C 40.977 11.566 40.352 12.194 40.352 12.967 Z" fill="#FFFFFF"></path>
              <path d="M 11.227 9.419 C 11.227 16.742 2.227 15.864 2.227 15.864 L 2.227 2.925 C 2.227 2.925 11.227 2.097 11.227 9.419 Z M 4.907 5.806 L 4.907 12.886 C 4.907 12.886 8.598 12.395 8.598 9.37 C 8.598 6.345 4.907 5.806 4.907 5.806 Z" fill="rgb(255, 255, 255)"></path>
            </svg>
          </a>
          <nav className="header__nav js-nav">
            <a href="#speakers" className="header__link">SPEAKERS</a>
            <a href="#schedule" className="header__link">SCHEDULE</a>
            <a href="#venue" className="header__link">VENUE</a>
            <a href="#contact" className="header__link">CONTACT</a>
          </nav>
          <a href="https://www.meetup.com/DeFi-Toronto/events/264869389" target="_blank"
            className="header__btn btn btn_white">REGISTER</a><button className="header__burger js-burger"></button></div>
      </header>
    )
  }
}

export default Navbar