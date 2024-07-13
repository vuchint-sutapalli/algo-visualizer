import React from "react";
import { mergeSort } from "../helpers";

import { delay } from "../helpers";

const SortingController = ({
  arrayItems,
  setArrayItems,
  setLeftPointer,
  setRightPointer,
}) => {
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

  return (
    <div>
      <button>Bubble sort</button>
      <button>Insertion sort</button>
      <button>Quick sort</button>
      <button onClick={handleSortByMerge}>Merge sort</button>
    </div>
  );
};

export default SortingController;
