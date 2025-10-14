import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier/recommended";
import oxlint from "eslint-plugin-oxlint";

export default withNuxt(prettier, ...oxlint.configs["flat/recommended"]);
