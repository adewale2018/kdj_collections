import React, { Component } from "react";
import { toAbsoluteUrl } from '../helpers';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBFooter,
  MDBNavLink,
  MDBTooltip,
  MDBIcon,
} from "mdbreact";
import MyLogo from "../assets/a3.PNG";
import Routes from "../Routes";

class MainNav extends Component {
  render() {
    const { collapseID, toggleCollapse, closeCollapse } = this.props;
    return (
      <div>
        <MDBNavbar
          color='purple-gradient'
          dark
          expand='md'
          fixed='top'
          scrolling
        >
          <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
            <img
              src={MyLogo}
              style={{
                height: "4rem",
                width: "4rem",
                borderRadius: "50%",
                marginRight: ".5rem",
                border: "2px solid #000",
              }}
            />
            <strong className='align-middle'>KDJ COLLECTIONS</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={toggleCollapse("mainNavbarCollapse")}
          />
          <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink
                  onClick={closeCollapse("mainNavbarCollapse")}
                  to='/doc'
                >
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
                  to='/about'
                >
                  <strong>ABOUT</strong>
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
              <MDBNavItem>
                <MDBNavLink
                  onClick={closeCollapse("mainNavbarCollapse")}
                  to='/login'
                >
                  <strong>SIGN IN</strong>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default MainNav;
