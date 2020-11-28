import "./HomePage.css";

import {
  MDBAnimation,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBEdgeHeader,
  MDBFreeBird,
  MDBIcon,
  MDBNavLink,
  MDBRow,
} from "mdbreact";

import AutoSlider from "../components/MultiCarouselPage";
import { Link } from 'react-router-dom'
import React from "react";
import ThunbnailCarousel from "../components/ThumbnailCarousel";
import { toAbsoluteUrl } from "../helpers";

function Home() {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <div className='mt-1 mb-5'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12' style={{ marginTop: "-3rem" }}>
              <div className='text-center store-title'>
                Shop for flowers now at <br />
                <span className='my-5 store-title-1'>FLOWER GIRL</span>{" "}
               <div className='text-center mt-5'>
                
                  <Link  className='text-white btn shopLink' to={'/shop'}>shop Now</Link>
              
               </div>
              </div>
              
              <hr className='my-3' />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <MDBRow>
        <MDBCol md='12'>
          <MDBRow>
            <MDBCol md='6'>
              <img
                src='https://i.postimg.cc/QMQss8D3/1.jpg'
                alt='beautiful Flower'
                style={{ width: "100%", height: '97.71%', margin: "20px 0" }}
              />
            </MDBCol>
            <MDBCol md='6'>
            <img
                src='https://i.postimg.cc/LsNCjwBP/44.jpg'
                alt='beautiful Flower'
                
                style={{ width: "100%", margin: "20px 0" }}
              />
              <img
                src='https://i.postimg.cc/sg3bSYdt/103.jpg'
                alt='beautiful Flower'
                
                style={{ width: "100%" }}
              />
            
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Home;
