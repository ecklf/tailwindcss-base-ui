import { Transition } from "@headlessui/react";
import { AlertDialog } from "@base-ui-components/react/alert-dialog";
import { clsx } from "clsx";
import React, { Fragment, useState } from "react";
import Button from "./shared/button";

const AlertDialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AlertDialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Trigger render={<Button>Click</Button>} />
      <AlertDialog.Portal keepMounted>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <AlertDialog.Backdrop
              className={clsx(
                "fixed inset-0 z-20 bg-black/50",
                "bui-open:animate-in bui-open:fade-in-0",
                "bui-closed:animate-out bui-closed:fade-out-0"
              )}
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <AlertDialog.Popup
              className={clsx(
                "fixed z-50",
                "p-4 max-w-md rounded-lg w-[95vw] md:w-full",
                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "bg-white dark:bg-gray-800",
                "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                "bui-open:animate-in bui-open:fade-in-0 bui-open:zoom-in-95",
                "bui-closed:animate-out bui-closed:fade-out-0 bui-closed:zoom-out-95"
              )}
            >
              <AlertDialog.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Are you absolutely sure?
              </AlertDialog.Title>
              <AlertDialog.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialog.Description>
              <div className="flex justify-end mt-4 space-x-2">
                <AlertDialog.Close
                  className={clsx(
                    "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
                    "text-gray-900 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
                    "border border-gray-300 dark:border-transparent",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  Cancel
                </AlertDialog.Close>
                <AlertDialog.Close
                  className={clsx(
                    "inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md select-none",
                    "text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:text-gray-100 dark:hover:bg-purple-600",
                    "border border-transparent",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  Confirm
                </AlertDialog.Close>
              </div>
            </AlertDialog.Popup>
          </Transition.Child>
        </Transition.Root>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export { AlertDialogDemo as AlertDialog };
