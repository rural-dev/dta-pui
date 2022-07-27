// tailwind.config.js
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}","./Onboarding.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#FFFFFF',
          'hijau': '#038B4A',
          'hijaumuda': '#09C36A',
          'oranye': '#FF8900',
          'hijautua': '#036636',
          'abutua': '#6B6B6B',
          'hitam': '#1E1E1E',
          'abusedang': '#ACACAC',
          'abumuda': '#D1D1D1',
          'abuhijau': '#E8EDFF'
        },
        fontFamily: {
          'poppins-bold': ['Poppins-Bold'],
          'poppins-semi-bold': ['Poppins-SemiBold'],
          'poppins-light': ['Poppins-Light'],
          'poppins-regular': ['Poppins-Regular'],
          'poppins-black': ['Poppins-Black'],
          'poppins-medium': ['Poppins-Medium'],
          'poppins-extra-bold': ['Poppins-ExtraBold'],
          'poppins-thin': ['Poppins-Thin'],
          'poppins-italic': ['Poppins-Italic'],

        },
      },
      
      plugins: [],
    }
    
    