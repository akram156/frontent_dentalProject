import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/authAction";
const PatientLogin = ({ newUser, setNewUser }) => {
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, isAuth } = useSelector((state) => state.authReducer);
  const { error } = useSelector((state) => state.authReducer);
  const { errorClinic, isDoctor } = useSelector((state) => state.clinicReducer);
  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, isDoctor, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(newUser));
  };
  console.log(isAuth);
  console.log(isDoctor);
  console.log(newUser);
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
        <Button type="submit" className="butt">
          Submit form
        </Button>
        <p style={{ margin: "1rem" }}>
          if you do not have account <a href="/register">   signIn</a>
        </p>
      </Form>
    </div>
  );
};

export default PatientLogin;
