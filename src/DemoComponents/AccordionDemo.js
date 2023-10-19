import React from "react";
import Accordion from "../components/Accordion/Accordion";

const items = [
  {
    title: "Accordion Item #1",
    content:
      "This is the first item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
  },
  {
    title: "Accordion Item #2",
    content: "Content for section 2 goes here.",
  },
  {
    title: "Accordion Item #3",
    content: "Co2tent for section 3 goes here.",
  },
];

const AccordionDemo = () => {
  return (
    <>
      <h1>Accordion Example</h1>

      <div className="container">
        <p>size small</p>

        <Accordion items={items} size={"small"} />
        <br />
        <p>size medium</p>

        <Accordion items={items} size={"medium"} />
        <br />
        <p> size large</p>

        <Accordion items={items} size={"large"} />
        <br />

        <p>No size passed</p>
        <Accordion items={items} />
      </div>
    </>
  );
};

export default AccordionDemo;
