import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import { clsx } from "clsx";
import React from "react";

export const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="relative">
      <NavigationMenu.List className="flex flex-row p-2 space-x-2 bg-white rounded-lg dark:bg-gray-800">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={clsx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
              "text-sm font-medium",
              "text-gray-700 dark:text-gray-100",
              "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            Overview
          </NavigationMenu.Trigger>

          <NavigationMenu.Content
            className={clsx(
              "absolute top-0 left-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div className="w-[21rem] lg:w-[23rem] p-3">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 p-4 w-full bg-gray-100 rounded-md dark:bg-gray-900" />

                <div className="flex flex-col col-span-4 p-4 space-y-3 w-full bg-gray-100 rounded-md dark:bg-gray-900">
                  <div className="w-full h-12 bg-white rounded-md dark:bg-gray-700" />
                  <div className="w-full h-12 bg-white rounded-md dark:bg-gray-700" />
                  <div className="w-full h-12 bg-white rounded-md dark:bg-gray-700" />
                  <div className="w-full h-12 bg-white rounded-md dark:bg-gray-700" />
                </div>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={clsx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
              "text-sm font-medium text-gray-700 dark:text-gray-100",
              "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            Resources
          </NavigationMenu.Trigger>

          <NavigationMenu.Content
            className={clsx(
              "absolute top-0 left-0 w-auto rounded-lg",
              "radix-motion-from-start:animate-enter-from-left",
              "radix-motion-from-end:animate-enter-from-right",
              "radix-motion-to-start:animate-exit-to-left",
              "radix-motion-to-end:animate-exit-to-right"
            )}
          >
            <div className="w-[16rem] lg:w-[18rem] p-3">
              <div className="flex flex-col space-y-2 w-full">
                <NavigationMenu.Link
                  className={clsx(
                    "px-4 py-3 w-full rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                  href="https://tailwindcss.com"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Tailwind CSS
                  </span>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                    A utility-first CSS framework for rapidly building custom
                    user interfaces.
                  </div>
                </NavigationMenu.Link>

                <NavigationMenu.Link
                  className={clsx(
                    "px-4 py-3 w-full rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                  href="https://www.radix-ui.com"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Base UI
                  </span>

                  <div className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                    An open-source UI component library for building
                    high-quality, accessible design systems and web apps.
                  </div>
                </NavigationMenu.Link>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://github.com/ecklf/tailwindcss-radix"
            className={clsx(
              "px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
              "text-sm font-medium text-gray-700 dark:text-gray-100"
            )}
          >
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          className={clsx(
            "absolute flex justify-center",
            "w-[140%] left-[-20%] top-[100%]"
          )}
          style={{
            perspective: "2000px",
          }}
        >
          <NavigationMenu.Popup>
            <NavigationMenu.Viewport
              className={clsx(
                "overflow-hidden relative mt-2 bg-white rounded-md shadow-lg dark:bg-gray-800",
                "w-radix-navigation-menu-viewport",
                "h-radix-navigation-menu-viewport",
                "radix-state-open:animate-scale-in-content",
                "radix-state-closed:animate-scale-out-content",
                "duration-300 origin-[top_center] transition-[width_height] ease-[ease]"
              )}
            />
            <NavigationMenu.Arrow className="relative top-1 w-2 h-2 bg-white rotate-45 dark:bg-gray-800" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
};
