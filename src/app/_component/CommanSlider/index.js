"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col } from "react-bootstrap";
const CommanSlider = () => {
  const startY = useRef();
  const [navSlider, setnavSlider] = useState(null);
  let navSliderRef = useRef();

  const next = () => {
    console.log(navSlider);
    navSlider.slickNext();
  };
  const previous = () => {
    navSlider.slickPrev();
  };

  const handleSwipeMove = useCallback(
    (e) => {
      if (!startY.current) return;
      const endY = e.clientY;
      const swipeThreshold = 2;

      if (startY.current - endY > swipeThreshold) {
        next();
      } else if (endY - startY.current > swipeThreshold) {
        previous();
      }
      startY.current = null;
    },
    [next, previous]
  );

  useEffect(() => {
    setnavSlider(navSliderRef);
  }, []);

  useEffect(() => {
    const swiperElements = document.querySelectorAll(".swiper");

    const handleTouchStart = (e) => {
      startY.current = e.clientY;
    };

    swiperElements.forEach((element) => {
      element.addEventListener("mousedown", handleTouchStart);
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("mouseup", handleSwipeMove);
      element.addEventListener("touchend", handleSwipeMove);
    });

    return () => {
      swiperElements.forEach((element) => {
        element.removeEventListener("mousedown", handleTouchStart);
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("mouseup", handleSwipeMove);
        element.removeEventListener("touchend", handleSwipeMove);
      });
    };
  }, [navSlider, handleSwipeMove]);

  const navSliderSettings = {
    slidesToShow: 1.5,
    slidesToScroll: 1,
    vertical: true,
    swipe:false,
    // focusOnSelect: true,
    arrows: false,
    verticalSwiping: true,
  };

  return (
    <Row className="row row-cols-2 gap-3 vertical-slider">
      <Col className=" slider-nev d-flex flex-column align-items-center justify-content-center">
        <Slider {...navSliderSettings} ref={(slider) => (navSliderRef = slider)}>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="swiper">our comman slider ${index}</div>
          ))}
        </Slider>
      </Col>
    </Row>
  );
};

export default CommanSlider;
