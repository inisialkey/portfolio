import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";


function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.isPlayStore && (
          <Button variant="primary" href={props.playStoreLink} target="_blank" style={{ marginRight: "20px" }}>
            <IoLogoGooglePlaystore /> &nbsp;
            Play Store
          </Button>
        )}
        {props.isAppStore && (
          <Button variant="primary" href={props.appStoreLink} target="_blank">
            <FaAppStoreIos /> &nbsp;
            App Store
          </Button>
        )}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
