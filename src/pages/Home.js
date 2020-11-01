import React from "react";

import { toAbsoluteUrl } from "../helpers";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
} from "mdbreact";
import "./HomePage.css";

function Home() {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <div className='mt-3 mb-5'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='12' style={{marginTop: '-3rem'}}>
              <h4 className='text-center' style={{ color: "#f4f4f4" }}>
                Online Shopping has never been so easy as it is on{" "}
                <span style={{ color: "#ff6c37", fontWeight: '500' }}>KDJ COLLECTIONS</span>.<br />{" "}
                Shop as you like and have a fun!
              </h4>
              <hr className='my-5' />

              <MDBRow id='categories'>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon
                            icon='css3'
                            brand
                            className='pink-text pr-2'
                          />
                          <strong>CSS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Animations, colours, shadows, skins and many more! Get
                          to know all our css styles in one place.
                        </MDBCardText>
                        <MDBNavLink
                          tag='button'
                          to='/css'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInDown'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon icon='cubes' className='blue-text pr-2' />
                          <strong>COMPONENTS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Ready-to-use components that you can use in your
                          applications. Both basic and extended versions!
                        </MDBCardText>
                        <MDBNavLink
                          tag='button'
                          to='/components'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInRight'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon icon='code' className='green-text pr-2' />
                          <strong>ADVANCED</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Advanced components such as charts, carousels,
                          tooltips and popovers. All in Material Design version.
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/advanced'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow id='categories'>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon icon='bars' className='pink-text pr-2' />
                          <strong>NAVIGATION</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Ready-to-use navigation layouts, navbars, breadcrumbs
                          and much more! More about our navigation components.
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/navigation'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeIn'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon icon='edit' className='blue-text pr-2' />
                          <strong>FORMS</strong>
                        </MDBCardTitle>
                        <MDBCardText className='mb-4 pb-3'>
                          Inputselecst, date and time pickers. Everything in one
                          place is ready to use!
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/forms'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInRight'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon icon='table' className='green-text pr-2' />
                          <strong>TABLES</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Basic and advanced tables. Responsive, datatables,
                          with sorting, searching and export to csv.
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/tables'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>

              <MDBRow id='categories'>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon
                            icon='window-restore'
                            far
                            className='pink-text pr-2'
                          />
                          <strong>MODALS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Modals used to display advanced messages to the user.
                          Cookies, logging in, registration and much more.
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/modals'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInUp'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                        cascade
                        className='img-fluid'
                        src='https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                      />
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon
                            icon='arrows-alt'
                            className='blue-text pr-2'
                          />
                          <strong>PLUGINS & ADDONS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Google Maps, Social Buttons, Pre-built Contact Forms
                          and Steppers. Find out more about our extended
                          components.
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/addons'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}

export default Home;
