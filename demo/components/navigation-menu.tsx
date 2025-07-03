import type React from "react";
import { NavigationMenu } from "@base-ui-components/react/navigation-menu";
import { clsx } from "clsx";

export function NavigationMenuDemo() {
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
              "w-auto h-full",
              "transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ",
              "bui-starting-style:opacity-0 bui-ending-style:opacity-0 ",
              "bui-starting-style:bui-activation-direction-left:translate-x-[-50%] ",
              "bui-starting-style:bui-activation-direction-right:translate-x-[50%] ",
              "bui-ending-style:bui-activation-direction-left:translate-x-[50%] ",
              "bui-ending-style:bui-activation-direction-right:translate-x-[-50%]"
            )}
          >
            <div className="w-[21rem] lg:w-[23rem] p-3 bg-whtie dark:bg-gray-800">
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
              "w-auto h-full",
              "transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ",
              "bui-starting-style:opacity-0 bui-ending-style:opacity-0 ",
              "bui-starting-style:bui-activation-direction-left:translate-x-[-50%] ",
              "bui-starting-style:bui-activation-direction-right:translate-x-[50%] ",
              "bui-ending-style:bui-activation-direction-left:translate-x-[50%] ",
              "bui-ending-style:bui-activation-direction-right:translate-x-[-50%]"
            )}
          >
            <div className="w-[16rem] lg:w-[18rem] p-3 bg-white dark:bg-gray-800">
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
                  href="https://base-ui.com"
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

        <NavigationMenu.Item className="flex items-center">
          <NavigationMenu.Link
            href="https://github.com/ecklf/tailwindcss-base-ui"
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
          sideOffset={16}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          className={clsx(
            "box-border h-bui-positioner w-bui-positioner max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none bui-side-bottom:before:top-[-10px] bui-side-bottom:before:right-0 bui-side-bottom:before:left-0 bui-side-bottom:before:h-2.5 bui-side-left:before:top-0 bui-side-left:before:right-[-10px] bui-side-left:before:bottom-0 bui-side-left:before:w-2.5 bui-side-right:before:top-0 bui-side-right:before:bottom-0 bui-side-right:before:left-[-10px] bui-side-right:before:w-2.5 bui-side-top:before:right-0 bui-side-top:before:bottom-[-10px] bui-side-top:before:left-0 bui-side-top:before:h-2.5"
          )}
          style={{
            ["--duration" as string]: "0.35s",
            ["--easing" as string]: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <NavigationMenu.Popup
            className={clsx(
              "bui-ending-style:easing-[ease] relative h-bui-popup w-max bui-origin",
              "transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] bui-ending-style:scale-90 bui-ending-style:opacity-0 bui-ending-style:duration-150 bui-starting-style:scale-90 bui-starting-style:opacity-0 min-[500px]:w-[var(--popup-width)] xs:w-[var(--popup-width)] dark:outline-gray-300"
            )}
          >
            <NavigationMenu.Arrow
              className={clsx(
                "flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] bui-side-bottom:top-[-8px] bui-side-left:right-[-13px] bui-side-left:rotate-90 bui-side-right:left-[-13px] bui-side-right:-rotate-90 bui-side-top:bottom-[-8px] bui-side-top:rotate-180"
              )}
            >
              <div className="top-1 relative bg-white dark:bg-gray-800 w-2 h-2 rotate-45" />
            </NavigationMenu.Arrow>
            <NavigationMenu.Viewport className="relative h-full w-full shadow-lg rounded-md bg-white dark:bg-gray-800 overflow-hidden" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}
