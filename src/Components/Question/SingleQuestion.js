import React from "react";
import Radio from "@mui/material/Radio";

export default function SingleQuestion(props) {
  const [selectedValue, setSelectedValue] = React.useState("e");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <div className="w-100 mt-4">
        <div className="d-flex p-3 q-bg-top text-light rounded-top">
          <p className="bg-light text-dark rounded-circle px-2 py-1 me-3 my-auto">
            0{props.idx + 1}{" "}
          </p>
          <p className="my-auto"> {props.question.statement} </p>
        </div>
        <div
          className="p-3 q-body text-light rounded-bottom"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div>
            <Radio
              {...controlProps("a")}
              color="primary"
              className="text-light"
            />{" "}
            {props.question.option1}
          </div>
          <div>
            <Radio
              {...controlProps("b")}
              color="default"
              className="text-light"
            />{" "}
            {props.question.option2}
          </div>
          <div>
            <Radio
              {...controlProps("c")}
              color="default"
              className="text-light"
            />{" "}
            {props.question.option3}
          </div>
          <div>
            <Radio
              {...controlProps("d")}
              color="default"
              className="text-light"
            />{" "}
            {props.question.option4}
          </div>
        </div>
      </div>
    </>
  );
}
