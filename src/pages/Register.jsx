import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import PatientRegistration from "../components/PatientRegistration/PatientRegistration";
import DoctorNurseRegistration from "../components/DoctorNurseRegestration/DoctorNurseRegistration";
import { useDispatch, useSelector } from "react-redux";
// import { FAIL, SUCCESS } from "../redux/actionType/authActionType";
const Register = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    phone: "",
    birthdate: "",
    role: "",
  });
  const [password, setPassword] = useState("");
  const handleOption = (e) => {
    setNewUser({
      ...newUser,
      role: e.target.innerText,
      name: "",
      phone: "",
      birthdate: "",
    });
    setPassword("");
  };
  const { user, success, error } = useSelector((state) => state.authReducer);
  console.log("success", success, "error", error);
  // !----------------------------------------------------------------------------
  return (
    <div className="login-container">
      <div className="login">
        <div>
          <h1 style={{ color: " #0da3c5" }}>SignIn As</h1>
        </div>
        <div className="buttons">
          <Button className="butt" onClick={handleOption}>
            Doctor
          </Button>
          {/* <Button variant="primary" onClick={handleOption}>
        Nurse
      </Button> */}
          <Button className="butt" onClick={handleOption}>
            Patient
          </Button>
        </div>
        <div>
          {newUser.role === "Patient" ? (
            <PatientRegistration newUser={newUser} setNewUser={setNewUser} />
          ) : newUser.role === "Doctor" || newUser.role === "Nurse" ? (
            <DoctorNurseRegistration
              newUser={newUser}
              setNewUser={setNewUser}
              password={password}
              setPassword={setPassword}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
