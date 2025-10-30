import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
import { checkClinicOwner } from "../../redux/actions/clinicActions";
import { useNavigate } from "react-router-dom";
import "./DoctorLogin.css";
import Loading from "../Loading/Loading";
const DoctorLogin = ({ newUser, setNewUser, password, setPassword }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const { success, isAuth } = useSelector((state) => state.authReducer);
  const { error } = useSelector((state) => state.authReducer);
  const { errorClinic, isDoctor } = useSelector((state) => state.clinicReducer);
  const { user } = useSelector((state) => state.authReducer);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth && isDoctor) {
      navigate("/profile");
    }
  }, [isAuth, isDoctor, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = await dispatch(checkClinicOwner(password));
    if (check) {
      await dispatch(login(newUser));
    }
  };
  // console.log("success",success);
  // console.log("error",error);
  // console.log("errorClinic",errorClinic);
  // console.log("doctor", isDoctor);
  // console.log("auth", isAuth);
  // console.log(newUser)
  // console.log(password)
  // console.log(user);
  const {isLoadAuth}=useSelector(state=>state.authReducer)
  // console.log('isload',isLoadAuth)
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
            className="input"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your birthdate"
            name="birthdate"
            value={newUser.birthdate}
            onChange={handleChange}
            className="input"
          />
        </Form.Group>
        <Form.Group className="mb-3" style={{ position: "relative" }}>
          <Form.Label>Password of {newUser.role}</Form.Label>
          <Form.Control
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <div>
            {!show ? (
              <i
                class="fa-solid fa-eye"
                style={{
                  color: "#0da3c5",
                  position: "absolute",
                  top: "2.7rem",
                  right: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShow(!show);
                }}
              ></i>
            ) : (
              <i
                class="fa-solid fa-eye-slash"
                style={{
                  color: "#0da3c5",
                  position: "absolute",
                  top: "2.7rem",
                  right: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShow(!show);
                }}
              ></i>
            )}
          </div>
        </Form.Group>
        <Button type="submit" className="butt">
          Submit form
        </Button>
          {/* {isLoadAuth&&<Loading/>} */}
        <p style={{margin:'1rem'}}>if you do not have account <a href="/register">signIn</a></p>
      </Form>
    </div>
  );
};

export default DoctorLogin;
