import React, { useState } from 'react'
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import logo from '../../../assets/Logo.png'
import * as Crypto from 'expo-crypto'

import { style } from './styles'
import TodoTile from '../../components/TodoTile'

export interface ITodo {
  id: string
  isDone: boolean
  text: string
}

const Home: React.FC = () => {
  const [newTextTodo, setNewTextTodo] = useState('')
  const [isInputTextSelect, setIsInputTextSelect] = useState(false)
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleAddTodo = () => {
    const data: ITodo = {
      id: Crypto.randomUUID(),
      isDone: false,
      text: newTextTodo,
    }
    setTodos((state) => [...state, data])
    setNewTextTodo('')
  }

  const finish = todos.reduce(
    (total, item) => (item.isDone ? ++total : total),
    0,
  )

  const handleRemoveTodo = (id: string) => {
    setTodos((state) => state.filter((todo) => todo.id !== id))
  }

  const handleChangeTodoStatus = (id: string) => {
    setTodos((oldState) =>
      oldState.map((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
        return item
      }),
    )
  }

  const handleFocus = (e) => {
    setIsInputTextSelect(true)
  }

  const handleBlur = (e) => {
    setIsInputTextSelect(true)
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logo} alt="" />
      </View>
      <View style={style.form}>
        <TextInput
          value={newTextTodo}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={setNewTextTodo}
          style={[style.formInput, isInputTextSelect && style.formInputSelect]}
        />
        <TouchableOpacity style={style.formButton} onPress={handleAddTodo}>
          <Feather name="plus-circle" size={16} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={style.body}>
        <View style={style.info}>
          <View style={style.infoTextGroup}>
            <Text style={style.infoText}>Criadas</Text>
            <Text style={style.counter}>{todos.length}</Text>
          </View>
          <View style={style.infoTextGroup}>
            <Text style={style.infoText}>Concluídas</Text>
            <Text style={style.counter}>{finish}</Text>
          </View>
        </View>
        {todos.length > 0 ? (
          <FlatList
            style={{ marginTop: 20 }}
            data={todos}
            renderItem={({ item }) => (
              <TodoTile
                data={item}
                onRemove={handleRemoveTodo}
                onSelect={handleChangeTodoStatus}
              />
            )}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        ) : (
          <View style={style.emptyContainer}>
            <Feather name="clipboard" size={60} color="#808080" />
            <Text style={style.emptyContainerTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={style.emptyContainerSubTitle}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default Home
