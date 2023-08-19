/* eslint-disable camelcase */
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla'
import { NativeBaseProvider } from 'native-base'
import { NewAdvertisement } from './src/screens/NewAdvertisement'
import { appTheme } from './src/theme/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={appTheme}>
      <NewAdvertisement />
    </NativeBaseProvider>
  )
}
