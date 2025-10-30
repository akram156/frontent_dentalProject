import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import "./BarreNav.css";
const BarreNav = () => {
  const { isAuth, user, isLoadAuth } = useSelector(
    (state) => state.authReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="navBar">
      <Navbar expand="lg" style={{ backgroundColor: "white" }}>
        <Container>
          <Navbar.Brand href="/" className="brand">
            SMILECARE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="link">
                Home
              </Nav.Link>
              {isAuth ? (
                <>
                  <Nav.Link href="/profile" className="link">
                    Profile
                  </Nav.Link>
                  {user.role === "Doctor" || user.role === "Nurse" ? (
                    <>
                      <Nav.Link href="appoinments" className="link">
                        Appoinments
                      </Nav.Link>
                    </>
                  ) : user.role === "Patient" ? (
                    <>
                      <Nav.Link href="appoinments" className="link">
                        My Appoinments
                      </Nav.Link>
                    </>
                  ) : (
                    <></>
                  )}
                  <Nav.Link
                    href="/"
                    className="link"
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/login" className="link">
                    LogIn
                  </Nav.Link>
                  <Nav.Link href="/register" className="link">
                    SignIn
                  </Nav.Link>
                </>
              )}
            </Nav>
            {isAuth && (
                  <img
                    src={user.url}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                      border:'0.3rem solid #0da3c5'
                    }}
                  />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarreNav;
