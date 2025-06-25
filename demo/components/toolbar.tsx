import {
  FontBoldIcon,
  FontItalicIcon,
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";
import React, { type ReactElement } from "react";
import { Toolbar } from "@base-ui-components/react/toolbar";
import { ToggleGroup } from "@base-ui-components/react/toggle-group";
import { Toggle } from "@base-ui-components/react/toggle";
import { clsx } from "clsx";

interface ToggleItem {
  value: string;
  label: string;
  icon: ReactElement;
}

const fontSettings: ToggleItem[] = [
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

const textSettings: ToggleItem[] = [
  {
    value: "left",
    label: "Text left",
    icon: <TextAlignLeftIcon />,
  },
  {
    value: "center",
    label: "Text center",
    icon: <TextAlignCenterIcon />,
  },
  {
    value: "right",
    label: "Text right",
    icon: <TextAlignRightIcon />,
  },
];

const ToolbarDemo = () => {
  return (
    <Toolbar.Root className="flex items-center gap-1 rounded-lg bg-white px-2.5 py-2 dark:bg-gray-800">
      <ToggleGroup toggleMultiple className="flex" aria-label="Font settings">
        {fontSettings.map(({ value, label, icon }) => (
          <Toolbar.Button
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
          </Toolbar.Button>
        ))}
      </ToggleGroup>

      <ToggleGroup
        defaultValue={["center"]}
        className="flex ml-4"
        aria-label="Text settings"
      >
        {textSettings.map(({ value, label, icon }) => (
          <Toolbar.Button
            key={`text-${value}`}
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
          </Toolbar.Button>
        ))}
      </ToggleGroup>

      <Toolbar.Separator className="mx-4 my-0.5 hidden h-auto w-px bg-gray-300 dark:bg-gray-600 xl:flex" />

      <Toolbar.Link
        className={clsx(
          "hidden items-center pr-2 text-sm text-gray-500 dark:text-gray-400 xl:flex",
          "no-underline hover:text-purple-600 dark:hover:text-purple-400",
          "focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-purple-500"
        )}
        href="https://github.com/ecklf/tailwindcss-radix"
        target="_blank"
      >
        Edited 2 hours ago
      </Toolbar.Link>
    </Toolbar.Root>
  );
};

export { ToolbarDemo as Toolbar };
