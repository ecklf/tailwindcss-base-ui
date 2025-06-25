import { clsx } from "clsx";
import React from "react";
import { RadioGroup } from "@base-ui-components/react/radio-group";
import { Radio } from "@base-ui-components/react/radio";

const starters = [
  { id: "red", title: "Bulbasaur" },
  { id: "green", title: "Charmander" },
  { id: "blue", title: "Squirtle" },
];

const RadioGroupDemo = () => {
  const [_value, setValue] = React.useState(starters[0].title);

  return (
    <form>
      <legend className="text-sm font-medium leading-4 text-gray-900 dark:text-gray-100">
        Choose your starter
      </legend>
      <RadioGroup
        aria-label="Pokemon starters"
        defaultValue={"Bulbasaur"}
        onValueChange={setValue}
      >
        <div className="mt-3 space-y-3">
          {starters.map((pokemon) => (
            <div key={pokemon.id} className="flex items-center">
              <Radio.Root
                id={pokemon.id}
                value={pokemon.title}
                className={clsx(
                  "peer relative w-4 h-4 rounded-full",
                  // Setting the background in dark properly requires a workaround (see css/tailwind.css)
                  "border border-transparent text-white",
                  "bui-checked:bg-purple-600",
                  "bui-unchecked:bg-gray-100 dark:bui-unchecked:bg-gray-900",
                  "focus:outline-hidden focus:ring-0 focus:ring-offset-0 focus-visible:ring-3 focus-visible:ring-purple-500 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800"
                )}
              >
                <Radio.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </Radio.Indicator>
              </Radio.Root>
              <label
                htmlFor={pokemon.id}
                className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                {pokemon.title}
              </label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </form>
  );
};

export { RadioGroupDemo as RadioGroup };
