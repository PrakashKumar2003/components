"use state";
import { Col, Row } from "react-bootstrap";
import "./index.scss";
import { useEffect, useState } from "react";
export default function PartnersSection() {
  const [partners, setPartenrs] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://team.provisdemo.com:6877/api/v1/home/partners/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log(result.data)
        setPartenrs(result.data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Row className="row-cols-2 partners">
        <Col className="lh-1">
          <h2 className="tanker-font fs-80 text-gradient d-inline m-0 lh-1">
            Trusted Partners
          </h2>
          <span className="new-home-color-primary fs-80 tanker-font">.</span>
          <br></br>
          <h2 className="tanker-font fs-80 text-gradient d-inline lh-1 ">
            Proven Excellence
          </h2>
          <span className="new-home-color-primary fs-80 tanker-font">.</span>
          <p className="exo2-font fs-18 mt-5 pe-lg-120">
            Our Valued Partners. We collaborate with the best in the industry to
            bring you top-quality products and services.
          </p>
        </Col>
       
      <Col className="p-0">
        <div >
        hello
          {partners && partners.map((item) => {
            console.log(item.image);
          return <img src={item.image}/>})}
          </div>
        </Col>
      </Row>
    </>
  );
}
