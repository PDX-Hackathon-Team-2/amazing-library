import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import _ from "lodash";

function HomePage(props) {
  const options = ["Library", "Students", "Action Items"];
  return (
    <>
      <h1>Amazing Library</h1>
      <SearchBar></SearchBar>
      <Button variant="primary" size="lg" block>
      {options[0]}
      </Button>
      <Button variant="primary" size="lg" block>
      {options[1]}
      </Button>
      <Button variant="primary" size="lg" block>
      {options[2]}
      </Button>
    </>
  );
}

export default HomePage;
