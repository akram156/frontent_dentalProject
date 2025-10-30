import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { editApp } from "../../redux/actions/appoinment";
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
const EditAppoinment = ({app}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { clinicInfo } = useSelector((state) => state.clinicReducer);
  const [slot, setSlot] = useState([]);
  const [appInfo, setAppInfo] = useState({
    date:app.date,
    time: app.time,
  });
  const handleChanges = (e) => {
    // e.preventDefault();
    setAppInfo({ ...appInfo, [e.target.name]: e.target.value });
  };
  // console.log(appInfo);
  // console.log(slot)
  useEffect(() => {
    if (clinicInfo.workingHours.start && clinicInfo.workingHours.end) {
      setSlot(
        generateHalfHourSlotsFromStrings(
          clinicInfo.workingHours.start,
          clinicInfo.workingHours.end
        )
      );
    }
  }, []);
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(editApp(appInfo,app._id))
    handleClose()
  }
  // console.log(slot);
  // console.log("clinicInfo",clinicInfo)
  return (
    <div>
      <Button className="button" onClick={handleShow}>
        Edit Appoinment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <Form className="addNurse">
            <Form.Group className="mb-3">
              <Form.Label>edit date</Form.Label>
              <Form.Control
                type="date"
                placeholder="edit the date of your appoinment"
                name="date"
                value={appInfo.date}
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>enter the time </Form.Label>
              <Form.Select
                placeholder="edit the time of your appoinment"
                name="time"
                value={appInfo.time}
                onChange={handleChanges}
              >
                <option value="">select a time for ur appoinment</option>
                {slot.map(
                  (slt, index) =>
                    index < slot.length - 1 && (
                      <option key={index}>
                        from {slot[index]} to {slot[index + 1]}
                      </option>
                    )
                )}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bu" onClick={handleClose}>
            Close
          </Button>
          <Button className="butt" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditAppoinment;
