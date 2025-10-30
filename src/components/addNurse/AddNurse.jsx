import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { addNurse } from "../../redux/actions/clinicActions";
import "./AddNurse.css";
const AddNurse = () => {
  // const {error}=useSelector(state=>state.clinicReducer)
  // console.log(error)
  const [nurse, setNurse] = useState({
    role: "Nurse",
    name: "",
    phone: "",
    birthdate: "",
  });
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setNurse({ ...nurse, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (dispatch(addNurse(nurse))) {
      console.log("nurse added successfuly");
    } else {
      console.log("can not add nurse");
    }
    setNurse({
      role: "Nurse",
      name: "",
      phone: "",
      birthdate: "",
    });
    handleClose();
  };
  // console.log(nurse)

  return (
    <div className="addNurse">
      
        <Button className='button' onClick={handleShow}>
          Add Nurse
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Add your nurses from here</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>

          <Form className="addNurse">
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={nurse.name}
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
                value={nurse.phone}
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
                value={nurse.birthdate}
                onChange={handleChange}
                className="input"
              />
            </Form.Group>
          </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button className="bu" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="butt" onClick={handleSubmit}>
              Add Nurse
            </Button>
          </Modal.Footer>
        </Modal>
    
    </div>
  );
};

export default AddNurse;
