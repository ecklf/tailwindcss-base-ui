import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";
import { clsx } from "clsx";
import React from "react";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Inbox",
    value: "tab1",
  },
  {
    title: "Today",
    value: "tab2",
  },

  {
    title: "Upcoming",
    value: "tab3",
  },
];

const Tabs = () => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={clsx("flex w-full rounded-t-lg bg-white dark:bg-gray-800")}
      >
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Tab
            key={`tab-trigger-${value}`}
            value={value}
            className={clsx(
              "group",
              "first:rounded-tl-lg last:rounded-tr-lg",
              "border-b first:border-r last:border-l",
              "border-gray-300 dark:border-gray-600",
              "bui-selected:border-b-gray-700 focus-visible:bui-selected:border-b-transparent bui-inactive:bg-gray-50 dark:bui-selected:border-b-gray-100 dark:bui-selected:bg-gray-900 dark:focus-visible:bui-selected:border-b-transparent dark:bui-inactive:bg-gray-800",
              "flex-1 px-3 py-2.5",
              "focus:bui-selected:border-b-red",
              "focus:z-10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <span
              className={clsx(
                "text-sm font-medium",
                "text-gray-700 dark:text-gray-100"
              )}
            >
              {title}
            </span>
          </TabsPrimitive.Tab>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Panel
          key={`tab-content-${value}`}
          value={value}
          className={clsx("rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800")}
        >
          <span className="text-sm text-gray-700 dark:text-gray-100">
            {
              {
                tab1: "Your inbox is empty",
                tab2: "Make some coffee",
                tab3: "Order more coffee",
              }[value]
            }
          </span>
        </TabsPrimitive.Panel>
      ))}
    </TabsPrimitive.Root>
  );
};

export { Tabs };
