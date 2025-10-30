import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
const PatientRegistration = ({ newUser, setNewUser }) => {
  // const {user,success,error} = useSelector((state) => state.authReducer);
  const {isAuth}=useSelector(state=>state.authReducer)
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    await dispatch(register(newUser));
  };
useEffect(()=>{
  isAuth&&navigate('/profile')
},[isAuth,navigate])

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
        <Button className="butt" type="submit">Submit form</Button>
        <p style={{margin:'1.5rem'}}>if you already have an account  <a href="/login">login</a></p>
      </Form>
    </div>
  );
};

export default PatientRegistration;
