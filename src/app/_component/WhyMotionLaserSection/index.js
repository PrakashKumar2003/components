"use client";
import { useEffect, useState } from "react";
import CommanSlider from "../CommanSlider";
import { Col, Container, Row } from "react-bootstrap";
import './index.css'
export default function WhyMotionLaserSection() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://team.provisdemo.com:6877/api/v1/home/benefits/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
       <Row className="row-cols-xl-2 row-cols-1">
      <Col>jw;;ok</Col>
      <Col className="ps-0 h-100   benefit-vertical-slider">
        {data && (
          <CommanSlider
            settings={{
              autoplaySpeed:3000,
              autoplay:true,
              slidesToShow: 3,
              slidesToScroll: 1,
              vertical: true,
              swipe: false,
              arrows: false,
              verticalSwiping: true,
                centerMode: true, // Center the active slide
            }}
          >
            {data.map((item, index) => {
              return (
                <div  key={index} className="p-40 swiper">
                  <div className="d-flex">
<span className="me-10" dangerouslySetInnerHTML={{__html:item.icon}}></span> <h3 className="text-gradient tanker-font">{item.title}</h3> 
                  </div>
                  <p className="exo2-font fs-18">{item.description}</p>
                </div>
              );
            })}
          </CommanSlider>
        )}
      </Col>
    </Row>
    

  );
}
