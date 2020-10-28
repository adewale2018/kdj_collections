import React, { Component } from "react";
import MainNav from "./components/MainNav";
import Routes from "./Routes";
import Footer from "./pages/Footer";


class App extends Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collID) => () => {
    const { collapseID } = this.state;
    window.scrollTo(0, 0);
    collapseID === collID && this.setState({ collapseID: "" });
  };

  render() {
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
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
