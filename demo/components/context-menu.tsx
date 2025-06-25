import { ContextMenu } from "@base-ui-components/react/context-menu";
import { Menu } from "@base-ui-components/react/menu";
import {
  CaretRightIcon,
  CheckIcon,
  CropIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  FileIcon,
  FrameIcon,
  GridIcon,
  Link2Icon,
  MixerHorizontalIcon,
  PersonIcon,
  TransparencyGridIcon,
} from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React, { type ReactNode, useState } from "react";
import Button from "./shared/button";

interface BaseUIMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface User {
  name: string;
  url?: string;
}

const generalMenuItems: BaseUIMenuItem[] = [
  {
    label: "New File",
    icon: <FileIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+N",
  },
  {
    label: "Settings",
    icon: <MixerHorizontalIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+,",
  },
];

const regionToolMenuItems: BaseUIMenuItem[] = [
  {
    label: "Frame",
    icon: <FrameIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+F",
  },
  {
    label: "Crop",
    icon: <CropIcon className="mr-2 h-3.5 w-3.5" />,
    shortcut: "⌘+S",
  },
];

const users: User[] = [
  {
    name: "Adam",
    url: "https://github.com/adamwathan.png",
  },
  {
    name: "Steve",
    url: "https://github.com/steveschoger.png",
  },
  {
    name: "Robin",
    url: "https://github.com/robinmalfait.png",
  },
];

const ContextMenuDemo = () => {
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [showUi, setShowUi] = useState<boolean>(false);

  return (
    <div>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Button>Right Click</Button>
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Backdrop />
          <ContextMenu.Positioner>
            <ContextMenu.Popup
              className={clsx(
                "bui-side-top:animate-slide-up bui-side-bottom:animate-slide-down",
                "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
                "bg-white dark:bg-gray-800"
              )}
            >
              {generalMenuItems.map(({ label, icon, shortcut }) => (
                <ContextMenu.Item
                  key={`context-item-${label}`}
                  className={clsx(
                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-hidden",
                    "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                  )}
                >
                  {icon}
                  <span className="grow text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                  {shortcut && <span className="text-xs">{shortcut}</span>}
                </ContextMenu.Item>
              ))}

              <ContextMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

              <ContextMenu.CheckboxItem
                checked={showGrid}
                onCheckedChange={(state) => {
                  if (typeof state === "boolean") {
                    setShowGrid(state);
                  }
                }}
                className={clsx(
                  "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-hidden",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {showGrid ? (
                  <GridIcon className="mr-2 h-4 w-4" />
                ) : (
                  <TransparencyGridIcon className="mr-2 h-3.5 w-3.5 text-gray-700 dark:text-gray-300" />
                )}
                <span className="grow text-gray-700 dark:text-gray-300">
                  Show Grid
                </span>
                <ContextMenu.ItemIndicator>
                  <CheckIcon className="h-3.5 w-3.5" />
                </ContextMenu.ItemIndicator>
              </ContextMenu.CheckboxItem>

              <ContextMenu.CheckboxItem
                checked={showUi}
                onCheckedChange={(state) => {
                  if (typeof state === "boolean") {
                    setShowUi(state);
                  }
                }}
                className={clsx(
                  "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-hidden",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {showUi ? (
                  <EyeOpenIcon className="mr-2 h-3.5 w-3.5" />
                ) : (
                  <EyeClosedIcon className="mr-2 h-3.5 w-3.5" />
                )}
                <span className="grow text-gray-700 dark:text-gray-300">
                  Show UI
                </span>
                <ContextMenu.ItemIndicator>
                  <CheckIcon className="h-3.5 w-3.5" />
                </ContextMenu.ItemIndicator>
              </ContextMenu.CheckboxItem>

              <ContextMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

              <ContextMenu.Group>
                <ContextMenu.GroupLabel className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
                  Region Tools
                </ContextMenu.GroupLabel>
              </ContextMenu.Group>

              {regionToolMenuItems.map(({ label, icon, shortcut }) => (
                <ContextMenu.Item
                  key={`region-tool-menu-item-${label}`}
                  className={clsx(
                    "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-hidden",
                    "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                  )}
                >
                  {icon}
                  <span className="grow text-gray-700 dark:text-gray-300">
                    {label}
                  </span>
                  {shortcut && <span className="text-xs">{shortcut}</span>}
                </ContextMenu.Item>
              ))}

              <ContextMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

              <Menu.Root>
                <Menu.SubmenuTrigger
                  className={clsx(
                    "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-hidden",
                    "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                  )}
                >
                  <Link2Icon className="mr-2 h-3.5 w-3.5" />
                  <span className="grow text-gray-700 dark:text-gray-300">
                    Share
                  </span>
                  <CaretRightIcon className="h-3.5 w-3.5" />
                </Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup
                      className={clsx(
                        "bui-side-right:animate-scale-in",
                        "w-full rounded-md px-1 py-1 text-xs shadow-md",
                        "bg-white dark:bg-gray-800"
                      )}
                    >
                      {users.map(({ name, url }, i) => (
                        <Menu.Item
                          key={`context-menu-primitive-item-${name}`}
                          className={clsx(
                            "flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-hidden md:w-32",
                            "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                          )}
                        >
                          {url ? (
                            <img
                              className="mr-2.5 h-6 w-6 rounded-full"
                              aria-label={"just an image :)"}
                              src={url}
                            />
                          ) : (
                            <PersonIcon className="mr-2.5 h-6 w-6" />
                          )}
                          <span className="text-gray-700 dark:text-gray-300">
                            {name}
                          </span>
                        </Menu.Item>
                      ))}
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>
    </div>
  );
};

export { ContextMenuDemo as ContextMenu };
