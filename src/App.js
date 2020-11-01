import React, { Component } from "react";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "./firebase/firebase.config";
import { setCurrentUser } from "./redux/user/user.actions";
import MainNav from "./components/MainNav";
import Routes from "./Routes";
import Footer from "./pages/Footer";

class App extends Component {
  state = {
    collapseID: "",
  };

  onSubscribeFromAuth = null;

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.onSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.onSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <div className='flyout'>
        <MainNav
          collapseID={this.state.collapseID}
          toggleCollapse={this.toggleCollapse}
          closeCollapse={this.closeCollapse}
        />
        {collapseID && overlay}
        <main>
          <Routes currentUser={currentUser} />
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
