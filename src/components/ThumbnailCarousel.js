import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from "mdbreact";

import React from "react";

const ThumbnailsCarouselPage = () => {
  return (
    <>
      <MDBCarousel activeItem={1} length={5} showControls={true} showIndicators={false} thumbnails className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <img className="d-block w-100" src="https://i.postimg.cc/sxSbPK2R/54.jpg" alt="First slide" style={{height: '300px'}} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <img className="d-block w-100" src="https://i.postimg.cc/sg3bSYdt/103.jpg" alt="Second slide" style={{height: '300px'}} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <img className="d-block w-100" src="https://i.postimg.cc/Kz3WFQBg/100.jpg" alt="Third slide" style={{height: '300px'}} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <img className="d-block w-100" src="https://i.postimg.cc/yxqbN9yp/106.jpg" alt="Third slide" style={{height: '300px'}} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <img className="d-block w-100" src="https://i.postimg.cc/ydxfjjvb/45.jpg" alt="Third slide" style={{height: '300px'}} />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <img className="d-block w-100" src="https://i.postimg.cc/ht7cy83h/01.jpg" alt="Third slide" style={{height: '300px'}} />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
}

export default ThumbnailsCarouselPage;