import { Tooltip as TooltipPrimitive } from "@base-ui-components/react/tooltip";
import { clsx } from "clsx";
import React from "react";
import Button from "./shared/button";

const Tooltip = () => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger render={<Button>Hover</Button>} />
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Positioner sideOffset={4}>
            <TooltipPrimitive.Popup
              className={clsx(
                "bui-side-top:animate-slide-down-fade",
                "bui-side-right:animate-slide-left-fade",
                "bui-side-bottom:animate-slide-up-fade",
                "bui-side-left:animate-slide-right-fade",
                "inline-flex items-center rounded-md px-4 py-2.5",
                "bg-white dark:bg-gray-800"
              )}
            >
              <TooltipPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />
              <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
                Sorry, but our princess is in another castle
              </span>
            </TooltipPrimitive.Popup>
          </TooltipPrimitive.Positioner>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export { Tooltip };
