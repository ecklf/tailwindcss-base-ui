import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";
import Button from "./shared/button";

const Dialog = () => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger render={<Button>Click</Button>} />
      <DialogPrimitive.Portal keepMounted>
        <DialogPrimitive.Backdrop
          className={clsx(
            "fixed inset-0 bg-black opacity-20 dark:opacity-70 transition-opacity",
            "bui-ending-style:duration-200 bui-ending-style:ease-in bui-ending-style:opacity-0",
            "bui-starting-style:duration-300 bui-starting-style:ease-out bui-starting-style:opacity-0"
          )}
        />
        <DialogPrimitive.Popup
          className={clsx(
            "fixed z-50 top-1/2 left-1/2 w-[95vw] -translate-x-1/2 -translate-y-1/2",
            "bg-white dark:bg-gray-800 p-4 max-w-md rounded-lg w-[95vw] md:w-full",
            "transition-all duration-150",
            "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            "bui-ending-style:scale-95 bui-ending-style:opacity-0 bui-starting-style:scale-95 bui-starting-style:opacity-0"
          )}
        >
          <DialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Edit profile
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogPrimitive.Description>
          <form className="mt-2 space-y-2">
            <fieldset>
              <label
                htmlFor="firstName"
                className="text-xs font-medium text-gray-700 dark:text-gray-400"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Tim"
                autoComplete="given-name"
                className={clsx(
                  "mt-1 block w-full rounded-md",
                  "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
                  "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                  "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              />
            </fieldset>
            <fieldset>
              <label
                htmlFor="familyName"
                className="text-xs font-medium text-gray-700 dark:text-gray-400"
              >
                Family Name
              </label>
              <input
                id="familyName"
                type="text"
                placeholder="Cook"
                autoComplete="family-name"
                className={clsx(
                  "mt-1 block w-full rounded-md",
                  "text-sm text-gray-700 placeholder:text-gray-500 dark:text-gray-400 dark:placeholder:text-gray-600",
                  "border border-gray-400 focus-visible:border-transparent dark:border-gray-700 dark:bg-gray-800",
                  "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              />
            </fieldset>
          </form>

          <div className="mt-4 flex justify-end">
            <DialogPrimitive.Close
              className={clsx(
                "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                "bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                "border border-transparent",
                "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              Save
            </DialogPrimitive.Close>
          </div>

          <DialogPrimitive.Close
            className={clsx(
              "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
              "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Dialog };
