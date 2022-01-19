import * as React from 'react'
import { View, Platform, Image } from 'react-native'
import { SvgCssUri } from 'react-native-svg'

export default class Svg extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { url } = this.props

    if (!url) {
      return null
    }

    if (Platform.OS === 'web') {
      return <Image 
        source={{uri: url}}
        style={{ width: 500, height: 500 }}
      />
    }
  
    return (
      <View
        resizeMode='contain'
        style={{
          display: 'flex',
          width: '100%',
          height: '100%'
        }}
      >
        <SvgCssUri
          width="100%"
          height="100%"
          uri={url}
        />
      </View>
    )
  }
}
