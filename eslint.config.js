import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  {
    // Default ESLint rules
    rules: {
      // Add any custom rules here
    },
  },
  {
    // Tailwind CSS plugin configuration
    plugins: {
      tailwindcss,
    },
    rules: {
      // Enable recommended Tailwind CSS rules
      ...tailwindcss.configs.recommended.rules,
    },
  },
];