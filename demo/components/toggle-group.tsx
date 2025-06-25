import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";
import { Toggle } from "@base-ui-components/react/toggle";
import { clsx } from "clsx";
import React, { type ReactElement } from "react";

interface ToggleItem {
  value: string;
  label: string;
  icon: ReactElement;
}

const settings: ToggleItem[] = [
  {
    value: "bold",
    label: "Font bold",
    icon: <FontBoldIcon />,
  },
  {
    value: "italic",
    label: "Font italic",
    icon: <FontItalicIcon />,
  },
  {
    value: "underline",
    label: "Underline",
    icon: <UnderlineIcon />,
  },
];

const ToggleGroup = () => {
  return (
    <div className="inline-flex" aria-label="Font settings">
      <ToggleGroupPrimitive
        toggleMultiple
        className="flex"
        aria-label="Font settings"
      >
        {settings.map(({ value, label, icon }) => (
          <Toggle
            key={`font-${value}`}
            render={<Toggle />}
            value={value}
            aria-label={label}
            className={clsx(
              "bui-pressed:bg-gray-50 dark:bui-pressed:bg-gray-900",
              "bg-white dark:bg-gray-800",
              "border-y px-2.5 py-2 first:rounded-l-md first:border-x last:rounded-r-md last:border-x",
              "border-gray-200 bui-pressed:border-transparent dark:border-gray-600 dark:bui-pressed:border-transparent",
              "focus:relative focus:outline-hidden focus-visible:z-20 focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            {React.cloneElement(icon, {
              className: "w-5 h-5 text-gray-700 dark:text-gray-100",
            })}
          </Toggle>
        ))}
      </ToggleGroupPrimitive>
    </div>
  );
};

export { ToggleGroup };
