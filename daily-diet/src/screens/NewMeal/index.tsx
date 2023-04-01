import React, { useState } from 'react'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Input } from '@components/Input'
import { NavigateHeader } from '@components/NavigateHeader'
import {
  Container,
  Content,
  RowSection,
  DateTimeButton,
  RowSectionWrapper,
  DietSection,
  Span,
  ScrollView,
} from './styles'
import { Alert, Platform } from 'react-native'
import SelectButton from '@components/SelectButton'
import Button from '@components/Button'
import { saveMeal, updateMeal } from '@utils/meals/repository'
import { IFoodData } from '@screens/Home'

const NewMeal: React.FC = () => {
  const { params } = useRoute()
  const navigation = useNavigation()
  const { data } = params as { data: IFoodData }
  const [name, setName] = useState(data && data.name)
  const [description, setDescription] = useState(data && data.description)
  const [date, setDate] = useState<Date>(
    data ? new Date(data.dateTime) : new Date(),
  )
  const [isHealthy, setIsHealthy] = useState<boolean>(data && data.isHealthy)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [modeDatePicker, setModeDatePicker] = useState<'date' | 'time'>('time')

  const handleChangeDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowDatePicker(false)
    if (selectedDate) {
      setDate(selectedDate)
    }
  }

  async function handleSubmit() {
    const formIsValid =
      name.trim().length > 0 &&
      description.trim().length > 0 &&
      date !== undefined &&
      isHealthy !== undefined

    if (!formIsValid) {
      return Alert.alert(
        'Cadastro',
        'Prencha todos os campos para o concluir o cadastro',
      )
    }
    const inputData = {
      dateTime: date,
      description,
      isHealthy: isHealthy!,
      name,
    }
    if (data) {
      await updateMeal({
        id: data.id,
        ...inputData,
      })
    } else {
      await saveMeal(inputData)
    }

    navigation.navigate('Complete', { success: isHealthy })
  }

  const handleShowDatePicker = (type: 'date' | 'time') => {
    if (Platform.OS === 'android') {
      setShowDatePicker(true)
    }
    setModeDatePicker(type)
  }

  return (
    <Container>
      <NavigateHeader title="Nova refeição" />
      <ScrollView>
        <Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Input label="Nome" value={name} onChangeText={setName} />
          <Input
            label="Descrição"
            multiline={true}
            numberOfLines={4}
            isTestArea
            value={description}
            onChangeText={setDescription}
          />
          <RowSection>
            <DateTimeButton onPress={() => handleShowDatePicker('date')}>
              <Input
                label="Data"
                editable={false}
                value={dayjs(date).format('DD/MM/YYYY')}
              />
            </DateTimeButton>
            <DateTimeButton onPress={() => handleShowDatePicker('time')}>
              <Input
                label="Hora"
                editable={false}
                value={dayjs(date).format('HH:mm')}
              />
            </DateTimeButton>
          </RowSection>
          <DietSection>
            <Span>Está dentro da dieta?</Span>
            <RowSection>
              <RowSectionWrapper>
                <SelectButton
                  title="Sim"
                  isSelect={isHealthy !== undefined && isHealthy}
                  onPress={() => setIsHealthy(true)}
                />
              </RowSectionWrapper>
              <RowSectionWrapper>
                <SelectButton
                  title="Não"
                  status="danger"
                  isSelect={isHealthy !== undefined && !isHealthy}
                  onPress={() => setIsHealthy(false)}
                />
              </RowSectionWrapper>
            </RowSection>
          </DietSection>
          <Button label="Cadastrar refeição" onPress={handleSubmit} />
        </Content>
      </ScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode={modeDatePicker}
          onChange={handleChangeDate}
        />
      )}
    </Container>
  )
}

export { NewMeal }
