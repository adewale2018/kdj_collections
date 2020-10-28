import React from "react";
import {
  MDBEdgeHeader,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBJumbotron,
  MDBIcon,
  MDBAnimation,
} from "mdbreact";
import MenuLink from "../components/menuLink";

const Contact = () => {
  return (
    <>
      <MDBEdgeHeader color='indigo darken-3' className='sectionPage' />
      <MDBAnimation type='zoomIn' duration='500ms'>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='8' className='mx-auto'>
              <MDBJumbotron className='mt-3'>
                <h1 className='text-center'>
                  KDJ COLLECTIONS
                </h1>
                <ul className='list-unstyled example-components-list'>
                  <h6 className='mt-3 grey-text'>
                    <strong>Contact Us</strong>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum optio dicta dignissimos tenetur nulla nemo, natus, exercitationem repellendus laborum explicabo tempore iure. Temporibus ratione, voluptate eveniet minima corporis placeat, possimus sunt consectetur alias dolorem debitis beatae totam quam magnam sint autem odit similique neque voluptates unde illo aspernatur voluptatem. Facere rerum similique totam nam. Labore, tenetur? Minima aliquid pariatur omnis qui ad veniam natus distinctio possimus quia soluta, aut ducimus ab nihil beatae modi voluptate, quidem nesciunt blanditiis earum provident harum, optio a vitae ea! Nulla impedit culpa laborum odio dolore! Repellat sunt velit explicabo nesciunt beatae. Quaerat, laudantium?
                  </p>
                </ul>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>
    </>
  );
};

export default Contact;
