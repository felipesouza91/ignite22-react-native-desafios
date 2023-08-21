/* eslint-disable camelcase */
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'
import { Product } from './src/screens/Product'
import { appTheme } from './src/theme/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={appTheme}>
      <Product advertisement={1} isEditable />
    </NativeBaseProvider>
  )
}
