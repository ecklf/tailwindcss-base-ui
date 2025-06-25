import { Switch as SwitchPrimitive } from "@base-ui-components/react/switch";
import { clsx } from "clsx";
import React from "react";

const Switch = () => {
  return (
    <SwitchPrimitive.Root
      className={clsx(
        "group",
        "bui-checked:bg-purple-600",
        "bui-unchecked:bg-gray-200 dark:bui-unchecked:bg-gray-800",
        "relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
        "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      )}
    >
      <SwitchPrimitive.Thumb
        className={clsx(
          "group-bui-checked:translate-x-5",
          "group-bui-unchecked:translate-x-0",
          "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
