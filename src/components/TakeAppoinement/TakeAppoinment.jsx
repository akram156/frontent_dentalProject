import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { takeAppoinment } from "../../redux/actions/appoinment";
// utils.js or top of your component file
function generateHalfHourSlotsFromStrings(startTime, endTime) {
  const slots = [];

  const timeToMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const minutesToTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  let current = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);

  current = Math.ceil(current / 30) * 30;

  while (current < end) {
    slots.push(minutesToTime(current));
    current += 30;
  }

  return slots;
}

const TakeAppoinment = () => {
  const [take, setTake] = useState(false);
  const { clinicInfo } = useSelector((state) => state.clinicReducer);
  // var start = clinicInfo?.workingHours?.start || "";
  // var end = clinicInfo?.workingHours?.end || "";
  const { user } = useSelector((state) => state.authReducer);
  // console.log(user._id)
  const [slot, setSlot] = useState([]);
  const [appoinment, setAppoinment] = useState({
    bookedBy: "",
    date: "",
    time: "",
  });
  const handleOption = (e) => {
    e.preventDefault();
    setAppoinment({
      ...appoinment,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (clinicInfo?.workingHours?.start && clinicInfo?.workingHours?.end) {
      const generatedSlots = generateHalfHourSlotsFromStrings(
        clinicInfo.workingHours.start,
        clinicInfo.workingHours.end
      );
      setSlot(generatedSlots);
    }
    if (user?._id) {
      setAppoinment((prev) => ({ ...prev, bookedBy: user._id }));
    }
  }, [clinicInfo, user]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(takeAppoinment(appoinment));
    // dispatch(getMyAppoinments())
  };
  const { success } = useSelector((state) => state.appoinmentReducer);
  const { fail } = useSelector((state) => state.appoinmentReducer);
  // console.log("success",success)
  // console.log("fail",fail)
  return (
    <div style={{width:'100%'}}>
      <div>
        <Button onClick={() => setTake(!take)} className="button">
          {take ? "hide the form" : "take Appoinment"}
        </Button>
      </div>
      <br />
      {take && (
        <div style={{width:'100%'}}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="the date of ur appoinment"
                name="date"
                value={appoinment.date}
                onChange={handleOption}
                className="input"
                style={{width:'100%'}}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Select suitable time</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="time"
                // value={appoinment.date}
                value={appoinment.time}
                onChange={handleOption}
                className="input"
              >
                {" "}
                <option>choose ur suitable time</option>&&
                {slot.map(
                  (slt, index) =>
                    index < slot.length - 1 && (
                      <option
                        key={index}
                        value={`from ${slot[index]} to ${slot[index + 1]}`}
                      >
                        from {slot[index]} to {slot[index + 1]}
                      </option>
                    )
                )}
              </Form.Select>
            </Form.Group>
            <Button className="button" type="submit" onClick={handleSubmit}>
              confirm the Appoinment
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default TakeAppoinment;
