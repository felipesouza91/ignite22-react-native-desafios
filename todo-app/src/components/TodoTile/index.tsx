import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Feather, AntDesign } from '@expo/vector-icons'

import { styles } from './styles'
import { ITodo } from '../../screens/Home'

interface ITodoTileData {
  data: ITodo
  onRemove: (id: string) => void
  onSelect: (id: string) => void
}

const TodoTile: React.FC<ITodoTileData> = ({ data, onRemove, onSelect }) => {
  function handleChangeStatus() {
    onSelect(data.id)
  }

  function handleRemove() {
    onRemove(data.id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <TouchableOpacity onPress={handleChangeStatus}>
          {data.isDone ? (
            <AntDesign
              name="checkcircle"
              size={24}
              color="#5E60CE"
              style={{ backgroundColor: '#FFF', borderRadius: 999 }}
            />
          ) : (
            <Feather name="circle" size={24} color="#4EA8DE" />
          )}
        </TouchableOpacity>
        <Text style={[styles.text, data.isDone && styles.textDone]}>
          {data.text}
        </Text>
      </View>
      <TouchableOpacity onPress={handleRemove}>
        <Feather name="trash-2" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}

export default TodoTile
