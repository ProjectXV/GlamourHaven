import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import "./ImageCarousel.css";

const Slide = ({
  SliderData,
  current,
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div>
      {SliderData.map((slide, index) => {
        return (
          <div className="img-wrapper">
            <Box
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div
                  style={{
                    position: "relative",
                    height: height,
                    width: width,
                  }}
                >
                  <Image
                    style={{ height: height, width: width }}
                    className="image hover-zoom"
                    src={slide.image}
                    key={index}
                    borderRadius="20px"
                    alt="product images"
                    fallbackSrc="https://via.placeholder.com/150"
                    onMouseEnter={(e) => {
                      // update image size and turn-on magnifier
                      const elem = e.currentTarget;
                      const { width, height } = elem.getBoundingClientRect();
                      setSize([width, height]);
                      setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                      // update cursor position
                      const elem = e.currentTarget;
                      const { top, left } = elem.getBoundingClientRect();

                      // calculate cursor position on the image
                      const x = e.pageX - left - window.pageXOffset;
                      const y = e.pageY - top - window.pageYOffset;
                      setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                      // close magnifier
                      setShowMagnifier(false);
                    }}
                  />
                  <div
                    style={{
                      display: showMagnifier ? "" : "none",
                      position: "absolute",

                      // prevent magnifier blocks the mousemove event of img
                      pointerEvents: "none",
                      // set size of magnifier
                      height: `${magnifierHeight}px`,
                      width: `${magnifieWidth}px`,
                      // move element center to cursor pos
                      top: `${y - magnifierHeight / 2}px`,
                      left: `${x - magnifieWidth / 2}px`,
                      opacity: "1", // reduce opacity so you can verify position
                      border: "1px solid lightgray",
                      backgroundColor: "white",
                      backgroundImage: `url('${slide.image}')`,
                      backgroundRepeat: "no-repeat",

                      //calculate zoomed image size
                      backgroundSize: `${imgWidth * zoomLevel}px ${
                        imgHeight * zoomLevel
                      }px`,

                      //calculate position of zoomed image.
                      backgroundPositionX: `${
                        -x * zoomLevel + magnifieWidth / 2
                      }px`,
                      backgroundPositionY: `${
                        -y * zoomLevel + magnifierHeight / 2
                      }px`,
                    }}
                  ></div>
                </div>
              )}
            </Box>
          </div>
        );
      })}
    </div>
  );
};

export default Slide;
