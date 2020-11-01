import React from "react";

import { ReactComponent as ShoppingCart } from "../assets/11.2 shopping-bag.svg";
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";

import "./CartIcon.css";

const CartIcon = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <div className='cart-icon'>
          <ShoppingCart className='shopping-icon' />
          <span className='item-count'>200</span>
        </div>
      </MDBAnimation>
    </>
  );
};

export default CartIcon;
