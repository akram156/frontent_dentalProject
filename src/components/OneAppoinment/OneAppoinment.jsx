import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteApppoi, getBooker } from "../../redux/actions/appoinment";
import EditAppoinment from "../editAppoinment/EditAppoinment";
import "./OneAppoinment.css";
const OneAppoinment = ({ app, index }) => {
  // console.log(app)
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  // console.log(app.bookedBy)
  // console.log("user", user);
  // console.log('id:',app.bookerBy)
  useEffect(() => {
    dispatch(getBooker(app.bookedBy));
  }, [dispatch]);
  const handleDelete = () => {
    if (window.confirm("are u sure to delete this appoinment")) {
      dispatch(deleteApppoi(app._id));
    }
  };
  const { booker } = useSelector((state) => state.appoinmentReducer);
  // console.log('booker',booker)
  const bookerinfo = booker[app.bookedBy];
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ boxShadow: "0px 0px 20px gray" }}>
            {" "}
            {(user.role === "Doctor" || user.role === "Nurse") && (
              <div
                className="oneApp"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "3rem",
                  width: "50%",
                  marginLeft: "1rem",
                }}
              >
                <div>
                  <img
                    className="bookerProfile"
                    src={bookerinfo?.url || ""}
                    alt=""
                    style={{ height: "65px", width: 65, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  {" "}
                  <h5 className="bookerName">
                    {bookerinfo?.name.toUpperCase() || ""}
                  </h5>
                  <h6 className="bookerPhone">{bookerinfo?.phone || ""}</h6>
                </div>
                {/* <br /> */}
                {/* <h3>Booked BY:</h3> */}
              </div>
            )}
            {user.role === "Patient" && (
              <div className="appoinmentHeaderPatient">
                <h6 className="appoinmentHeaderTextPatient">
                 # Appointment {index + 1}
                </h6>
              </div>
            )}
          </Accordion.Header>
          <Accordion.Body>
            <h3 className="appDate" style={{ color: "#0d99c7" }}>
              The date of the appoinment
            </h3>
            <p className="date">{app.date}</p>
            <h4 className="appTime" style={{ color: "#0d99c7" }}>
              The time of the appoinment
            </h4>
            <p className="time">{app.time}</p>
            <div
              style={{ display: "flex", gap: "2rem", justifyContent: "center" }}
            >
              {/* !this is for editing the appoinment */}
              {user.role === "Patient" && <EditAppoinment app={app} />}
              {/* !this is for deleting the appoinment */}
              <Button onClick={handleDelete} className="button">
                {user.role === "Patient"
                  ? "delete your appoinment"
                  : "delete this appoinment"}
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default OneAppoinment;
