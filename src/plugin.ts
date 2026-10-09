import { toDenoRules } from "@deno-lint/eslint-compat";
import eslintPlugin from "eslint-plugin-react-hooks";

export const plugin = {
  name: "react-hooks",
  rules: toDenoRules(eslintPlugin.rules),
} satisfies Deno.lint.Plugin;

declare const fileName: string;
declare const source: string;
