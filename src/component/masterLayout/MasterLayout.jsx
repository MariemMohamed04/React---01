import React, { Component } from 'react'
import style from './MasterLayout.module.css'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

import { Outlet } from 'react-router-dom'

export default class MasterLayout extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
}
