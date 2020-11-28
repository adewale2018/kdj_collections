import './MainNavBar.css'

import {
  MDBBtn,
  MDBCollapse,
  MDBIcon,
  MDBNavItem,
  MDBNavLink,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBTooltip,
} from "mdbreact";

import MyLogo from "../assets/a3.PNG";
import React from "react";
import { auth } from "../firebase/firebase.config";
import { connect } from "react-redux";

function MainNav({ collapseID, toggleCollapse, closeCollapse, currentUser }) {
  
  return (
    <MDBNavbar color='purple-gradient' dark expand='md' fixed='top' scrolling>
      <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
        <img
          src={MyLogo}
          style={{
            height: "2rem",
            width: "2rem",
            borderRadius: "50%",
            marginRight: ".5rem",
            border: "2px solid #000",
          }}
        />
        <strong className='align-middle title-brand'>FLOWER <span className='title-girl'>GIRL</span></strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse("mainNavbarCollapse")} />
      <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink onClick={closeCollapse("mainNavbarCollapse")} to='/doc'>
              <strong>DOCS</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              exact
              to='/'
              onClick={closeCollapse("mainNavbarCollapse")}
            >
              <strong>HOME</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              onClick={closeCollapse("mainNavbarCollapse")}
              to='/shop'
            >
              <strong>SHOP</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              onClick={closeCollapse("mainNavbarCollapse")}
              to='/contact'
            >
              <strong>CONTACT</strong>
            </MDBNavLink>
          </MDBNavItem>
          {currentUser ? (
            <MDBBtn
              id='signOut'
              tag='a'
              floating='true'
              gradient='peach'
              onClick={() => {
                closeCollapse("mainNavbarCollapse");
                auth.signOut();
              }}
            >
              LOG OUT
            </MDBBtn>
          ) : (
            <MDBNavItem>
              <MDBNavLink
                onClick={closeCollapse("mainNavbarCollapse")}
                to='/login'
              >
                <strong>SIGN IN</strong>
              </MDBNavLink>
            </MDBNavItem>
          )}
          <span className='cart-icon'>
            <MDBIcon className='shopping-icon' icon='shopping-bag' />
            <span className='item-count'>00</span>
          </span>
          {currentUser ? <span className='text-white font-size-sm mt-2'>Hi, {currentUser.email} </span>: ""}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(MainNav);
