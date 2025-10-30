import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateClinicInfos } from "../../redux/actions/clinicActions";

const EditClinicInfo = () => {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => state.authReducer);
  const { clinicInfo } = useSelector((state) => state.clinicReducer);
  // console.log(clinicInfo);
  // console.log(clinicInfo)
  const handleClose = () => {
    setShow(false);
    setClinic({
      name: clinicInfo.name,
      phone: clinicInfo.phone,
      adress: clinicInfo.adress,
      workingHours: {
        start: clinicInfo.workingHours.start,
        end: clinicInfo.workingHours.end,
      },
      password: "",
      doctor: user._id,
    });
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  
  // const [clinic, setClinic] = useState({
  //   name: "",
  //   phone:"",
  //   adress:"",
  //   workingHours: {
  //     start:"",
  //     end:"",
  //   },
  //   password: "",
  //   doctor: user._id,
  // });
  // const [clinic, setClinic] = useState(clinicInfo);
  const [clinic, setClinic] = useState({
    name: "",
    phone: "",
    adress: "",
    workingHours: { start: "", end: "" },
    password: "",
    doctor: "",
  });

  useEffect(() => {
    if (clinicInfo && user) {
      setClinic({
        name: clinicInfo.name || "",
        phone: clinicInfo.phone || "",
        adress: clinicInfo.adress || "",
        workingHours: {
          start: clinicInfo.workingHours?.start || "",
          end: clinicInfo.workingHours?.end || "",
        },
        password: "",
        doctor: user._id || "",
      });
    }
  }, [clinicInfo, user]);
  // console.log('adress',clinic.adress)
  // console.log(clinic)
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateClinicInfos(clinic));
    // console.log('function running')
    handleClose();
  };
  return (
    <div>
      <>
        <Button className="button" onClick={handleShow}>
          Edit clinic information
        </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            {/* <Modal.Title>Edit Clinic Informations</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <Form className="addNurse">
              <Form.Group className="mb-3">
                <Form.Label>Clinic Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your clinic name"
                  name="name"
                  value={clinic.name}
                  onChange={(e) =>
                    setClinic({ ...clinic, name: e.target.value })
                  }
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the phone number used in ur clinic"
                  name="phone"
                  value={clinic.phone}
                  onChange={(e) =>
                    setClinic({ ...clinic, phone: e.target.value })
                  }
                  className="input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your adress"
                  name="adress"
                  value={clinic.adress}
                  onChange={(e) =>
                    setClinic({ ...clinic, adress: e.target.value })
                  }
                  className="input"
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Working Hours</Form.Label>
                <br />
                <Form.Label>Start</Form.Label>
                <Form.Control
                  type="time"
                  // placeholder="Enter your working hours"
                  name="start"
                  value={clinic.workingHours.start}
                  // value={nurse.birthdate}
                  onChange={(e) =>
                    setClinic({
                      ...clinic,
                      workingHours: {
                        ...clinic.workingHours,
                        start: e.target.value,
                      },
                    })
                  }
                  className="input"
                  // onChange={handleChange}
                />
                <Form.Label>End</Form.Label>

                <Form.Control
                  type="time"
                  // placeholder="Enter your birthdate"
                  name="end"
                  value={clinic.workingHours.end}
                  // value={nurse.birthdate}
                  onChange={(e) =>
                    setClinic({
                      ...clinic,
                      workingHours: {
                        ...clinic.workingHours,
                        end: e.target.value,
                      },
                    })
                  }
                  className="input"
                  // value={nurse.birthdate}
                  // onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter new password"
                  name="password"
                  value={clinic.password}
                  onChange={(e) =>
                    setClinic({ ...clinic, password: e.target.value })
                  }
                  className="input"
                  // value={nurse.birthdate}
                  // onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="bu" onClick={handleClose}>
              Close
            </Button>
            <Button className="butt" onClick={handleUpdate}>
              update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default EditClinicInfo;
