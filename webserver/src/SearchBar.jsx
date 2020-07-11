import React from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

function SearchBar(props) {
  return (
    <Form inline>
      <Form.Label htmlFor="searchBar" srOnly>
        Search
      </Form.Label>
      <Form.Control
        className="mb-2 mr-sm-2"
        id="searchBar"
        placeholder="Search"
      />
  
      <Button type="submit" className="mb-2">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
