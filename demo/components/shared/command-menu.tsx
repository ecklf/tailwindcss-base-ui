import { clsx } from "clsx";
import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { DividerVerticalIcon } from "@radix-ui/react-icons";

interface CommandMenuProps<T extends { label: string }> {
  items: T[];
  onSelect?: (data: {
    item: T;
    modifiers: {
      control: boolean;
    };
  }) => void;
}

function CommandMenu<T extends { label: string }>({
  items,
  onSelect,
}: CommandMenuProps<T>) {
  const [open, setOpen] = useState(false);
  const [isHoldingModifier, setIsHoldingModifier] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle the menu when ⌘K is pressed
      if (e.key === "k" && e.metaKey) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        setIsHoldingModifier(true);
      }
    };

    const keyUp = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        setIsHoldingModifier(false);
      }
    };

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("keyup", keyUp);
    };
  }, []);

  return (
    <Command.Dialog
      className={clsx(
        "z-50",
        "fixed top-[20%] left-1/2 transform -translate-x-1/2",
        "w-full sm:max-w-lg md:max-w-xl",
        "bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl",
        "rounded-lg shadow-lg"
      )}
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
    >
      <div className="relative mt-2 pl-1.5 ml-px">
        <Command.Input
          placeholder="Search for a component"
          className={clsx(
            "bg-transparent",
            "block w-full",
            "text-sm font-medium text-gray-700 dark:text-gray-300 placeholder:text-gray-600 dark:placeholder:text-gray-500",
            "border-none focus:outline-hidden focus:border-transparent focus-visible:ring-transparent"
          )}
        />
        <kbd
          onKeyPress={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          onClick={() => setOpen(false)}
          className="select-none hover:cursor-pointer w-auto h-5 flex items-center justify-center absolute rounded-md text-[0.6rem] right-5 top-1/2 text-gray-700 dark:text-gray-300 font-bold -translate-y-1/2 bg-black/10 dark:bg-white/10 px-1.5 leading-none"
        >
          ESC
        </kbd>
      </div>
      <Command.Separator
        alwaysRender
        className="mt-2 h-px bg-gray-300/70 dark:bg-gray-300/10"
      />
      <Command.List
        style={{
          // Should equal py-2 below
          scrollPaddingBlockStart: "0.5rem",
          scrollPaddingBlockEnd: "0.5rem",
        }}
        className="py-2 px-2 w-full max-h-[50vh] overflow-y-auto"
      >
        <Command.Empty className="flex items-center px-3 py-3 space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <DocumentMagnifyingGlassIcon className="w-5 h-5" />
          <span className="font-medium">No Results</span>
        </Command.Empty>
        {items.map((item) => (
          <Command.Item
            key={`cmdk-item-${item.label}`}
            onSelect={() => {
              onSelect({ item, modifiers: { control: isHoldingModifier } });
              setOpen(false);
            }}
            className={clsx(
              "px-3 py-3",
              "cursor-pointer",
              "flex items-center text-sm font-medium text-gray-700 rounded-md dark:text-gray-300",
              "aria-selected:bg-black/10 dark:aria-selected:bg-white/10",
              "select-none focus:outline-hidden"
            )}
          >
            {item.label}
          </Command.Item>
        ))}
      </Command.List>
      <div className="h-px bg-gray-300/70 dark:bg-gray-300/10" />
      <div className="ml-px pl-3.5 pr-5 w-full flex items-center justify-between py-2">
        <svg
          className="w-3 h-3 text-black fill-current dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>I am an SVG</title>
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>

        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <span className="text-xs">Go to</span>
            <kbd className="w-auto h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 pb-1 px-1.5">
              ↵
            </kbd>
          </div>
          <DividerVerticalIcon className="opacity-30" />
          <div className="flex items-center space-x-2">
            <span className="text-xs">Open code</span>
            <div className="flex items-center space-x-1">
              <kbd className="w-auto h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 pt-1 px-1.5">
                ⌃
              </kbd>
              <span className="">+</span>
              <kbd className="w-auto h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 pb-1 px-1.5">
                ↵
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </Command.Dialog>
  );
}

export { CommandMenu };
