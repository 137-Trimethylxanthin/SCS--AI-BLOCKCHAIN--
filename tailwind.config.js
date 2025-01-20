/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        CCCPogRed: '#EE1C25',
        CCCPLightBlue: '#1CEEE5',
        CCCPogYellow: '#FFFF00',
        CCCPDarkBlue: '#0000FF',
        CCCPGreen: '#00FF00',

        CCCPRed: '#8f0100',
        CCCPOrange: '#db5b00',
        CCCPVVihte: '#e4d5c2',
        CCCPGray: '#535042',
        CCCPBlack: '#000000',

        CCCPPureWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
}