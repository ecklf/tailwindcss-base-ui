import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle";
import React, { useState } from "react";
import { clsx } from "clsx";

const Toggle = () => {
  const [starred, setStarred] = useState(false);

  return (
    <TogglePrimitive
      pressed={starred}
      onPressedChange={setStarred}
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        "bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900",
        "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
        "bui-pressed:bg-gray-100 dark:bui-pressed:bg-gray-900"
      )}
    >
      {starred ? (
        <StarFilledIcon className="h-4 w-4 text-yellow-400" />
      ) : (
        <StarIcon />
      )}
      <span className="ml-2 leading-5">{starred ? "Starred" : "Star"}</span>
    </TogglePrimitive>
  );
};

export { Toggle };
