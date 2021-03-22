module.exports = {
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    // enabled:true,
    // mode:'all',
    // preserveHtmlElements: false,
    content: [
      'src/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
