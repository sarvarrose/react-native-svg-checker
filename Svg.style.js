import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    height: 120,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },
  invalidURL: {
    borderColor: 'red'
  }
})

export default styles