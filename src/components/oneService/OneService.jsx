import React from "react";
import Card from "react-bootstrap/Card";
import './OneService.css'
const OneService = ({ service }) => {
  return (
    <div style={{ display: "flex" }}>
      <Card
      className="card"
   
      >
        <Card.Img
          variant="top"
          src={service.url}
          style={{ padding: "1.5rem", borderRadius: "2rem" }}
        />
        <Card.Body>
          <Card.Title
          className="title"
            style={{
              fontWeight: "600",
              fontSize: "x-large",
              position: "relative",
            }}
          >
            <div
            className="icon-container"
              style={{
                position: "absolute",
                top: "-4.5rem",
                right: "35%",
                backgroundColor: "#0da3c5",
                height:'4rem',
                width:'4rem',
                borderRadius:'50%',
                display:"flex",
                justifyContent:"center",
                alignContent:"center",
                alignItems:"center",
              }}
            >
              <i
                class="fa-solid fa-user-doctor fa-xl"
                style={{
                  color: "white",
                }}
              ></i>
            </div>
            {service.title}
          </Card.Title>
          <Card.Text style={{ color: "grey" }} className="description">{service.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OneService;
