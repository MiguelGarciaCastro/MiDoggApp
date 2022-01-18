 // child component of Gallery component handles photo rendering logic
import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ singleProject }) => {
  return (
//     <Card style={{ width: '18rem' }}>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>


    <Card
      style={{
        width: "20rem",
        margin: "20px 50px 20px 10px", backgroundColor: "#add8e6" 
      }}
      key={singleProject.title} className="col-3"
    >
    
      <Card.Title style={{ margin: "15px", fontSize: "27px", color: "#094067"}}>
        {singleProject.title}
      </Card.Title>
      <Card.Text className="mb-2 text-muted" style={{ fontSize: "15px", margin: "20px 0px 20px 10px" }}>{singleProject.summary}</Card.Text>
      <Card.Img
        variant="top"
        src={singleProject.image}
        alt={singleProject.title}
        style={{ position: "relative" }}
      />
       {/* <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>

        <div
          className="flex-row card card-body"
          style={{
            width: "35rem",
            marginBottom: "2rem",
            backgroundColor: "#a2c7e5",
            fontSize: "20px", display: "flex", flexDirection: "row"
          }}
        >
          <h1>{singleProject.title}</h1>
          <div>{singleProject.summary}</div>
          <a href={singleProject.deployedLink}>
            {" "}
            <img
              src={singleProject.image}
              alt={singleProject.title}
              className="img-thumbnail mx-1"
            />
            <FaExternalLinkAlt />
          </a>
          <a href={singleProject.github} className="card-text">
            <FaGithub />
          </a>
          <div>Built with: {singleProject.technologies}</div>
        </div>
      </div>  */}
    
   </Card>
  );
};

export default Projects;
