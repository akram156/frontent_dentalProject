import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editProfilefun } from "../../redux/actions/authAction";
import "./editProfile.css";
const EditProfile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  // console.log(user);
  const [editProfile, setEditProfile] = useState({
    name: "",
    phone: "",
    birthdate: "",
  });
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (user.name && user.phone && user.birthdate) {
      setEditProfile({
        ...editProfile,
        name: user.name,
        phone: user.phone,
        birthdate: user.birthdate,
        // url:user.url
      });
    }
  }, [user]);
  console.log(editProfile);
  const handleChanges = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", editProfile.name);
    data.append("phone", editProfile.phone);
    data.append("birthdate", editProfile.birthdate);
    if (file) {
      data.append("url", file);
    }
    dispatch(editProfilefun(data, user._id));
    handleClose();
  };
  // const [file, setFile] = useState(null);
  // const [localUrl, setLocalUrl] = useState(null);

  // console.log(editProfile)
  // console.log(file)
  // console.log(localUrl);
  // console.log(editProfile)
  return (
    <div>
      <Button className="button" onClick={handleShow}>
        Edit Your Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="edit-body">
          {" "}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={editProfile.name}
                onChange={handleChanges}
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter phone"
                name="phone"
                value={editProfile.phone}
                onChange={handleChanges}
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>birthdate</Form.Label>
              <Form.Control
                type="date"
                placeholder="enter birthdte"
                name="birthdate"
                value={editProfile.birthdate}
                onChange={handleChanges}
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>profile pic</Form.Label>
              <Form.Control
                type="file"
                placeholder="enter birthdte"
                name="url"
                // value={editProfile.url}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                className="input"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='bu' onClick={handleClose}>Cancel</Button>
          <Button className="butt" onClick={handleSubmit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProfile;
