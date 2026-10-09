import { plugin } from "./plugin.ts";
import { assertArrayIncludes, assertEquals } from "@std/assert";

Deno.test("rules-of-hooks", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "test.jsx",
    `import { useEffect, useState } from "react";

useEffect(() => {});
`,
  );

  assertEquals(
    diagnostics.some((diagnostic) =>
      diagnostic.id === "react-hooks/rules-of-hooks"
    ),
    true,
  );
});

Deno.test("exhanstive-deps", () => {
  const diagnostics = Deno.lint.runPlugin(
    plugin,
    "test.jsx",
    `function Component({ value }) {
          useEffect(() => {
            console.log(value);
          }, []);
        }`,
  );

  assertEquals(
    diagnostics.some((diagnostic) =>
      diagnostic.id === "react-hooks/exhaustive-deps"
    ),
    true,
  );
});

Deno.test("plugin name", () => {
  assertEquals(plugin.name, "react-hooks");
});

Deno.test("rule names", () => {
  const ruleNames = Object.keys(plugin.rules);

  assertArrayIncludes(ruleNames, [
    "exhaustive-deps", // https://react.dev/reference/eslint-plugin-react-hooks/lints/exhaustive-deps
    "rules-of-hooks", // https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks
    "component-hook-factories", // https://react.dev/reference/eslint-plugin-react-hooks/lints/component-hook-factories
    "config", // https://react.dev/reference/eslint-plugin-react-hooks/lints/config
    "error-boundaries", // https://react.dev/reference/eslint-plugin-react-hooks/lints/error-boundaries
    "gating", // https://react.dev/reference/eslint-plugin-react-hooks/lints/gating
    "globals", // https://react.dev/reference/eslint-plugin-react-hooks/lints/globals
    "hooks", // https://react.dev/reference/eslint-plugin-react-hooks/lints/hooks
    "immutability", // https://react.dev/reference/eslint-plugin-react-hooks/lints/immutability
    "incompatible-library", // https://react.dev/reference/eslint-plugin-react-hooks/lints/incompatible-library
    "preserve-manual-memoization", // https://react.dev/reference/eslint-plugin-react-hooks/lints/preserve-manual-memoization
    "purity", // https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
    "refs", // https://react.dev/reference/eslint-plugin-react-hooks/lints/refs
    "set-state-in-effect", // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect
    "set-state-in-render", // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-render
    "static-components", // https://react.dev/reference/eslint-plugin-react-hooks/lints/static-components
    "unsupported-syntax", // https://react.dev/reference/eslint-plugin-react-hooks/lints/unsupported-syntax
    "use-memo", // https://react.dev/reference/eslint-plugin-react-hooks/lints/use-memo
  ]);
});
