import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
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

import { auth, SignInWithGoogle } from "../firebase/firebase.config";
import SectionContainer from "../components/sectionContainer";
import { setCurrentUser } from "../redux/user/user.actions";

function SignIn() {
  const [state, setState] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    console.log(email, password)
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log('Error occurred signing in...')
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <label htmlFor='Email' className='grey-text'>
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='Email'
                      className='form-control'
                      value={state.email}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <label htmlFor='Password' className='grey-text'>
                      Your password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='Password'
                      className='form-control'
                      onChange={handleChange}
                      value={state.password}
                      required
                    />
                    <div className='text-center mt-4'>
                      <MDBBtn color='elegant' type='submit'>
                        <MDBIcon icon='paper-plane' className='mr-1' />
                        Sign In
                      </MDBBtn>
                      <MDBBtn
                        color='primary'
                        type='submit'
                        onClick={SignInWithGoogle}
                      >
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
