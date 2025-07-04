import { Collapsible as CollapsiblePrimitive } from "@base-ui-components/react/collapsible";
import { PlayIcon, Share2Icon, TriangleRightIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

const Collapsible = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <CollapsiblePrimitive.Root
      open={isOpen}
      onOpenChange={setIsOpen}
      className="group"
    >
      <CollapsiblePrimitive.Trigger
        className={clsx(
          "flex w-full select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium",
          "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
          "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <div>My Playlists</div>
        <TriangleRightIcon className="transform duration-300 ease-in-out group-bui-open:rotate-90" />
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Panel
        className={clsx(
          "overflow-hidden",
          "bui-open:animate-collapsible-slide-down bui-closed:animate-collapsible-slide-up"
        )}
      >
        <div className="mt-4 flex flex-col space-y-4">
          {["80s Synthwave", "Maximale Konzentration", "高人氣金曲"].map(
            (title) => (
              <div
                key={`collapsible-${title}`}
                className={clsx(
                  "group/panel",
                  "ml-12 flex select-none items-center justify-between rounded-md px-4 py-2 text-left text-sm font-medium",
                  "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900"
                )}
              >
                {title}
                <div className="hidden items-center space-x-3 group-hover/panel:flex">
                  <Share2Icon className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                  <PlayIcon className="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" />
                </div>
              </div>
            )
          )}
        </div>
      </CollapsiblePrimitive.Panel>
    </CollapsiblePrimitive.Root>
  );
};

export { Collapsible };
