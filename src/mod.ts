import { plugin as _plugin } from "./plugin.ts";

/**
 * React Hooks rules for Deno Lint.
 * The plugin adapts rules from `eslint-plugin-react-hooks` for Deno Lint.
 * Rule behavior and compatibility depend on the underlying rules and the adapter.
 *
 * ## Usage
 *
 * @example Register to deno.json
 * ```json
 * {
 *   "lint": {
 *     "plugins": ["@deno-lint/plugin-react-hooks"],
 *   }
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
 */
const plugin: Deno.lint.Plugin = _plugin;

export default plugin;
