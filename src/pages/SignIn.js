import React from "react";
import { Link } from "react-router-dom";
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBAnimation,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import SectionContainer from "../components/sectionContainer";

function SignIn(){
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer className='mt-5 mb-5'>
          <MDBRow>
            <MDBCol md='6' className='mx-auto'>
              <MDBJumbotron className='mt-3'>
                <div className='mt-5 mb-5 text-right'>
                  <p>
                    Don't have an account yet?{" "}
                    <Link to='/signup' className='font-weight-bold'>
                      Sign up!
                    </Link>
                  </p>
                </div>

                <h4 className='text-center font-weight-bold text-primary'>
                  SIGN IN
                </h4>
                <SectionContainer>
                  <form>
                    <label
                      htmlFor='defaultFormLoginEmailEx'
                      className='grey-text'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      id='defaultFormLoginEmailEx'
                      className='form-control'
                    />
                    <br />
                    <label
                      htmlFor='defaultFormLoginPasswordEx'
                      className='grey-text'
                    >
                      Your password
                    </label>
                    <input
                      type='password'
                      id='defaultFormLoginPasswordEx'
                      className='form-control'
                    />
                    <div className='text-center mt-4'>
                      <MDBBtn color='elegant' type='submit'>
                        <MDBIcon icon='paper-plane' className='mr-1' />
                        Sign In
                      </MDBBtn>
                      <MDBBtn color='primary' type='submit'>
                        <MDBIcon fab icon='google' className='mr-1' />
                        Sign in with Google{" "}
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

export default SignIn;
