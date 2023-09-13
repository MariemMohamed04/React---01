import React, { Component } from 'react'
import style from './Home.module.css'
import image from '../../assets/imgs/avataaars.svg'
import Navbar from '../navbar/Navbar'

export default class Home extends Component {
  render() {
    return (
      <>
      <section className={`d-flex align-items-center justify-content-center text-center text-white ${style.home}`}>
        <div className="container">
        <img src={image} className={`${style.img} mb-3`} alt="smilie boy" />
        <h1 className=" text-uppercase fw-bolder fs-1">start framework</h1>
            <div className={`d-flex align-items-center justify-content-center mb-3 text-white`}>
              <div className={`${style.line}`}></div>
              <i className="fa-solid fa-star mx-3"></i>
              <div className={`${style.line}`}></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
      </>
    )
  }
}
