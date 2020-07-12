import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import _ from "lodash";

function LibraryPage(options) {


  let buttons = [];
  for (const option in options) {
    buttons.push(
      <Button variant="primary" size="lg" block>
        {option}
      </Button>
    );
  }

  return (
    <>
      <h1>Books</h1>
      {buttons}
    </>
  );
}

export default LibraryPage;
