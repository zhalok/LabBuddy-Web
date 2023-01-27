import React from "react";
import Form from "react-bootstrap/Form";
export default function FromSelect(props) {
  return (
    <div>
      <Form.Select
        aria-label="Default select example"
        // onChange={(e) => e.target.value}
        onChange={(event) => {
          //   console.log(e.target.value);
          props.setType(event.target.value);
        }}
      >
        <option>Select User Type</option>
        {props.items.map((e) => {
          return <option value={e}>{e}</option>;
        })}
        {/* <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option> */}
      </Form.Select>
    </div>
  );
}
