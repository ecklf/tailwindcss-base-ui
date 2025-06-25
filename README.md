<p align="center">
  <a align='center' href="https://tailwindcss-base-ui.vercel.app">
    <picture>
      <source type="image/webp" srcset="https://raw.githubusercontent.com/ecklf/tailwindcss-base-ui/main/demo/public/static/og.webp">
      <img width="967" height="auto" src="https://raw.githubusercontent.com/ecklf/tailwindcss-base-ui/main/demo/public/static/og.png" />
    </picture>
  </a>
</p>

<p align="center">
  Utilities and variants for styling Base UI state
</p>

<div align="center">

<a href="https://tailwindcss.com">![tailwindcss v4 ready](https://img.shields.io/badge/tailwindcss-v4%20ready-0F172A?logo=tailwindcss&style=flat&labelColor=38bdf8&logoColor=ffffff)</a>
<a href="https://www.npmjs.com/package/tailwindcss-base-ui">![npm version](https://img.shields.io/npm/v/tailwindcss-base-ui.svg)</a>
<a href="https://www.npmjs.com/package/tailwindcss-base-ui">![npm downloads](https://img.shields.io/npm/dm/tailwindcss-base-ui.svg)</a>

</div>


> [!IMPORTANT]
> This is still a WIP, most of the code was ported with Cursor from [tailwindcss-radix](https://github.com/ecklf/tailwindcss-radix)

## What is this?

The main purpose of this library is adding classnames for accessing Base UI data attributes, which gains you the benefit of auto-completion compared to using `data-*` variants.

**TL;DR** It's [@headlessui-tailwindcss](https://github.com/tailwindlabs/headlessui/tree/main/packages/@headlessui-tailwindcss) for Base UI.

## Installation

```sh
pnpm add tailwindcss-base-ui
```

## Demo

Click on the banner to check out the demo components. You can find the code inside the [demo](https://github.com/ecklf/tailwindcss-base-ui/tree/main/demo) folder.

## Usage

### With [@plugin directive](https://tailwindcss.com/docs/functions-and-directives#plugin-directive) (recommended)

**Default prefix**
```css
/* Generates `bui-*` utilities for data attributes */
@plugin "tailwindcss-base-ui";
```

**Custom prefix**
```css
/* Generates `ui-*` utilities for data attributes */
@plugin "tailwindcss-base-ui" {
  variantPrefix: ui;
}
```

### With [@config directive](https://tailwindcss.com/docs/functions-and-directives#config-directive)

**Default prefix**
```js
module.exports = {
  // --snip --
  plugins: [
    // Generates `bui-*` utilities for data attributes
    require("tailwindcss-base-ui")(),
  ],
};
```

**Custom prefix**
```js
module.exports = {
  // --snip --
  plugins: [
    // Generates `ui-*` utilities for data attributes
    require("tailwindcss-base-ui")({
      variantPrefix: "ui",
    }),
  ],
};
```

**Load configuration**
```css
@config "../../tailwind.config.js";
```

### Styling state

#### Basic usage

This plugin works with CSS attribute selectors. Use the variants based on the `data-*` attribute added by Base UI.

```tsx
import React from "react";
import * as DropdownMenuPrimitive from "@base-ui-ui/react-dropdown-menu";

const App = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="border-black bui-ui-state-open:border-2">
        Trigger
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content>
        <DropdownMenuPrimitive.Item>Item</DropdownMenuPrimitive.Item>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};

export default App;
```

#### Accessing parent state

When you need to style an element based on the state of a parent element, mark the parent with the `group` class and style the target with `group-bui-*` modifiers.

Example usage of a conditional transform for a Base UI `Accordion`:

```tsx
import React from "react";
import * as AccordionPrimitive from "@base-ui-ui/react-accordion";
import { ChevronDownIcon } from "@base-ui-ui/react-icons";

const Accordion = () => {
  return (
    <AccordionPrimitive.Root type="multiple">
      <AccordionPrimitive.Item value="item-1">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="group">
            <div className="flex items-center">
              Item 1
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-bui-open:rotate-180" />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>Content 1</AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
      <AccordionPrimitive.Item value="item-2">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="group">
            <div className="flex items-center">
              Item 2
              <ChevronDownIcon className="w-5 h-5 ml-2 transform group-bui-state-open:rotate-180" />
            </div>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content>Content 2</AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  );
};

export default App;
```

#### Accessing sibling state

When you need to style an element based on the state of a sibling element, mark the sibling with the `peer` class and style the target with `peer-bui-*` modifiers.

Example usage of a conditional icon color for a sibling of a Base UI `Checkbox`:

```tsx
import * as CheckboxPrimitive from "@base-ui-ui/react-checkbox";
import { CheckIcon, TargetIcon } from "@base-ui-ui/react-icons";
import React from "react";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <CheckboxPrimitive.Root id="c1" defaultChecked className="peer h-5 w-5">
        <CheckboxPrimitive.Indicator>
          <CheckIcon />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <TargetIcon className="text-red-500 peer-bui-checked:text-green-500" />
    </>
  );
};

export default App;
```

#### Disabled state

Use the generated `disabled` variant.

```tsx
import React from "react";
import * as ContextMenuPrimitive from "@base-ui-ui/react-context-menu";

const ContextMenu = () => {
  return (
    // --snip--
    <ContextMenuPrimitive.Item
      disabled
      className="bui-disabled:opacity-50 bui-disabled:cursor-not-allowed"
    >
      Item
    </ContextMenuPrimitive.Item>
    // --snip--
  );
};
```

[MIT](LICENSE)
