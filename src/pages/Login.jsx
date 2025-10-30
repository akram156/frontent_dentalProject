import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PatientLogin from "../components/PatientLogin/PatientLogin";
import DoctorLogin from "../components/DoctorLogin/DoctorLogin";
import "./Login.css";
import { useSelector } from "react-redux";
const Login = () => {
  const [newUser, setNewUser] = useState({
    phone: "",
    birthdate: "",
    role: "",
  });
  const [password, setPassword] = useState("");
  const handleOption = (e) => {
    setNewUser({
      ...newUser,
      role: e.target.innerText,
      phone: "",
      birthdate: "",
    });
    setPassword("");
  };
  const {isLoadAuth}=useSelector(state=>state.authReducer)
  // console.log('isload',isLoadAuth)
  // console.log(newUser.role)
  return (
    <div className="login-container">
      <div className="login">
        <div>
          <h1 style={{color:' #0da3c5'}}>Login As</h1>
        </div>
        <div className="buttons">
          <Button onClick={handleOption} className="butt">
            Doctor
          </Button>{" "}
          <Button onClick={handleOption} className="butt">
            Patient
          </Button>
          <Button onClick={handleOption} className="butt">
            Nurse
          </Button>
        </div>
        <div>
          {newUser.role === "Patient" ? (
            <PatientLogin newUser={newUser} setNewUser={setNewUser} />
          ) : newUser.role === "Doctor" ? (
            <DoctorLogin
              newUser={newUser}
              setNewUser={setNewUser}
              password={password}
              setPassword={setPassword}
            />
          ) : newUser.role === "Nurse" ? (
            <DoctorLogin
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

export default Login;
