/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    }
  },
  plugins: []
}
