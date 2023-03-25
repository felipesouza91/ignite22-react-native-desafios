import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    padding: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333',
  },
  containerLeft: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    maxWidth: '80%',
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 19.6,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  textDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
})
