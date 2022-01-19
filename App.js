import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Svg from './Svg'
import styles from './App.style'

const App = () => {
  const [url, setUrl] = useState('https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg')
  const [display, setDisplay] = useState(true)

  const handleSetUrl = (text) => {
    setUrl(text)
    setDisplay(false)
  }

  return (
    <View style={styles.container}>
      <Text>Please Enter SVG URL</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => handleSetUrl(text)}
        value={url}
        numberOfLines={3}
        multiline
      />
      <Button
        onPress={() => setDisplay(true)}
        title="Render SVG"
        color="#841584"
        disabled={display}
      />
      {display && <Svg url={url} />}
    </View>
  )
}

export default App
