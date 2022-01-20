import React, { Component } from 'react'
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import Svg from './Svg'
import styles from './App.style'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
      shouldDisplay: true
    }
  }

  handleSetUrl = (text) => {
    this.setState({
      url: text,
      shouldDisplay: false
    })
  }

  handleSubmit = () => {
    Keyboard.dismiss()
    this.setState({
      shouldDisplay: true
    })
  }

  render () {
    const { url, shouldDisplay } = this.state

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <Text>Enter SVG URL</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.handleSetUrl(text)}
            value={url}
            numberOfLines={3}
            multiline
          />
          <Button
            onPress={this.handleSubmit}
            title="Render SVG"
            style={styles.button}
            disabled={shouldDisplay}
          />
          {shouldDisplay && <Svg url={url} />}
        </SafeAreaView>
      </TouchableWithoutFeedback>
    )
  }
}
