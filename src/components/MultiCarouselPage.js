import {
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBNavLink,
} from "mdbreact";
import React, { Component } from "react";

import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <Slider {...settings}>
        <div className='special-card'>
          <img src='' alt='' />
        </div>
        <div className='special-card'>
          <img src='' />
        </div>
        <div className='special-card'>
          <img src='' />
        </div>
        <div className='special-card'>
          <img src='' />
        </div>
        <div className='special-card'>
          <img src='' />
        </div>
        <div className='special-card'>
          <img src='' />
        </div>
        
      </Slider>
    );
  }
}
