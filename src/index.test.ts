import path from "node:path";
import postcss from "postcss";
import tailwind, { type Config } from "tailwindcss";
import { expect, it } from "vitest";
import baseUI from "./index";

const html = String.raw;

function run(input: string, config: Config, plugin = tailwind) {
  const { currentTestName } = expect.getState();

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  });
}

it("should generate boolean data attribute variants", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="bui-disabled:opacity-50" />
          <div class="group">
            <div class="group-bui-disabled:cursor-not-allowed" />
          </div>
          <div class="group/named">
            <div class="group-bui-disabled/named:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-bui-disabled:cursor-not-allowed" />
          <div class="peer/named" />
          <div class="peer-bui-disabled/named:cursor-not-allowed" />
        `,
      },
    ],
    plugins: [baseUI],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchInlineSnapshot(`
      ".bui-disabled\\:opacity-50[data-disabled] {
          opacity: 0.5
      }"
    `);
  });
});

it("should generate value data attribute variants", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="bui-open:opacity-50" />
          <div class="group">
            <div class="group-bui-open:cursor-not-allowed" />
          </div>
          <div class="group/named">
            <div class="group-bui-open/named:cursor-not-allowed" />
          </div>
          <div class="peer" />
          <div class="peer-bui-open:cursor-not-allowed" />
          <div class="peer/named" />
          <div class="peer-bui-open/named:cursor-not-allowed" />
        `,
      },
    ],
    plugins: [baseUI],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate [width|height] utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="w-bui-accordion-panel" />
          <div class="h-bui-accordion-panel" />
          <div class="w-bui-active-tab" />
          <div class="h-bui-anchor" />
          <div class="w-bui-available" />
          <div class="h-bui-collapsible-panel" />
          <div class="w-bui-popup" />
          <div class="h-bui-positioner" />
          <div class="w-bui-scroll-area-corner" />
          <div class="h-bui-scroll-area-thumb" />
        `,
      },
    ],
    plugins: [baseUI],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate `content-transform-origin` utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="origin-bui" />
        `,
      },
    ],
    plugins: [baseUI],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});

it("should generate tooltip transform utilities", async () => {
  const config = {
    content: [
      {
        raw: html`
          <div class="translate-x-bui-toast-swipe-movement-x" />
          <div class="translate-y-bui-toast-swipe-movement-y" />
          <div class="translate-y-bui-toast-offset-y" />
        `,
      },
    ],
    plugins: [baseUI],
  };

  return run("@tailwind utilities", config).then((result) => {
    expect(result.css).toMatchSnapshot();
  });
});
