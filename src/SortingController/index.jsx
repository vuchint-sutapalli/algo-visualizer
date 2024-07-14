/* eslint-disable react/prop-types */
import React from "react";
import { mergeSort, bubbleSort } from "../helpers";

import { delay } from "../helpers";

const SortingController = ({
  arrayItems,
  setArrayItems,
  setLeftPointer,
  setRightPointer,
  isAnimating,
  setIsAnimating,
}) => {
  const visualizebubbleSort = async (steps) => {
    setIsAnimating(true);

    let tempArrayItems = [...arrayItems]; // Create a copy of rects to avoid mutating state directly

    for (let i = 0; i < steps.length; i++) {
      const { xx, yy, changed } = steps[i];

      // Handle different scenarios (swap, mark as sorted, etc.)

      //clear temporary highlights from prev step
      if (i !== 0) {
        tempArrayItems[steps[i - 1].xx] = {
          ...tempArrayItems[steps[i - 1].xx],
          isSorting: false,
        };
        tempArrayItems[steps[i - 1].yy] = {
          ...tempArrayItems[steps[i - 1].yy],
          isSorting: false,
        };
      }

      // // Mark current as sorted if xx and yy are the same //end of arrray
      if (xx === yy) {
        tempArrayItems[xx] = {
          ...tempArrayItems[xx],
          isSorted: true,
          isSorting: false,
        };
      } else if (changed) {
        // Swap elements in tempArrayItems
        const recti = { ...tempArrayItems[steps[i].xx], isSorting: true };
        const rectj = { ...tempArrayItems[steps[i].yy], isSorting: true };
        tempArrayItems[steps[i].yy] = recti;
        tempArrayItems[steps[i].xx] = rectj;
      } else {
        tempArrayItems[steps[i].xx] = {
          ...tempArrayItems[steps[i].xx],
          isSorting: true,
        };
        tempArrayItems[steps[i].yy] = {
          ...tempArrayItems[steps[i].yy],
          isSorting: true,
        };
      }

      setArrayItems([...tempArrayItems]);
      // await delay(400);
      // Clear isSorting after processing the step
      // if (i > 0) {
      //   tempArrayItems[steps[i - 1].xx] = {
      //     ...tempArrayItems[steps[i - 1].xx],
      //     isSorting: false,
      //   };
      //   tempArrayItems[steps[i - 1].yy] = {
      //     ...tempArrayItems[steps[i - 1].yy],
      //     isSorting: false,
      //   };
      // }

      if (i < steps.length - 1) {
        await delay(500);
      }
    }

    setIsAnimating(false);
  };

  const renderSteps = async (ans, steps) => {
    for (let i = 0; i < steps.length; i++) {
      let step = steps[i];
      const { left, right, arr } = step;
      console.log("processing step", i, step.arr);
      console.log(`dealing between ${left} , ${right}`);
      setLeftPointer(left);
      setRightPointer(right);

      await delay(1000);
      setLeftPointer(null);
      setRightPointer(null);

      await delay(500); // Wait for 1 second before rendering the next item
      setArrayItems([...arr]);

      await delay(500);
    }
  };
  const handleSortByMerge = () => {
    let { ans, steps } = mergeSort([...arrayItems]);

    console.log("recieved", ans, steps);

    renderSteps(ans, steps);
  };

  const handleBubbleSort = () => {
    const { steps, bars } = bubbleSort([...arrayItems]);
    visualizebubbleSort(steps);
    console.log("bubble steps", steps, bars);
  };

  return (
    <div className={isAnimating ? "disabled" : ""}>
      <button onClick={handleBubbleSort}>Bubble sort</button>
      <button>Insertion sort</button>
      <button>Quick sort</button>
      <button onClick={handleSortByMerge}>Merge sort</button>
    </div>
  );
};

export default SortingController;
