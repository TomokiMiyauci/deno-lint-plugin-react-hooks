import { plugin as _plugin } from "./plugin.ts";

/**
 * React Hooks rules for Deno Lint.
 *
 * @example Register to deno.json
 * ```json
 * {
 *   "lint": {
 *     "plugins": ["@deno-lint/plugin-react-hooks"],
 *   },
 * }
 * ```
 *
 * @example Enable specific rules
 * ```json
 * {
 *   "lint": {
 *     "plugins": ["@deno-lint/plugin-react-hooks"],
 *     "rules": {
 *       "include": ["react-hooks/rules-of-hooks", "react-hooks/exhaustive-deps"]
 *     }
 *   }
 * }
 * ```
 *
 * @module
 */

/**
 * React Hooks rules adapted for Deno Lint.
 *
 * @example
 * ```ts
 * import plugin from "@deno-lint/plugin-react-hooks";
 * declare const fileName: string;
 * declare const source: string;
 *
 * Deno.lint.runPlugin(plugin, fileName, source);
 * ```
 */
const plugin: Deno.lint.Plugin = _plugin;

export default plugin;
