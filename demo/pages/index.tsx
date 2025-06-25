import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { Fragment } from "react";
import { clsx } from "clsx";
import GitHubButton from "react-github-btn";
import { Accordion } from "../components/accordion";
import { AlertDialog } from "../components/alert-dialog";
import { AspectRatio } from "../components/aspect-ratio";
import { Avatar } from "../components/avatar";
import { Checkbox } from "../components/checkbox";
import { Collapsible } from "../components/collapsible";
import { ContextMenu } from "../components/context-menu";
import { Dialog } from "../components/dialog";
import { DropdownMenu } from "../components/dropdown-menu";
import { HoverCard } from "../components/hover-card";
import { Menubar } from "../components/menubar";
import { NavigationMenuDemo } from "../components/navigation-menu";
import { Popover } from "../components/popover";
import { Progress } from "../components/progress";
import { RadioGroup } from "../components/radio-group";
import { Select } from "../components/select";
import { DemoCard } from "../components/shared/demo-card";
import { ThemeSwitcher } from "../components/shared/theme-switcher";
import { Slider } from "../components/slider";
import { Switch } from "../components/switch";
import { Tabs } from "../components/tabs";
import { Toast } from "../components/toast";
import { Toggle } from "../components/toggle";
import { ToggleGroup } from "../components/toggle-group";
import { Toolbar } from "../components/toolbar";
import { Tooltip } from "../components/tooltip";
import { CommandMenu } from "../components/shared/command-menu";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const REPO_URL = "https://github.com/ecklf/tailwindcss-base-ui/blob/main/demo";

interface BaseUIComponent {
  label: string;
  link: string;
  component: JSX.Element;
  isNew?: boolean;
  center?: boolean;
  wrapper?: React.ReactNode;
}

const BASE_UI_COMPONENTS: BaseUIComponent[] = [
  {
    label: "Accordion",
    link: `${REPO_URL}/components/accordion.tsx`,
    center: true,
    component: (
      <div className="w-full max-w-sm">
        <Accordion />
      </div>
    ),
  },
  {
    label: "Alert Dialog",
    link: `${REPO_URL}/components/alert-dialog.tsx`,
    component: <AlertDialog />,
  },
  {
    label: "Aspect Ratio",
    link: `${REPO_URL}/components/aspect-ratio.tsx`,
    component: (
      <div className="w-full max-w-sm">
        <AspectRatio />
      </div>
    ),
  },
  {
    label: "Avatar",
    link: `${REPO_URL}/components/avatar.tsx`,
    component: (
      <div className="grid z-10 grid-cols-4 gap-6">
        <Avatar variant={Avatar.variant.Circle} />
        <Avatar variant={Avatar.variant.Circle} renderInvalidUrls isOnline />
        <Avatar variant={Avatar.variant.Rounded} />
        <Avatar variant={Avatar.variant.Rounded} renderInvalidUrls isOnline />
      </div>
    ),
  },
  {
    label: "Checkbox",
    link: `${REPO_URL}/components/checkbox.tsx`,
    component: (
      <div className="p-3 max-w-sm bg-white rounded-md dark:bg-gray-800">
        <Checkbox />
      </div>
    ),
  },
  {
    label: "Collapsible",
    link: `${REPO_URL}/components/collapsible.tsx`,
    center: true,
    component: (
      <div className="w-full max-w-sm">
        <Collapsible />
      </div>
    ),
  },
  {
    label: "Context Menu",
    link: `${REPO_URL}/components/context-menu.tsx`,
    center: true,
    component: <ContextMenu />,
  },
  {
    label: "Dialog",
    link: `${REPO_URL}/components/dialog.tsx`,
    component: <Dialog />,
  },
  {
    label: "Dropdown Menu",
    link: `${REPO_URL}/components/dropdown-menu.tsx`,
    center: true,
    component: <DropdownMenu />,
  },
  {
    label: "Hover Card",
    link: `${REPO_URL}/components/hover-card.tsx`,
    component: <HoverCard />,
  },
  {
    label: "Menubar",
    link: `${REPO_URL}/components/menubar.tsx`,
    center: true,
    component: (
      <div>
        <Menubar />
      </div>
    ),
  },
  {
    label: "Navigation Menu",
    link: `${REPO_URL}/components/navigation-menu.tsx`,
    center: true,
    component: (
      <div>
        <NavigationMenuDemo />
      </div>
    ),
  },
  {
    label: "Popover",
    link: `${REPO_URL}/components/popover.tsx`,
    center: true,
    component: <Popover />,
  },
  {
    label: "Progress",
    link: `${REPO_URL}/components/progress.tsx`,
    component: (
      <div className="w-full max-w-sm">
        <Progress />
      </div>
    ),
  },
  {
    label: "Radio Group",
    link: `${REPO_URL}/components/radio-group.tsx`,
    component: (
      <div className="flex justify-center items-center px-4 py-3 bg-white rounded-md dark:bg-gray-800">
        <RadioGroup />
      </div>
    ),
  },
  {
    label: "Select",
    link: `${REPO_URL}/components/select.tsx`,
    component: <Select />,
  },
  {
    label: "Slider",
    link: `${REPO_URL}/components/slider.tsx`,
    component: <Slider />,
  },
  {
    label: "Switch",
    link: `${REPO_URL}/components/switch.tsx`,
    component: <Switch />,
  },
  {
    label: "Tabs",
    link: `${REPO_URL}/components/tabs.tsx`,
    component: (
      <div className="w-full max-w-sm">
        <Tabs />
      </div>
    ),
  },
  {
    label: "Toast",
    link: `${REPO_URL}/components/toast.tsx`,
    component: (
      <div>
        <Toast />
      </div>
    ),
  },
  {
    label: "Toggle",
    link: `${REPO_URL}/components/toggle.tsx`,
    component: <Toggle />,
  },
  {
    label: "Toggle Group",
    link: `${REPO_URL}/components/toggle-group.tsx`,
    component: <ToggleGroup />,
  },
  {
    label: "Toolbar",
    link: `${REPO_URL}/components/toolbar.tsx`,
    component: <Toolbar />,
  },
  {
    label: "Tooltip",
    link: `${REPO_URL}/components/tooltip.tsx`,
    component: <Tooltip />,
  },
];

const Hero = () => {
  return (
    <div className="inline-flex flex-col justify-self-center items-center mt-8 space-y-4 w-full">
      <svg
        viewBox="0 0 248 31"
        className="w-auto h-4 text-gray-900 dark:text-white"
      >
        <title>tailwindcss-base-ui</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
          fill="#38bdf8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849H93.52v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 0 1 2.477-2.463 2.475 2.475 0 0 1 2.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094L137.8 26.961h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 0 1 2.478-2.463 2.475 2.475 0 0 1 2.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
          fill="currentColor"
        />
      </svg>

      <div className="flex space-x-1">
        <svg
          width="17"
          height="24"
          viewBox="0 0 17 24"
          fill="currentcolor"
          aria-label="Base UI"
          className="h-5 w-auto self-center text-gray-900 dark:text-white"
        >
          <title>tailwindcss-base-ui</title>
          <path d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z" />
          <path d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z" />
        </svg>
      </div>

      <div className="min-h-[34px]">
        <GitHubButton
          href="https://github.com/ecklf/tailwindcss-base-ui"
          aria-label="Star ecklf/tailwindcss-base-ui on GitHub"
          data-color-scheme="dark"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
        >
          Star
        </GitHubButton>
      </div>

      <div className="flex items-center space-x-4">
        <div>
          <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
              <TooltipPrimitive.Trigger asChild>
                <div
                  className={clsx(
                    "inline-flex select-none justify-center rounded-md px-2 py-1.5 text-sm font-medium",
                    "bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-800",
                    "border border-gray-300 dark:border-transparent",
                    "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  )}
                >
                  <QuestionMarkCircleIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </div>
              </TooltipPrimitive.Trigger>
              <TooltipPrimitive.Content
                sideOffset={4}
                className={clsx(
                  "radix-side-top:animate-slide-down-fade",
                  "radix-side-right:animate-slide-left-fade",
                  "radix-side-bottom:animate-slide-up-fade",
                  "radix-side-left:animate-slide-right-fade",
                  "inline-flex items-center rounded-md px-4 py-2.5",
                  "bg-white dark:bg-gray-800"
                )}
              >
                <TooltipPrimitive.Arrow className="text-white fill-current dark:text-gray-800" />
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
                    Show Menu
                  </span>
                  <div className="flex justify-center items-center space-x-1">
                    <kbd className="w-auto h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 pt-0.5 px-1.5">
                      ⌘{" "}
                    </kbd>
                    <span className="">+</span>
                    <kbd className="w-auto text-xs h-5 flex items-center justify-center select-none hover:cursor-pointer rounded-md font-bold bg-black/10 dark:bg-white/10 px-1.5">
                      K
                    </kbd>
                  </div>
                </div>
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
          </TooltipPrimitive.Provider>
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <Fragment>
      <Head>
        <title>Tailwind CSS Base UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title="Tailwind CSS Base UI"
        description="Utilities and variants for styling Base UI state"
        canonical={process.env.NEXT_PUBLIC_URL}
        openGraph={{
          url: process.env.NEXT_PUBLIC_URL,
          title: "Tailwind CSS Base UI",
          description: "Utilities and variants for styling Base UI state",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}/static/og.png`,
              width: 1200,
              height: 630,
              alt: "Tailwind CSS Base UI",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@ecklflorentin",
          site: "@ecklf",
          cardType: "summary_large_image",
        }}
      />

      <Hero />
      <CommandMenu<BaseUIComponent>
        items={BASE_UI_COMPONENTS}
        onSelect={({ item, modifiers }) => {
          if (modifiers.control) {
            const newWindow = window.open(item.link, "_blank");
            if (newWindow) setTimeout(() => newWindow.focus(), 10);
          } else {
            const element = document.getElementById(
              item.label.replace(" ", "_").toLowerCase()
            );
            if (element) {
              requestAnimationFrame(() =>
                element.scrollIntoView({ behavior: "smooth" })
              );
            }
          }
        }}
      />

      <div className="mx-auto grid w-full max-w-(--breakpoint-2xl) grid-cols-1 gap-4 px-4 py-8 md:gap-6 md:px-6 lg:grid-cols-2">
        {BASE_UI_COMPONENTS.map(({ label, link, component, center }) => (
          <DemoCard
            variant={center && DemoCard.variant.JustifyCenter}
            key={`demo-card-${label}`}
            data={{
              title: label,
              link: link,
            }}
          >
            {component}
          </DemoCard>
        ))}
      </div>
    </Fragment>
  );
};

export default Demo;
