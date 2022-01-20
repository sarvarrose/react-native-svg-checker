import React from 'react'
import { View, Platform, Image } from 'react-native'
import { SvgCssUri } from 'react-native-svg'
import ErrorsBoundary from './ErrorsBoundary'
import styles from './Svg.style'

export default class Svg extends React.Component {
  render () {
    const { url } = this.props

    if (!url) {
      return null
    }

    return (
      <View style={styles.imageContainer}>
        <ErrorsBoundary>
          {Platform.OS === 'web'
            ? <Image source={{ uri: url }} style={styles.webImage}/>
            : <SvgCssUri width="100%" height="100%" uri={url} />
          }
        </ErrorsBoundary>
      </View>
    )
  }
}
