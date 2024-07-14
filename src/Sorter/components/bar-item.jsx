import React from "react";

const BarItem = ({
  flippedProps,
  barData,
  leftPointer,
  rightPointer,
  index,
}) => {
  const checkColor = () => {
    if (barData.isSorted) {
      return "green";
    } else if (barData.isSorting) {
      return "red";
    } else {
      return "yellow";
    }
  };
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
      style={{ height: `${barData.height}px`, background: checkColor() }}
      data-index={index}
      data-value={barData.height}
      key={index}
    ></div>
  );
};

export default BarItem;
