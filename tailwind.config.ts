import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1650px'
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      colors: {
        primary: '#fff',
        secondary: '#14171A',
        accent: '#FF4081',
        customGreen: {
          light: '#6EE7B7',
          DEFAULT: '#10B981',
          dark: '#fff'
        }
      },
      fontSize: {},
      fontFamily: {}
    }
  }
}
