/** @jsxImportSource @emotion/react */
import { memo } from "react";
import { css } from "@emotion/react";
import leftArrow from "../../assets/leftArrow.svg";
import rightArrow from "../../assets/rightArrow.svg";

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 37%;
        ${direction === "right" ? `right: 50vw` : `left: 50vw`};
        height: 50px;
        width: 50px;
        justify-content: center;
        color: black;
        background: transparent;
        z-index: 1000;
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;

        &:hover {
          transform: scale(1.1);
        }

        img {
          transform: translateX(${direction === "left" ? "-2" : "2"}px);

          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === "right" ? (
        <img src={rightArrow} alt="right arrow" />
      ) : (
        <img src={leftArrow} alt="left arrow" />
      )}
    </div>
  );
};

export default memo(Arrow);
