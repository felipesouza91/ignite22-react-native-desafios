import { IFoodData } from '@screens/Home'

/* eslint-disable no-unused-vars */
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined
      MealInfo: {
        data: IFoodData
      }
      NewMeal: {
        data?: IFoodData
      }
      Static: undefined
      Complete: {
        success?: boolean
      }
    }
  }
}
