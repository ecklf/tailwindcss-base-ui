import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { clsx } from "clsx";
import React from "react";
import Button from "./shared/button";

const Select = () => {
  return (
    <SelectPrimitive.Root defaultValue="blueberry">
      <SelectPrimitive.Trigger render={<Button />} aria-label="Food">
        <SelectPrimitive.Value placeholder="Select a fruit" />
        <SelectPrimitive.Icon className="ml-2">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner>
          <SelectPrimitive.Popup className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg">
            <SelectPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (f) => (
                <SelectPrimitive.Item
                  disabled={f === "Grapes"}
                  key={`select-primitive-item-${f}`}
                  value={f.toLowerCase()}
                  className={clsx(
                    "relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900",
                    "bui-disabled:opacity-50",
                    "focus:outline-hidden select-none"
                  )}
                >
                  <SelectPrimitive.ItemText>{f}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              )
            )}
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export { Select };
