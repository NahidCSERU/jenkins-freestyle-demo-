import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        node: true,
        jest: true,
      },
    },
    rules: {
      // নিজের নিয়ম চাইলে এখানে যোগ করো
    },
  },
];
