import React, { use, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { checkClinicOwner } from "../../redux/actions/clinicActions";
import { useNavigate } from "react-router-dom";

const DoctorNurseRegistration = ({
  newUser,
  setNewUser,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();
  const { isDoctor } = useSelector((state) => state.clinicReducer);
  const { isAuth } = useSelector((state) => state.authReducer);
  const { success, error } = useSelector((state) => state.authReducer);
  const { successClinic } = useSelector((state) => state.clinicReducer);
  const { errorClinic } = useSelector((state) => state.clinicReducer);
  const [show, setShow] = useState(true);
  const gsuccess = [].concat(success, successClinic);

  console.log("success", gsuccess);

  console.log("error", error);
  console.log("errorClinic", errorClinic);

  useEffect(() => {
    if (isAuth && isDoctor) {
      navigate("/profile");
    }
  }, [isAuth, isDoctor, navigate]);
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = await dispatch(checkClinicOwner(password));
    if (check) {
      await dispatch(register(newUser));
    }
  };
  console.log("isAuth", isAuth, "isDoctor", isDoctor);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            className="input"
          />
        </Form.Group>
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
        <Button className="butt" type="submit">
          Submit form
        </Button>
        <p style={{ marginTop: "1.5rem" }}>
          if you already have an account <a href="/login">login</a>
        </p>
      </Form>
    </div>
  );
};

export default DoctorNurseRegistration;
