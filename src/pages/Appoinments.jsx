import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TakeAppoinment from "../components/TakeAppoinement/TakeAppoinment";
import GetMyAppoinments from "../components/GetMyAppoinments/GetMyAppoinments";
import { deleteApppoi, getAllApp } from "../redux/actions/appoinment";
import Button from "react-bootstrap/esm/Button";
import OneAppoinment from "../components/OneAppoinment/OneAppoinment";
import "./Appoinment.css";
const Appoinments = () => {
  const { user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    dispatch(getAllApp());
    // allAppoinments.filter(app=>app.date<today.toISOString().split('T')[0]).forEach(app=>dispatch(deleteApppoi(app._id)))
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);
  const { allAppoinments } = useSelector((state) => state.appoinmentReducer);
  // console.log("appoinments",allAppoinments)
  // console.log(appoinments)
  // useEffect(() => {
  //    dispatch(getAllApp())
  // }, [dispatch]);
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="appoinment-container">
      {user.role === "Doctor" || user.role === "Nurse" ? (
        <>
          <div className="appoinment">
            <div>
              <Button
                onClick={() => {
                  setShowAll(!showAll);
                  // dispatch(getAllApp());
                }}
                className="button"
              >
                {showAll
                  ? "see the appoinments of today"
                  : "see all appoinments"}
              </Button>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {showAll ? (
                <>
                  {allAppoinments ? (
                    allAppoinments.map((app, index) => (
                      <OneAppoinment app={app} index={index} />
                    ))
                  ) : (
                    <h4>there is no appointment</h4>
                  )}
                </>
              ) : (
                <>
                  {allAppoinments.filter(
                    (app) => app.date === today.toISOString().split("T")[0]
                  ).length > 0 ? (
                    allAppoinments
                      .filter(
                        (app) => app.date === today.toISOString().split("T")[0]
                      )
                      .map((app, index) => (
                        <OneAppoinment app={app} index={index} />
                      ))
                  ) : (
                    <h4>there is no appointment for today</h4>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="patientAppoinment">
          <div className="takeApp">
            <TakeAppoinment />
          </div>

          <br />
          <br />
          <br />
          <div className="getApp">
            {" "}
            <GetMyAppoinments />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appoinments;
