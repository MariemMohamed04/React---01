import React, { Component } from 'react'
import style from './Footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <>
      <>
        <div className={`text-center ${style.footer}`}>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h3 className="text-uppercase text-white">location</h3>
                <p className='text-white'>2215 John Daniel Drive</p>
                <p className='text-white'>Clark, MO 65243</p>
              </div>
              <div className="col-sm-4">
                <h3 className="text-uppercase text-white">around the web</h3>
                <div className="icons text-white">
                  <i className={`fa-brands fa-facebook mx-1 ${style.icon}`}></i>
                  <i className={`fa-brands fa-twitter mx-1 ${style.icon}`}></i>
                  <i className={`fa-brands fa-linkedin mx-1 ${style.icon}`}></i>
                  <i className={`fa-solid fa-globe mx-1 ${style.icon}`}></i>
                </div>
              </div>
              <div className="col-sm-4">
              <h3 className="text-uppercase text-white">about freelancing</h3>
              <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`text-center text-white p-4 ${style.copyright}`}>
          <p className='d-inline'>Copyright © Your Website 2021</p>
        </div>
      </>
      </>
    )
  }
}
