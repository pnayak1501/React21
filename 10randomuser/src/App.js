import React, {useState, useEffect} from "react"
import {Container, Row, Col, Button} from "reactstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyCard from "./MyCard"

import Axios from "axios"

function App() {
  const [details, setDetails] = useState({})

const fetchDetails = async() =>{
  const response = await Axios.get('https://randomuser.me/api/')
  const data = response.data
  console.log("RESPONSE: ", data);

  const details = data.results[0]
  setDetails(details) 
};

useEffect(() =>{
  fetchDetails()
}, [])

  return (
    <Container fluid className="p-4 bg-priary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
