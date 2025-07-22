import { sxzz } from "@sxzz/eslint-config";

export default sxzz()
  .removeRules("import/no-duplicates", "vue/no-unused-refs", "vue/require-default-prop")
  .overrideRules({
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      { registeredComponentsOnly: false },
    ],
  })
  .append({
    ignores: ["**/dist/**", "**/assets/**", "**/*.js", "**/*.d.ts", "**/*.mjs"],
  });
