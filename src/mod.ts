import { plugin as _plugin } from "./plugin.ts";

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
