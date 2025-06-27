import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Select as SelectPrimitive } from "@base-ui-components/react/select";
import { clsx } from "clsx";
import React from "react";
import Button from "./shared/button";

const Select = () => {
  return (
    <SelectPrimitive.Root defaultValue="blueberry">
      <SelectPrimitive.Trigger
        render={
          <Button>
            <SelectPrimitive.Value placeholder="Blueberry" />
          </Button>
        }
        aria-label="Food"
      >
        <SelectPrimitive.Value placeholder="Select a fruit" />
        <SelectPrimitive.Icon className="ml-2">
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner className="outline-none" sideOffset={8}>
          <SelectPrimitive.ScrollUpArrow />

          <SelectPrimitive.Popup
            className={clsx(
              "group [max-height:var(--available-height)] bui-origin",
              "overflow-y-auto bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg"
            )}
          >
            {["Apple", "Banana", "Blueberry", "Strawberry", "Grapes"].map(
              (f) => (
                <SelectPrimitive.Item
                  key={`select-primitive-item-${f}`}
                  className={clsx(
                    "flex items-center rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium",
                    "bui-highlighted:bg-gray-100 dark:bui-highlighted:bg-gray-900",
                    "bui-disabled:opacity-50",
                    "focus:outline-hidden select-none",
                    "grid cursor-default grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5",
                    "bui-highlighted:relative bui-highlighted:z-0"
                  )}
                  value={f.toLowerCase()}
                >
                  <SelectPrimitive.ItemIndicator className="col-start-1">
                    <CheckIcon className="size-3" />
                  </SelectPrimitive.ItemIndicator>
                  <SelectPrimitive.ItemText className="col-start-2">
                    {f}
                  </SelectPrimitive.ItemText>
                </SelectPrimitive.Item>
              )
            )}
          </SelectPrimitive.Popup>
          <SelectPrimitive.ScrollDownArrow />
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export { Select };
