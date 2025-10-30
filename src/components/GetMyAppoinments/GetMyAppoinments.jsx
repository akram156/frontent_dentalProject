import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { getMyAppoinments } from "../../redux/actions/appoinment";
import OneAppoinment from "../OneAppoinment/OneAppoinment";
const GetMyAppoinments = () => {
  const [get, setGet] = useState(false);
  // const dispatch = useDispatch();
  const { appoinments } = useSelector((state) => state.appoinmentReducer);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMyAppoinments());
  // }, [dispatch]);
  // console.log('appoinments',appoinments)
  return (
    <div style={{backgroundColor:'white',padding:'1rem',borderRadius:'15px',display:'flex',flexDirection:'column',gap:'1rem'}}>
      <div>
        <Button
        className="button"
          onClick={() => {
            setGet(!get);
            // dispatch(getMyAppoinments());
          }}
        >
          {!get ? "See My Appoinments" : "hide my appoinments"}
        </Button>
      </div>

      {get && (
        <div>
          {appoinments.map((app, index) => (
            <OneAppoinment app={app} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GetMyAppoinments;
