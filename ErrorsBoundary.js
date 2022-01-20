import React, { Component } from 'react'
import { Text } from 'react-native'

export default class ErrorsBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
    this.setState({ errorInfo })
  }
  render() {
    const { hasError, errorInfo } = this.state

    if (hasError) {
      console.log('Error')
      return <Text style={{ display: 'flex', alignSelf: 'center', marginTop: 80, color: 'red'}}>Invalid URL</Text>
    }

    return this.props.children
  }
}
