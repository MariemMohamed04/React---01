import React, { Component } from 'react'
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({ isScrolled: true });
    } else {
      this.setState({ isScrolled: false });
    }
  };
  render() {
    const { isScrolled } = this.state;
    const navbarClasses = `navbar navbar-expand-lg fixed-top ${isScrolled ? 'py-2' : 'py-4'} ${style.navbar}`;
    return (
      <>
        <nav className={navbarClasses}>
          <div className="container">
            <Link className={`navbar-brand text-uppercase text-white fw-bolder fs-2`} to="home">start framework</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link text-uppercase text-white fw-bold px-3 ${style.navLink}`} to="about">About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-uppercase text-white fw-bold px-3 ${style.navLink}`} to="portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link text-uppercase text-white fw-bold px-3 ${style.navLink}`} to="contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
