import { clsx } from "clsx";
import React, { Fragment } from "react";

const AspectRatio = () => {
  return (
    <Fragment>
      <div
        className="group relative h-full w-full overflow-hidden rounded-lg shadow-md"
        style={{ aspectRatio: "16 / 9" }}
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h3 className="select-none bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
            Vancouver
          </h3>
        </div>
        <div
          className={clsx(
            "absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
            "transition-colors duration-300 ease-in-out"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt="Vancouver by Matt Wang"
            className="h-full w-full mix-blend-overlay"
          />
        </div>
      </div>
    </Fragment>
  );
};

export { AspectRatio };
