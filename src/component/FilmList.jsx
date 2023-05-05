import React from "react";
import Card from "react-bootstrap/Card";


const FilmList = ({ image, title, desc , rate }) => {
  return (
    <>
      <div className="card_body">
        <Card className="mycard" style={{ width: "16rem" }}>
          <Card.Img variant="top" height={200} src={image} />
          <Card.Body style={{ height: "10rem" }}>
            <Card.Title
              style={({ textAlign: "center" }, { textTransform: "capitalize" })}
            >
              {title}
            </Card.Title>
            <Card.Text
              style={({ textAlign: "center" }, { textTransform: "capitalize" } , {marginTop: "10px"})}
            >
              {" "}
              {desc}
            </Card.Text>
            <div className="rate">
              <p className="rate_number">{rate}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default FilmList;
