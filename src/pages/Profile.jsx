import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currnet } from "../redux/actions/authAction";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddNurse from "../components/addNurse/AddNurse";
import EditClinicInfo from "../components/editClinicInfo/EditClinicInfo";
import EditProfile from "../components/editProfile/EditProfile";
import "./profile.css";
const Profile = () => {
  const { user } = useSelector((state) => state.authReducer);
  // console.log("user", user);
  // useEffect(()=>{
  //   const {user} =useSelector(state=>state.authRe)
  // },[])
  // console.log("user", user);
  const { clinicInfo } = useSelector((state) => state.clinicReducer);

  // useEffect(() => {
  //   if (clinicInfo && user) {
  //     setClinic({
  //       name: clinicInfo.name || "",
  //       phone: clinicInfo.phone || "",
  //       adress: clinicInfo.adress || "",
  //       workingHours: {
  //         start: clinicInfo.workingHours?.start || "",
  //         end: clinicInfo.workingHours?.end || "",
  //       },
  //       password: "",
  //       doctor: user._id || "",
  //     });
  //   }
  // }, [clinicInfo, user]);
  return (
    <div >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "3rem",
          minHeight:user.role==='Patient'&&"70vh",
          alignContent:user.role==='Patient'&&"center",
          justifyContent:user.role==='Patient'&&"center",
        }}
      >
        {" "}
        {/* {user.role === "Doctor" && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AddNurse /> {"  "}
            <EditClinicInfo />
          </div>
        )} */}
        {user.role==='Patient'&&<h1 className="patientHeader">Welcome To our CLinic</h1>}
        <div
          className="container-fluid"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <div className="profile-card">
            <div className="profile">
              <img
                src={user.url}
                alt=""
                height={250}
                width={250}
                className="profile-image"
                style={{
                  borderRadius: "50%",
                  border: "5px solid #0da3c5",
                  boxShadow: "0px 0px 10px gray",
                }}
              />
              <div className="info">
                <h2 style={{ color: "#0da3c5" }} className="name">
                  {user.name.toUpperCase()}
                </h2>
                <br />
                <h4 className="role">{user.role}</h4>
                <h4 className="phone">Phone : {user.phone}</h4>
                <br />
                <EditProfile />
              </div>
            </div>
            <div>
              <img
                src="/tooth2.png"
                alt=""
                height={300}
                width={300}
                className="imag"
                // style={{border:'1px solid'}}
                // style={{textShadow:"0px 0px 10px gray"}}
              />
            </div>
          </div>
          {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

          {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.url} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Title>{user.role}</Card.Title>
              <Card.Text>{user.phone}</Card.Text>
              <EditProfile />
            </Card.Body>
          </Card> */}
        </div>
      </div>
      {user.role === "Doctor" && (
        <div className="aboutClinic">
          <div>
            <h1 style={{ color: "#0da3c5" }}>
              See And Edit Your Clinic Information
            </h1>
          </div>
          <div className="clinic">
            {/* <div className="image-container">
                <img
                  src="https://i.pinimg.com/736x/0a/56/ea/0a56eaba0b8cb46a2757c482dc2e8a56.jpg"
                  alt=""
                />
              </div> */}
            <div className="information-container">
              <div className="second-backgound">
                <div className="clinic-para">
                  <p>
                    At Clinic de Reda, we are dedicated to providing
                    professional medical care with compassion and expertise. Our
                    goal is to make your healthcare experience stress-free and
                    accessible.
                  </p>
                </div>

                <div class="clinic-contact">
                  <p>
                    <strong style={{ color: "#0da3c5" }}>Address: </strong>
                    {clinicInfo.adress}
                  </p>
                  <p>
                    <strong style={{ color: "#0da3c5" }}>Phone: </strong>+213{" "}
                    {clinicInfo.phone}
                  </p>
                </div>
                <div className="workingHours">
                  <dl>
                    <p>
                      <dt style={{ color: "#0da3c5" }}>Working Hours:</dt>
                    </p>

                    <dd>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div>
                          {" "}
                          <strong style={{ color: "#0da3c5" }}>Start: </strong>
                          {clinicInfo?.workingHours?.start ? (
                            <span>{clinicInfo.workingHours.start}</span>
                          ) : (
                            <></>
                          )}
                        </div>

                        {"     "}
                        <div>
                          {" "}
                          <strong style={{ color: "#0da3c5" }}>
                            {"  "}End:{" "}
                          </strong>
                          {clinicInfo?.workingHours?.end ? (
                            <span>{clinicInfo.workingHours.end}</span>
                          ) : (
                            <></>
                          )}
                        </div>
                      </p>
                    </dd>
                  </dl>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <AddNurse /> {"  "}
                  <EditClinicInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
