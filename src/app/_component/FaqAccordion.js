"use client";
import { useContext, useState } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";

const FaqAccordion = ({ items }) => {
  return (
    <Accordion>
      {items.map((item, index) => (
        <Card key={index}>
          <Card.Header>
            <CustomToggle title={item.title} eventKey={index} />
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
            <Card.Body>{item.content}</Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;

function CustomToggle({ eventKey, title }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("toggled")
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div className="d-flex justify-content-between">
      <span>{title}</span>
      <button type="button" onClick={decoratedOnClick}>
        {isCurrentEventKey ? "-" : "+"}
      </button>
    </div>
  );
}
