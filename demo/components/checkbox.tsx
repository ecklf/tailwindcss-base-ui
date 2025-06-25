import { Checkbox as CheckboxPrimitive } from "@base-ui-components/react/checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Field } from "@base-ui-components/react/field";
import { clsx } from "clsx";
import React from "react";

const Checkbox = () => {
  return (
    <Field.Root className="flex items-center">
      <CheckboxPrimitive.Root
        id="c1"
        defaultChecked
        className={clsx(
          "flex justify-center items-center w-5 h-5 rounded-sm",
          "bui-checked:bg-purple-600 bui-unchecked:bg-gray-100 dark:bui-unchecked:bg-gray-900",
          "focus:outline-hidden focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="self-center w-4 h-4 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <Field.Label
        htmlFor="c1"
        className="ml-3 text-sm font-medium text-gray-900 select-none dark:text-gray-100"
      >
        Accept terms and conditions
      </Field.Label>
    </Field.Root>
  );
};

export { Checkbox };
