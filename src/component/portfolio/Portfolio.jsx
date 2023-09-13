import React, { Component } from 'react';
import style from './Portfolio.module.css';
import image1 from '../../assets/imgs/poert1.png';
import image2 from '../../assets/imgs/port2.png';
import image3 from '../../assets/imgs/port3.png';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedImage: null,
    };
  }

  handleImageClick = (imageSrc) => {
    this.setState({
      showModal: true,
      selectedImage: imageSrc,
    });
  };

  handleCloseClick = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  };

  render() {
    const { showModal, selectedImage } = this.state;

    return (
      <>
        <section
          className={`d-flex align-items-center justify-content-center text-center text-white mb-5 ${style.port}`}
        >
          <div className="container">
            <h1 className=" text-uppercase fw-bolder fs-1" style={{ color: "#2C3E50" }}>
              portfolio component
            </h1>
            <div className={`d-flex align-items-center justify-content-center mb-3 text-white`}>
              <div className={`${style.line}`}></div>
              <i className="fa-solid fa-star mx-3" style={{ color: "#2C3E50" }}></i>
              <div className={`${style.line}`}></div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div
                  className="img-container position-relative overflow-hidden"
                  onClick={() => this.handleImageClick(image1)}
                >
                  <img src={image1} className={`w-100 rounded-3 ${style.img}`} alt="" />
                  <div
                    className={`${style.layer__} rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className={`text-white fa-solid fa-plus fa-6x`}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="img-container position-relative overflow-hidden"
                  onClick={() => this.handleImageClick(image2)}
                >
                  <img src={image2} className={`w-100 rounded-3 ${style.img}`} alt="" />
                  <div
                    className={`${style.layer__} rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className={`text-white fa-solid fa-plus fa-6x`}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="img-container position-relative overflow-hidden"
                  onClick={() => this.handleImageClick(image3)}
                >
                  <img src={image3} className={`w-100 rounded-3 ${style.img}`} alt="" />
                  <div
                    className={`${style.layer__} rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className={`text-white fa-solid fa-plus fa-6x`}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="img-container position-relative overflow-hidden"
                  onClick={() => this.handleImageClick(image1)}
                >
                  <img src={image1} className={`w-100 rounded-3 ${style.img}`} alt="" />
                  <div
                    className={`${style.layer__} rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className={`text-white fa-solid fa-plus fa-6x`}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="img-container position-relative overflow-hidden"
                  onClick={() => this.handleImageClick(image2)}
                >
                  <img src={image2} className={`w-100 rounded-3 ${style.img}`} alt="" />
                  <div
                    className={`${style.layer__} rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className={`text-white fa-solid fa-plus fa-6x`}></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="img-container position-relative overflow-hidden"
                  onClick={() => this.handleImageClick(image3)}
                >
                  <img src={image3} className={`w-100 rounded-3 ${style.img}`} alt="" />
                  <div
                    className={`${style.layer__} rounded-3 position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}
                  >
                    <i className={`text-white fa-solid fa-plus fa-6x`}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal */}
        {showModal && (
          <div
            className={`${style.model__} position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center`}
          >
            <img src={selectedImage} className={`w-50`} alt="" />
            <i
              className="fa-solid fa-x fs-1"
              onClick={this.handleCloseClick}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        )}
      </>
    );
  }
}

