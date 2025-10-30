import React from "react";
import { useSelector } from "react-redux";
import "./CLinicOwnerInfo.css";
const ClinicOwnerInfo = () => {
  const { clinicOwner } = useSelector((state) => state.clinicReducer);
  return (
    <div>
      <div className="main">
        <div>
          <h1 style={{color:'#0da3c5'}}>Our Doctor</h1>
        </div>
        <div className="container-fluid">
          <div className="doctor">
            <div
            className="image-cont"
              style={{
                // padding: "1rem",
                backgroundColor: "#0da3c5",
                borderRadius: "50%",
                height: "13rem",
                width: "13rem",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                boxShadow:'0px 0px 10px '
              }}
            >
              <img
                src={clinicOwner.url}
                alt=""
                style={{ height: "12rem", width: "12rem", borderRadius: "50%" }}
              />
              
            </div>
            <br />
            <h3 style={{color:'#0da3c5'}}>{clinicOwner.name}</h3>
            <h4>Dentist</h4>
            <p style={{color:'grey' ,fontWeight:'400'}}>
              Dr. {clinicOwner.name} believes every smile deserves gentle care.
              She’s dedicated to making every visit comfortable, friendly, and
              stress-free for all ages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicOwnerInfo;
