module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    screens: {
      xs: '1024px',
      sm: '1200px',
      base: '1472px',

    },
    colors: {
      'primary-50': '#FBEDEF',
      'primary-400': '#DF6760',
      'primary-500': '#E35B4B',
      'primary-600': '#D45449',
      'primary-900': '#A73C31',
      'blue-400': '#496B9B',
      'blue-600': '#1A4B84',
      'blue-50': '#E5EAF0',
      'grey-50': '#FCFAF9',
      'grey-100': '#F7F5F4',
      'grey-200': '#F1F0EF',
      'grey-800': '#464544',
      'grey-400': '#C2C0BF',
      'grey-500': '#A3A2A1',
      'grey-600': '#797877',
      'black': '#000000',
      'white': '#ffffff',
      'transparent': 'transparent'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.14'}],
      base: ['1rem', { lineHeight: '1.25' }],
      lg: ['1.125rem', { lineHeight: '1.33' }],
      xl: ['1.375rem', { lineHeight: '1.27' }],
      '2xl': ['1.5rem', { lineHeight: '1.17' }],
      '3xl': ['1.75rem', { lineHeight: '1.28' }],
      '4xl': ['2rem', { lineHeight: '1.25' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    boxShadow: {
      xs: '0px 4px 7px rgba(0, 0, 0, 0.05)',
    },

    extend: {},
  },
  plugins: [],
}
