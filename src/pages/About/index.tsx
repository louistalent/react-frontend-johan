import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import stylesheets
import "./about.scss";

// import sub components
import TopMenuBar from "../../components/TopMenuBar";

import img1 from "../../assets/main/about-1.png";
import useStore from "../../useStore";

import { Helmet } from "react-helmet";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const About = () => {
  const { T, update } = useStore();
  const [show, setShow] = useState(false);
  const [mHeader, setMHeader] = useState<any>("Cookie Policy");
  const [mContent, setMContent] = useState<any>("By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.");
  const handleClose = () => setShow(false);
  const handleShow = (str : any) => {
    setShow(true)
    
  };
  
  
  return (
    <>
      <Helmet>
        <title>
          {T("title.about")}
        </title>
        <meta name="title" content={T("title.about")} />
        <meta
          name="description"
          content={T("description.about")}
        />
        <meta
          name="keywords"
          content={T("keyword.common")}
        />
      </Helmet>
      <div className="my-modal">
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {mHeader}
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {mContent}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="xl">
            <TopMenuBar />
            <div className="about">
              <h1>{T("about.header")}</h1>
              <Row className="about-row">
                <Col className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
                    <h2>{T("about.header2")}</h2>
                    <p>{T("about.header3")}</p>
                    <p>{T("about.content")}</p>
                    <p>{T("about.name")}</p>
                    <p>{T("about.addr1")}</p>
                    <p>{T("about.addr2")}</p>
                    <p>{T("about.addr3")}</p>
                    <p>{T("about.phone")}</p>
                    <p>{T("about.email")}</p>
                    <div className="bottom-links">
                      <div><button onClick={() => handleShow('terms')}>{T("about.terms")}</button></div>
                      <div><button onClick={() => handleShow('terms')}>{T("about.cookie")}</button></div>
                      <div><button onClick={() => handleShow('terms')}>{T("about.privacy")}</button></div>
                    </div>
                </Col>
                <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
                  <Row>
                    <img
                      src={img1}
                      width="250px"
                      height="350px"
                      alt="about label"
                    ></img>
                  </Row>
                  <Row></Row>
                </Col>
              </Row>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </>
  );
};

export default About;
