import React, { Component } from 'react'
import style from './Contact.module.css'
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userAge: '',
      userEmail: '',
      userPassword: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {

    const { userName, userAge, userEmail, userPassword } = this.state;

    return (
      <>
        <section className={`d-flex align-items-center justify-content-center text-center text-white mb-5 ${style.contact}`}>
          <div className="container">
            <h1 className=" text-uppercase fw-bolder fs-1" style={{ color: "#2C3E50" }}>contact form</h1>
            <div className={`d-flex align-items-center justify-content-center mb-3 text-white`}>
              <div className={`${style.line}`}></div>
              <i className="fa-solid fa-star mx-3" style={{ color: "#2C3E50" }}></i>
              <div className={`${style.line}`}></div>
            </div>
            <div className="form w-50 m-auto text-start">
              <div className="row g-4 py-3">
                <div className="col-sm-12">
                  {userName ? (<label htmlFor="userName" className={` ${style.label}`}> userName :</label>) : null}
                  <input type="text" id="userName" name="userName" value={userName} onChange={this.handleInputChange} className={`form-control border-0 border-bottom py-3 position-relative ${style['form-control']}`} placeholder="User Name" />
                </div>
                <div className="col-sm-12 label-container">
                  {userAge ? (<label htmlFor="userAge" className={` ${style.label}`}> userAge :</label>) : null}
                  <input type="text" id="userAge" name="userAge" value={userAge} onChange={this.handleInputChange} className={`form-control border-0 border-bottom py-3 position-relative ${style['form-control']}`} placeholder="User Age" />
                </div>
                <div className="col-sm-12">
                  {userEmail ? (<label htmlFor="userEmail" className={` ${style.label}`}> userEmail :</label>) : null}
                  <input type="text" id="userEmail" name="userEmail" value={userEmail} onChange={this.handleInputChange} className={`form-control border-0 border-bottom py-3 position-relative ${style['form-control']}`} placeholder="User Email" />
                </div>
                <div className="col-sm-12">
                  {userPassword ? (<label htmlFor="userPassword" className={` ${style.label}`}> userPassword :</label>) : null}
                  <input type="text" id="userPassword" name="userPassword" value={userPassword} onChange={this.handleInputChange} className={`form-control border-0 border-bottom py-3 position-relative ${style['form-control']}`} placeholder="User Password" />
                </div>
              </div>
              <button type="button" className={`${style.btn} btn`}>Send Message</button>
            </div>
          </div>
        </section>
      </>
    )
  }
}
