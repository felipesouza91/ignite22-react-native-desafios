import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    height: 178,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: -27,
    flexDirection: 'row',
    paddingRight: 24,
    paddingLeft: 24,
    gap: 4,
  },
  formInput: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    paddingRight: 16,
    paddingLeft: 16,
    color: '#F2F2F2',
    fontSize: 16,
  },
  formInputSelect: {
    borderWidth: 1,
    borderColor: '#5E60CE',
    borderStyle: 'solid',
  },
  formButton: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    marginTop: 32,
    paddingRight: 24,
    paddingLeft: 24,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoTextGroup: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  counter: {
    paddingVertical: 2,
    paddingHorizontal: 8,

    backgroundColor: '#333333',
    borderRadius: 9999,
    color: '#D9D9D9',
    fontSize: 12,
    lineHeight: 15,
    fontWeight: 'bold',
  },
  emptyContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  emptyContainerTitle: {
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 19.6,
    color: '#808080',
  },
  emptyContainerSubTitle: {
    fontSize: 16,
    lineHeight: 19.6,
    color: '#808080',
  },
})
