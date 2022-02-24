import React, { useState } from "react";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import "./ImageCarousel.css";
import Slide from "./Slide";

function scrollTo(el) {
  const elLeft = el.offsetLeft + el.offsetWidth;
  const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

  // check if element not in view
  if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
    el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
  } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
    el.parentNode.scroll({
      left: el.offsetLeft - el.parentNode.offsetLeft,
      behavior: "smooth",
    });
  }
}

const ImageCarousel = ({ SliderData }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    var thumbnailsArray = document.getElementsByClassName("thumbnail");
    var i;
    for (i = 0; i < thumbnailsArray.length; i++) {
      thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
        "active-thumbnail",
        ""
      );
      if (thumbnailsArray.length > 0) {
        thumbnailsArray[i].classList.remove("active-thumbnail");
      }
      const SlideIndex = current;
      if (thumbnailsArray[SlideIndex] !== undefined)
        thumbnailsArray[SlideIndex].className += " active-thumbnail";
      scrollTo(document.getElementById(`thumbnail-${SlideIndex}`));
    }
  }, [current]);

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <Box my="auto" mx="auto">
      <Slide className="slide" current={current} SliderData={SliderData} />
      <SimpleGrid mt="5vh" spacing="auto" columns={[2, null, 3]} width="90%">
        {SliderData.map((slide, index) => {
          return (
            <Image
              rounded="md"
              h="100px"
              onClick={() => {
                setCurrent(index);
              }}
              id={`thumbnail-${index}`}
              key={index}
              className="thumbnail"
              src={slide.image}
              fallbackSrc="https://via.placeholder.com/150"
              alt="thumbnail"
            />
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default ImageCarousel;
