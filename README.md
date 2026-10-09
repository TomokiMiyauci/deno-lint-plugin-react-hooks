# deno-lint-plugin-react-hooks

React Hooks rules for Deno Lint

## Install

```bash
deno add jsr:@deno-lint/plugin-react-hooks
```

## Usage

Register to deno.json:

```json
{
  "lint": {
    "plugins": ["@deno-lint/plugin-react-hooks"]
  }
}
```

Enable specific rules:

```json
{
  "lint": {
    "plugins": ["@deno-lint/plugin-react-hooks"],
    "rules": {
      "include": ["react-hooks/rules-of-hooks", "react-hooks/exhaustive-deps"]
    }
  }
}
```

## License

[MIT](LICENSE)
