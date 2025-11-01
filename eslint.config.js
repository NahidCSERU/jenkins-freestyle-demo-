import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        // Node.js environment globals
        require: true,
        module: true,
        console: true,
        process: true,

        // Jest (testing framework) globals
        describe: true,
        it: true,
        test: true,
        expect: true,
      },
    },
  },
];
