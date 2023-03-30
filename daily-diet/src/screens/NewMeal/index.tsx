import React, { useState } from 'react'
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker'
import dayjs from 'dayjs'
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
} from './styles'
import { Platform } from 'react-native'
import SelectButton from '@components/SelectButton'
import Button from '@components/Button'

const NewMeal: React.FC = () => {
  const [date, setDate] = useState(new Date())
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

  const handleShowDatePicker = (type: 'date' | 'time') => {
    if (Platform.OS === 'android') {
      setShowDatePicker(true)
    }
    setModeDatePicker(type)
  }

  return (
    <Container>
      <NavigateHeader title="Nova refeição" />
      <Content>
        <Input label="Nome" />
        <Input
          label="Descrição"
          multiline={true}
          numberOfLines={4}
          isTestArea
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
              <SelectButton title="Sim" isSelect={true} />
            </RowSectionWrapper>
            <RowSectionWrapper>
              <SelectButton title="Não" status="danger" isSelect={false} />
            </RowSectionWrapper>
          </RowSection>
        </DietSection>
        <Button label="Cadastrar refeição" />
      </Content>
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
