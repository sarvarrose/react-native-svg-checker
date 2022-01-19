import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 70,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    width: '100%'
  },
  invalidURL: {
    alignSelf: 'center',
    margin: 20
  }
})

export default styles