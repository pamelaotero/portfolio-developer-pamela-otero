// eslint-disable-next-line @typescript-eslint/no-require-imports
const colors = require('tailwindcss/colors'); // NOTE: Importa o módulo de cores do Tailwind

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Certifique-se de incluir os diretórios corretos
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#63b3ed",
          DEFAULT: "#4299e1",
          dark: "#3182ce",
        },
        secondary: {
          light: "#fbb6ce",
          DEFAULT: "#f687b3",
          dark: "#d53f8c",
        },
        neutral: colors.gray, // Usa a paleta de cinzas padrão do Tailwind
        background: "var(--background)", // Variável CSS para background
        foreground: "var(--foreground)", // Variável CSS para foreground
      },
    },
  },
  plugins: [],
};
