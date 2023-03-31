/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  NunitoSans_700Bold,
  NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans'
import dayjs from 'dayjs'
import theme from '@theme/index'
import { Home } from '@screens/Home'
import { Statistic } from '@screens/Statistic'
import { NewMeal } from '@screens/NewMeal'
import { Complete } from '@screens/Complete'
import { MealInfo } from '@screens/MealInfo'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_700Bold, NunitoSans_400Regular })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <MealInfo
        data={{
          title: 'name',
          dateTime: dayjs().add(1, 'hour').toDate(),
          description: 'X-tudo',
          isHealthy: true,
        }}
      />
    </ThemeProvider>
  )
}
