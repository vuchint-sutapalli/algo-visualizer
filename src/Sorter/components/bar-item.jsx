import React from "react";

const BarItem = ({
  flippedProps,
  height,
  leftPointer,
  rightPointer,
  index,
}) => {
  //   const checkColor = () => {
  //     if (rect.isSorted) {
  //       return "green";
  //     } else if (rect.isSorting) {
  //       return "red";
  //     } else {
  //       return "yellow";
  //     }
  //   };
  //   return (
  //     <div
  //       className="rect"
  //       style={{
  //         height: rect.height,
  //         background: checkColor(),
  //         "vertical-align": "middle",
  //       }}
  //     ></div>
  //   );
  return (
    <div
      {...flippedProps}
      className={`array-container--item ${
        leftPointer !== null &&
        rightPointer !== null &&
        leftPointer <= index &&
        index <= rightPointer
          ? "picked"
          : null
      }`}
      style={{ height: `${height}px` }}
      data-index={index}
      data-value={height}
      key={index}
    ></div>
  );
};

export default BarItem;
