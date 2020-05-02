import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../JS/actions/authActions";
class Header extends Component {
  render() {
    return (
      <div>
        
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Contact</Navbar.Brand>
          <Link to="/contact" style={{ color: "grey", margin: "20px" }}>
                ContactList
              </Link>
          {!this.props.token ? (
            <>
              <Nav className="mr-auto"></Nav>
              <Nav.Link href="/login">Login</Nav.Link>
            </>
          ) : (
            <>
              
              <Link to="/add_contact" style={{ color: "grey", margin: "20px" }}>
                Add annance
              </Link>
              <Nav className="mr-auto"></Nav>
              <Nav.Link href="/annance">
               My annance
              </Nav.Link>{" "}
              <Nav.Link href="#" onClick={this.props.logout}>
                Lougout{" "}
              </Nav.Link>
            </>
          )}
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

export default connect(mapStateToProps, { logout })(Header);
