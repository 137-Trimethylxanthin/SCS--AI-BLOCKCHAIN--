/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        CCPogRed: '#EE1C25',
        CCPLightBlue: '#1CEEE5',
        CCPogYellow: '#FFFF00',
        CCPDarkBlue: '#0000FF',
        CCPGreen: '#00FF00',

        CCPRed: '#8f0100',
        CCPOrange: '#db5b00',
        CCPVVihte: '#e4d5c2',
        CCPGray: '#535042',
        CCPBlack: '#000000',

        CCCPPureWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
}