/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export const Colors = {
 light: {
  text: '#11181C',
  background: '#fff',
  tint: tintColorLight,
  icon: '#687076',
  tabIconDefault: '#687076',
  tabIconSelected: tintColorLight,
 },
 dark: {
  text: '#ECEDEE',
  background: '#151718',
  tint: tintColorDark,
  icon: '#9BA1A6',
  tabIconDefault: '#9BA1A6',
  tabIconSelected: tintColorDark,
 },
}

export const createTheme = (colorScheme: ColorSchemeName = 'light') => {
 const isDark = colorScheme === 'dark'
 const colors = {
  ...MatrixColors,
  ...baseColors[isDark ? 'dark' : 'light'],
 }

 const baseTheme = isDark ? MD3DarkTheme : MD3LightTheme

 return {
  ...baseTheme,
  roundness: 8,
  colors: {
   ...baseTheme.colors,
   ...colors,
  },
  fonts: {
   ...baseTheme.fonts,
   regular: {
    fontFamily: 'VT323',
    fontWeight: 'normal',
   },
   medium: {
    fontFamily: 'VT323',
    fontWeight: '500',
   },
   light: {
    fontFamily: 'VT323',
    fontWeight: '300',
   },
  },
  animation: {
   ...baseTheme.animation,
   scale: 1.0,
  },
 }
}
