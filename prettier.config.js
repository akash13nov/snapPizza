/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'all',
  importOrder: ['^@', '^[a-zA-Z0-9-]+', '^[./]'],
  printWidth: 120,
};
