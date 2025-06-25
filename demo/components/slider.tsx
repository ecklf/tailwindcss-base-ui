import { Slider as SliderPrimitive } from "@base-ui-components/react/slider";
import { clsx } from "clsx";
import React from "react";

const Slider = () => {
  return (
    <SliderPrimitive.Root
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="value"
      className="relative flex h-5 w-64 touch-none items-center"
    >
      <SliderPrimitive.Control className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800">
        <SliderPrimitive.Track className="h-1 w-full ">
          <SliderPrimitive.Indicator className="bg-white rounded-full" />
          <SliderPrimitive.Thumb
            className={clsx(
              "block h-5 w-5 rounded-full bg-purple-600 dark:bg-white",
              "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          />
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};

export { Slider };
