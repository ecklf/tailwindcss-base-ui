import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";
import { clsx } from "clsx";
import React from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import Button from "./shared/button";

const Toast = () => {
  const [open, setOpen] = React.useState(false);
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <ToastPrimitive.Provider>
      <Button
        onClick={() => {
          if (open) {
            setOpen(false);
            setTimeout(() => {
              setOpen(true);
            }, 400);
          } else {
            setOpen(true);
          }
        }}
      >
        Click
      </Button>
      <ToastPrimitive.Viewport />
      <ToastPrimitive.Root
        className={clsx(
          "z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
          "bg-white dark:bg-gray-800",
          "bui-open:animate-toast-slide-in-bottom md:bui-open:animate-toast-slide-in-right",
          "bui-closed:animate-toast-hide",
          "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex">
          <div className="w-0 flex-1 flex items-center pl-5 py-4">
            <div className="w-full radix">
              <ToastPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Pull Request Review
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                Someone requested your review on{" "}
                <span className="font-medium">repository/branch</span>
              </ToastPrimitive.Description>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col px-3 py-2 space-y-1">
              <div className="h-0 flex-1 flex">
                <button
                  type="button"
                  className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-purple-600 dark:text-purple-500 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("https://github.com");
                  }}
                >
                  Review
                </button>
              </div>
              <div className="h-0 flex-1 flex">
                <ToastPrimitive.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  Dismiss
                </ToastPrimitive.Close>
              </div>
            </div>
          </div>
        </div>
      </ToastPrimitive.Root>
    </ToastPrimitive.Provider>
  );
};

export { Toast };
