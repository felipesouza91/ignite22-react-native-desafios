import { View } from 'native-base'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

const PaginationItem: React.FC<{
  index: number
  backgroundColor: string
  length: number
  animValue: Animated.SharedValue<number>
  isRotate?: boolean
}> = (props) => {
  const { animValue, index, length, backgroundColor, isRotate } = props
  const width = 10

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1]
    let outputRange = [-width, 0, width]

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1]
      outputRange = [-width, 0, width]
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    }
  }, [animValue, index, length])
  return (
    <View
      w="131px"
      h="3px"
      style={{
        backgroundColor: 'white',

        borderRadius: 50,
        overflow: 'hidden',
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  )
}

export { PaginationItem }
