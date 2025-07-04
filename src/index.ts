import plugin from "tailwindcss/plugin";

interface Options {
  variantPrefix?: string;
}

export = plugin.withOptions<Options>(
  (options) =>
    ({ addUtilities, matchVariant }) => {
      const { variantPrefix } = {
        variantPrefix: "bui",
        ...options,
      };

      // Adds variants for boolean data attributes
      const booleanAttributes = {
        "anchor-hidden": "anchor-hidden",
        checked: "checked",
        closed: "closed",
        complete: "complete",
        dirty: "dirty",
        disabled: "disabled",
        dragging: "dragging",
        "ending-style": "ending-style",
        // verify this works
        expanded: "expanded",
        filled: "filled",
        focusable: "focusable",
        focused: "focused",
        hidden: "hidden",
        highlighted: "highlighted",
        hovering: "hovering",
        indeterminate: "indeterminate",
        invalid: "invalid",
        limited: "limited",
        multiple: "multiple",
        nested: "nested",
        "nested-dialog-open": "nested-dialog-open",
        open: "open",
        "panel-open": "panel-open",
        "popup-open": "popup-open",
        pressed: "pressed",
        progressing: "progressing",
        readonly: "readonly",
        required: "required",
        scrolling: "scrolling",
        scrubbing: "scrubbing",
        selected: "selected",
        "starting-style": "starting-style",
        swiping: "swiping",
        touched: "touched",
        uncentered: "uncentered",
        unchecked: "unchecked",
        valid: "valid",
        visible: "visible",
      } as const;

      matchVariant(
        variantPrefix,
        (value) => {
          return `&[data-${value}]`;
        },
        {
          values: booleanAttributes,
        },
      );

      // Adds variants for value data attributes
      for (const [attributeName, attributeValues] of Object.entries({
        align: ["start", "center", "end"],
        side: ["top", "bottom", "left", "right", "inline-end", "inline-start"],
        orientation: ["horizontal", "vertical"],
        direction: ["down"],
        "activation-direction": ["left", "right", "up", "down", "none"],
        instant: ["delay", "dismiss", "focus"],
        "swipe-direction": ["up", "down", "left", "right"],
        // "index": "number",
        // "type": "string",
      } as const)) {
        const values = Object.fromEntries(
          attributeValues.map((item) => [item, item]),
        );

        matchVariant(
          `${variantPrefix}-${attributeName}`,
          (value) => {
            return `&[data-${attributeName}="${value}"]`;
          },
          {
            values,
          },
        );
      }

      // Adds the following [width|height] utilities
      // "--accordion-panel-[width|height]",
      // "--active-tab-[width|height]",
      // "--anchor-[width|height]",
      // "--available-[width|height]",
      // "--collapsible-panel-[width|height]",
      // "--popup-[width|height]",
      // "--positioner-[width|height]",
      // "--scroll-area-corner-[width|height]",
      // "--scroll-area-thumb-[width|height]",
      (
        [
          "accordion-panel",
          "active-tab",
          "anchor",
          "available",
          "collapsible-panel",
          "popup",
          "positioner",
          "scroll-area-corner",
          "scroll-area-thumb",
        ] as const
      ).forEach((kind) => {
        addUtilities({
          [`.w-${variantPrefix}-${kind}`]: {
            width: `var(--${kind}-width)`,
          },
        });
        addUtilities({
          [`.h-${variantPrefix}-${kind}`]: {
            height: `var(--${kind}-height)`,
          },
        });
      });

      // Adds the following [x|y] utilities
      // "--toast-swipe-movement-[x|y]
      // "--toast-offset-y -- no x CSS variable for toast-offset
      (["toast-swipe-movement", "toast-offset"] as const).forEach((swipe) => {
        if (swipe !== "toast-offset") {
          addUtilities({
            [`.translate-x-${variantPrefix}-${swipe}-x`]: {
              transform: `translateX(var(--${swipe}-x))`,
            },
          });
        }
        addUtilities({
          [`.translate-y-${variantPrefix}-${swipe}-y`]: {
            transform: `translateY(var(--${swipe}-y))`,
          },
        });
      });

      addUtilities({
        [`.origin-${variantPrefix}`]: {
          "transform-origin": "var(--transform-origin)",
        },
      });

      addUtilities({
        [`.z-${variantPrefix}-toast`]: {
          "z-index": "calc(1000-var(--toast-index))",
        },
      });

      // TODO: Add support for the following data attributes
      // "--active-tab-top": "number",
      // "--active-tab-bottom": "number",
      // "--active-tab-left": "number",
      // "--active-tab-right": "number",
      // "--toast-index": "number",
      // "--nested-dialogs": "number",
    },
);
