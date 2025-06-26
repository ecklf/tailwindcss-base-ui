import { AlertDialog as AlertDialogPrimitive } from "@base-ui-components/react/alert-dialog";
import { clsx } from "clsx";
import React from "react";
import Button from "./shared/button";

const AlertDialog = () => {
  return (
    <AlertDialogPrimitive.Root>
      <AlertDialogPrimitive.Trigger render={<Button>Click</Button>} />
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Backdrop
          className={clsx(
            "fixed inset-0 bg-black opacity-20 dark:opacity-70 transition-opacity",
            "bui-ending-style:duration-200 bui-ending-style:ease-in bui-ending-style:opacity-0",
            "bui-starting-style:duration-300 bui-starting-style:ease-out bui-starting-style:opacity-0"
          )}
        />
        <AlertDialogPrimitive.Popup
          className={clsx(
            "fixed z-50 top-1/2 left-1/2 w-[95vw] -translate-x-1/2 -translate-y-1/2",
            "bg-white dark:bg-gray-800 p-4 max-w-md rounded-lg w-[95vw] md:w-full",
            "transition-all duration-150",
            "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
            "bui-ending-style:scale-95 bui-ending-style:opacity-0 bui-starting-style:scale-95 bui-starting-style:opacity-0"
          )}
        >
          <AlertDialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Are you absolutely sure?
          </AlertDialogPrimitive.Title>
          <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogPrimitive.Description>
          <div className="flex justify-end mt-4 space-x-2">
            <AlertDialogPrimitive.Close
              className={clsx(
                "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
                "text-gray-900 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                "border border-gray-300 dark:border-transparent",
                "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              Cancel
            </AlertDialogPrimitive.Close>
            <AlertDialogPrimitive.Close
              className={clsx(
                "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
                "text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                "border border-transparent",
                "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              Confirm
            </AlertDialogPrimitive.Close>
          </div>
        </AlertDialogPrimitive.Popup>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export { AlertDialog };
