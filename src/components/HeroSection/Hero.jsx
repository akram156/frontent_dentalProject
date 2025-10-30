import React from "react";
import "./Hero.css";
const Hero = ({ clinicInfo, clinicOwner, isAuth }) => {
  return (
    <div>
      <div className="hero-fluid" style={{ height: "100%" }}>
        <div className="image-fluid">
          <img
            src="https://images.piclumen.com/normal/20251024/07/d63a497aff9b43769ba18d6da0fc88b5.webp"
            alt=""
            width={"100%"}
            className="image"
          />
          <div className="clinicInfo-fluid">
            <div className="clinicInfo">
              {clinicInfo.name ? (
                <h1>Welcome to {clinicInfo.name.toUpperCase()}</h1>
              ) : (
                ""
              )}
              <div>
                {" "}
                <h2>
                  Your <span>Health</span>, Our Priority Book Your Appointment
                  in Minutes
                </h2>
                <br />
                <h4>Easily schedule a visit with our trusted doctor</h4>
              </div>
              <a href={isAuth ? "appoinments" : "login"}>
                {" "}
                <button className="button">Take Appointment</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutClinic">
        <div>
          <h1 style={{ color: "#0da3c5" }}>About {clinicInfo.name}</h1>
        </div>
        <div className="clinic">
          <div className="image-container">
            <img
              src="https://i.pinimg.com/736x/0a/56/ea/0a56eaba0b8cb46a2757c482dc2e8a56.jpg"
              alt=""
            />
          </div>
          <div className="info-container">
            <div className="clinic-para">
              <p>
                At Clinic de Reda, we are dedicated to providing professional
                medical care with compassion and expertise. Our goal is to make
                your healthcare experience stress-free and accessible.
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
                    style={{ display: "flex", justifyContent: "space-around" }}
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
                      <strong style={{ color: "#0da3c5" }}>{"  "}End: </strong>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
