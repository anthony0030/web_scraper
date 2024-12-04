const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      container: {
        center: true, // To center containers by default
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        bootstrapLight: {
          "primary": "#0d6efd",
          "primary-content": "#ffffff",

          "secondary": "#6c757d",
          "secondary-content": "#ffffff",

          "accent": "#00ffff",
          "accent-content": "#ffffff",

          "neutral": "#f8f9fa",
          "neutral-content": "#ffffff",

          "base-100": "#f8f9fa",
          "base-200": "#f8f9fa",
          "base-300": "#f8f9fa",
          "base-content": "#000000",

          "info": "#17a2b8",
          "info-content": "#ffffff",

          "success": "#28a745",
          "success-content": "#ffffff",

          "warning": "#ffc107",
          "warning-content": "#ffffff",

          "error": "#dc3545",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
    require('daisyui'),
  ]
}
