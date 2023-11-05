import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import { useEffect, useState, useRef } from "react";
import React from "react";
import axios from "axios";

function addLeadingZeros(number) {
  // Convert the number to a string
  let numberStr = number.toString();

  // Calculate the number of leading zeros required
  const zerosToAdd = 3 - numberStr.length;

  // Add leading zeros
  for (let i = 0; i < zerosToAdd; i++) {
    numberStr = '0' + numberStr;
  }

  return numberStr;
}

function formatDatetime(value) {
  const date = new Date(value);
  const formattedDate = date.toLocaleDateString(); // Adjust date formatting as needed
  const formattedTime = date.toLocaleTimeString(); // Adjust time formatting as needed
  return `${formattedDate} ${formattedTime}`;
}

function OutputMapper(type, value) {
  const stateMap = {
    "0": "No Stuttering Detected",
    "1": "Stuttering Detected",
  };
  const typeMap = {
    "000": "Interjection",
    "001": "Block",
    "010": "Repetition",
    "011": "Repetition-Block",
    "100": "Prolongation",
    "101": "Prolongation-Block",
    "110": "Prolongation-Repetition",
    "111": "Prolongation-Repetition-Block",
  };
  const severity = {
    1: "Very Mild",
    2: "Mild",
    3: "Moderate",
    4: "Severe",
    5: "Very Severe",
  };
  switch (type) {
    case "datetime":
      return formatDatetime(value);
    case "state":
      return stateMap[value];
    case "type":
      return typeMap[value];
    case "words":
      return value.join(', ');
    case "syllables":
      return value.join(', ');
    case "severity":
      return severity[value];
    case "severity percentage":
      return value;
    case "likelihood words":
      return value.join(', ')
    default:
      return 0;
  }
}

const Header = () => {
const [stutterType, setStutterType] = useState("");
const [stutterSeverity, setStutterSeverity] = useState("");
const [stutterSeverityPerc, setStutterSeverityPerc] = useState("");
const [duration, setDuration] = useState();

const url = "https://stutterai-backend-3.onrender.com"
 

useEffect(() => {
  async function fetchData() {
    const username = 'Isuru'
    try {
      const response = await axios.get(`${url}/api/word-data/${username}`);
      console.log(response)
      // Assuming response data is an object with the desired values
      const responseData = response.data;

      setStutterType(OutputMapper('type', addLeadingZeros(responseData.type)));
      setStutterSeverity(OutputMapper('severity', responseData.severity));
      setStutterSeverityPerc(OutputMapper('severity percentage', responseData.severity_percentage.toFixed(2)));
      setDuration(20);
    } catch (error) {
      // Handle errors here 
      console.error('Error fetching data:', error);
    }
  }
  fetchData(); // Call the async function

}, [stutterType, stutterSeverity, stutterSeverityPerc, duration]);

  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Type
                        </CardTitle>

                        <span className="h5 font-weight-bold mb-0">
                          {stutterType}
                        </span> 

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Severity
                        </CardTitle>

                        <span className="h5 font-weight-bold mb-0">{stutterSeverity}</span>

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Duration
                        </CardTitle>

                        <span className="h5 font-weight-bold mb-0">{duration} Minutes</span>

                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Severity Percentage
                        </CardTitle>
                        <span className="h5 font-weight-bold mb-0">{stutterSeverityPerc}%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {/* <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span> */}
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
