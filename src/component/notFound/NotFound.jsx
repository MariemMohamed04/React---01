import React, { Component } from 'react'
import style from './NotFound.module.css'
import image from '../../assets/imgs/7887410_3793094.svg'

export default class NotFound extends Component {
  render() {
    return (
      <>
              <section className={`d-flex align-items-center justify-content-center text-center text-white mb-5 ${style.notfound}`}>
        <div className="container">
        <img src={image} className={`w-50`} alt="not found" />
            </div>
            </section>
      </>
    )
  }
}
