import { Menubar } from "@base-ui-components/react/menubar";
import { Menu } from "@base-ui-components/react/menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import { clsx } from "clsx";
import React from "react";

const MenubarSeparator = ({
  children,
  ...rest
}: { children?: React.ReactNode }) => (
  <Menu.Separator
    className="my-1 h-px mx-1.5 bg-gray-200 dark:bg-gray-700"
    {...rest}
  >
    {children}
  </Menu.Separator>
);

const MenubarTrigger = ({
  children,
  ...rest
}: { children?: React.ReactNode }) => (
  <Menu.Trigger
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "radix-state-open:bg-gray-100 dark:radix-state-open:bg-gray-900",
      "px-4 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    {children}
  </Menu.Trigger>
);

const MenubarSubTrigger = ({
  children,
  ...rest
}: { children?: React.ReactNode }) => (
  <Menu.SubmenuTrigger
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    {...rest}
  >
    <div className="flex justify-between items-center w-full">
      {children}
      <ChevronRightIcon className="-mr-1 ml-4 font-medium text-gray-700 dark:text-gray-100" />
    </div>
  </Menu.SubmenuTrigger>
);

const MenubarItem = ({
  children,
  shortcut,
  disabled,
  ...rest
}: { children?: React.ReactNode; shortcut?: string; disabled?: boolean }) => (
  <Menu.Item
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "flex justify-between items-center w-full",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    disabled={disabled}
    {...rest}
  >
    <div className="flex justify-between items-center w-full">
      {children}
      {shortcut && (
        <span className="ml-4 text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900">
          {shortcut}
        </span>
      )}
    </div>
  </Menu.Item>
);

const MenubarCheckboxItem = ({
  children,
  checked,
  onCheckedChange,
  ...rest
}: {
  children?: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: () => void;
}) => (
  <Menu.CheckboxItem
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "flex justify-between items-center w-full",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    checked={checked}
    onCheckedChange={onCheckedChange}
    {...rest}
  >
    <div className="flex items-center">
      <div className="relative h-3.5 w-3.5 -ml-1">
        <CheckIcon className="h-3.5 w-3.5 -ml-0.5 mr-1.5" />
      </div>
      <div className="ml-1">{children}</div>
    </div>
  </Menu.CheckboxItem>
);

const MenubarRadioItem = ({
  children,
  value,
  ...rest
}: { children?: React.ReactNode; value?: string }) => (
  <Menu.RadioItem
    className={clsx(
      "cursor-default radix-disabled:opacity-50 radix-disabled:cursor-not-allowed",
      "flex justify-between items-center w-full",
      "px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-900",
      "text-sm font-medium",
      "text-gray-700 dark:text-gray-100",
      "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
    )}
    value={value}
    {...rest}
  >
    <div className="flex items-center">
      <div className="relative h-3.5 w-3.5 -ml-1">
        <DotFilledIcon className="absolute inset-0" />
      </div>
      <div className="ml-1">{children}</div>
    </div>
  </Menu.RadioItem>
);

const RADIO_ITEMS = ["rauchg", "steventey", "0xca0a"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const MenubarComponent = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  const contentClasses = "bg-white dark:bg-gray-800 rounded-md p-1 origin-bui";

  return (
    <Menubar className="flex relative flex-row -space-x-1 bg-white rounded-lg dark:bg-gray-800">
      <Menu.Root>
        <MenubarTrigger>File</MenubarTrigger>
        <Menu.Portal>
          <Menu.Backdrop />
          <Menu.Positioner>
            <Menu.Popup className={contentClasses}>
              <Menu.Arrow />
              <MenubarItem shortcut="⌘ T">New Tab</MenubarItem>
              <MenubarItem shortcut="⌘ N">New Window</MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <Menu.Root>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <Menu.Portal>
                  <Menu.Backdrop />
                  <Menu.Positioner>
                    <Menu.Popup className={contentClasses}>
                      <Menu.Arrow />
                      <MenubarItem>Email Link</MenubarItem>
                      <MenubarItem>Messages</MenubarItem>
                      <MenubarItem>Notes</MenubarItem>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>

              <MenubarSeparator />
              <MenubarItem shortcut="⌘ P">Print…</MenubarItem>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <MenubarTrigger>Edit</MenubarTrigger>
        <Menu.Portal>
          <Menu.Backdrop />
          <Menu.Positioner>
            <Menu.Popup className={contentClasses}>
              <Menu.Arrow />
              <MenubarItem shortcut="⌘ Z">Undo</MenubarItem>
              <MenubarItem shortcut="⇧ ⌘ Z">Redo</MenubarItem>
              <MenubarSeparator />
              <Menu.Root>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <Menu.Portal>
                  <Menu.Backdrop />
                  <Menu.Positioner>
                    <Menu.Popup className={contentClasses}>
                      <Menu.Arrow />
                      <MenubarItem>Search the web…</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Find…</MenubarItem>
                      <MenubarItem>Find Next</MenubarItem>
                      <MenubarItem>Find Previous</MenubarItem>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <MenubarTrigger>View</MenubarTrigger>
        <Menu.Portal>
          <Menu.Backdrop />
          <Menu.Positioner>
            <Menu.Popup className={contentClasses}>
              <Menu.Arrow />
              {CHECK_ITEMS.map((item) => (
                <MenubarCheckboxItem
                  key={item}
                  checked={checkedSelection.includes(item)}
                  onCheckedChange={() =>
                    setCheckedSelection((current) =>
                      current.includes(item)
                        ? current.filter((el) => el !== item)
                        : current.concat(item)
                    )
                  }
                >
                  {item}
                </MenubarCheckboxItem>
              ))}

              <MenubarSeparator />
              <MenubarItem shortcut="⌘ R">Reload</MenubarItem>
              <MenubarItem shortcut="⇧ ⌘ R">Force Reload</MenubarItem>

              <MenubarSeparator />
              <MenubarItem>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Hide Sidebar</MenubarItem>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      <Menu.Root>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <Menu.Portal>
          <Menu.Backdrop />
          <Menu.Positioner>
            <Menu.Popup className={contentClasses}>
              <Menu.Arrow />
              <Menu.RadioGroup
                value={radioSelection}
                onValueChange={setRadioSelection}
              >
                {RADIO_ITEMS.map((item) => (
                  <MenubarRadioItem key={item} value={item}>
                    {item}
                  </MenubarRadioItem>
                ))}

                <MenubarSeparator />
                <MenubarItem>Edit…</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Add Profile…</MenubarItem>
              </Menu.RadioGroup>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
    </Menubar>
  );
};

export { MenubarComponent as Menubar };
