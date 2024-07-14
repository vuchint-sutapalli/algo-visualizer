import React from "react";
import BarItem from "./bar-item";
import { Flipper, Flipped } from "react-flip-toolkit";

const bars = ({ rects, leftPointer, rightPointer }) => {
  return (
    <div className="array-container">
      <Flipper flipKey={rects.map(({ height }) => height).join(",")}>
        {rects.map((item, index) => {
          return (
            <Flipped key={item.keyIndex} flipId={item.keyIndex}>
              {(flippedProps) => {
                return (
                  <BarItem
                    // key={item.keyIndex}
                    flippedProps={flippedProps}
                    leftPointer={leftPointer}
                    rightPointer={rightPointer}
                    index={index}
                    height={item.height}
                  ></BarItem>
                );
              }}
            </Flipped>
          );
        })}
      </Flipper>
    </div>
  );
};

export default bars;
