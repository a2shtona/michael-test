"use client";
import React, { useEffect, useState, useRef } from "react";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Slide from "./Slide";
const banners = [<Banner1 key="1" />, <Banner2 key="2" />, <Banner3 key="3" />];

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="carousel-content">
        <Slide
          slides={banners}
          animationType="SLIDE"
          duration={2500}
          withNavigation
        />
      </div>
    </div>
  );
};

export default Carousel;
