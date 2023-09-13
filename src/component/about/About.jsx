import React, { Component } from 'react'
import style from './About.module.css'
export default class About extends Component {
  render() {
    return (
      <>
        <section className={`d-flex align-items-center justify-content-center text-center text-white ${style.about}`}>
          <div className="container">
            <h1 className=" text-uppercase fw-bolder fs-1">about component</h1>
            <div className={`d-flex align-items-center justify-content-center mb-3 text-white`}>
              <div className={`${style.line}`}></div>
              <i className="fa-solid fa-star mx-3"></i>
              <div className={`${style.line}`}></div>
            </div>
            <div className="row px-5">
              <div className="col-md-6 ps-md-5 text-start">
                <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
              </div>
              <div className="col-md-6 pe-5 text-start">
                <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
