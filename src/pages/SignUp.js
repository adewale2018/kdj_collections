import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBAnimation,
  MDBBtn,
  MDBInput,
  MDBIcon,
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";

function SignUp(){
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer className='mt-5 mb-5'>
          <MDBRow>
            <MDBCol md='8' className='mx-auto'>
              <MDBJumbotron className='mt-3'>
                <div className='mt-5 mb-5 text-right'>
                  <p>
                    Already have an account?{" "}
                    <Link to='/login' className='font-weight-bold'>
                      Log in!
                    </Link>
                  </p>
                </div>

                <h4 className='text-center font-weight-bold text-primary'>
                  SIGN UP
                </h4>
                <SectionContainer>
                  <form>
                    <div className='grey-text'>
                      <MDBInput
                        label='Your name'
                        icon='user'
                        group
                        type='text'
                        validate
                        error='wrong'
                        success='right'
                      />
                      <MDBInput
                        label='Your email'
                        icon='envelope'
                        group
                        type='email'
                        validate
                        error='wrong'
                        success='right'
                      />
                      <MDBInput
                        label='Confirm your email'
                        icon='exclamation-triangle'
                        group
                        type='text'
                        validate
                        error='wrong'
                        success='right'
                      />
                      <MDBInput
                        label='Your password'
                        icon='lock'
                        group
                        type='password'
                        validate
                      />
                    </div>
                    <div className='text-center py-4 mt-3'>
                      <MDBBtn color='primary' type='submit'>
                        Register
                      </MDBBtn>
                    </div>
                  </form>
                </SectionContainer>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
}

export default SignUp;
