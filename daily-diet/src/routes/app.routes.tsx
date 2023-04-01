import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { MealInfo } from '@screens/MealInfo'
import { NewMeal } from '@screens/NewMeal'
import { Statistic } from '@screens/Statistic'
import { Complete } from '@screens/Complete'

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="MealInfo" component={MealInfo} />
      <Screen name="NewMeal" component={NewMeal} />
      <Screen name="Static" component={Statistic} />
      <Screen name="Complete" component={Complete} />
    </Navigator>
  )
}

export default AppRoutes
