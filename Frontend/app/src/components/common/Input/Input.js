import { View, Text } from 'react-native'
import React from 'react'

export default function Input({label}) {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  )
}

Input.defaultProps = {
    label: '',
}