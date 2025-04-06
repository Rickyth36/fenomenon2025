import { fontFamily } from "tailwindcss/defaultTheme";


module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        orangee:'#ff6700',
        whitee:'#ebebeb',
        grayy:'#c0c0c0',
        bluee:'#3a6ea5',
        darkBlue:'#004e98',
        grayyy:"#264653",
        Bluee:"#3B60CA",
        Orangee: "#FF7B02",
        divBg: "#adb5bd",
        dark: "#0e0c15",
        gold: "#D3AF37",

      },
      fontFamily: {
        poppins:['Poppins', 'sans-serif'],
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },      
    },
  },
  plugins: [],
}
