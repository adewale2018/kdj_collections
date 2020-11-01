import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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

import { auth, createUserProfileDocument } from "../firebase/firebase.config";
import SectionContainer from "../components/sectionContainer";

function SignUp() {
  let history = useHistory();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password and confirm password does not match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setDisplayName("");
      setEmail("");
      setConfirmPassword("");
      setPassword("");
      history.push("/shop");
    } catch (error) {
      alert(error.message);
    }
  };
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
                  <form onSubmit={handleSubmit}>
                    <div className='grey-text'>
                      <MDBInput
                        label='Your name'
                        icon='user'
                        group
                        type='text'
                        validate
                        error='wrong'
                        success='right'
                        name='displayName'
                        onChange={handleNameChange}
                        required
                        value={displayName}
                      />
                      <MDBInput
                        label='Your email'
                        icon='envelope'
                        group
                        type='email'
                        validate
                        error='wrong'
                        success='right'
                        name='email'
                        onChange={handleEmailChange}
                        value={email}
                        required
                      />

                      <MDBInput
                        label='Your password'
                        icon='lock'
                        group
                        type='password'
                        validate
                        name='password'
                        onChange={handlePasswordChange}
                        value={password}
                        required
                      />
                      <MDBInput
                        label='Confirm Your Password'
                        icon='exclamation-triangle'
                        group
                        type='password'
                        validate
                        name='confirmPassword'
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        required
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
