import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform
} from 'react-native'

import { Images } from '../../utils/Images'

const { width, height } = Dimensions.get('window')

export const InputField = ({
  onPress = () => {},
  placeholder = null,
  secureTextEntry,
  eyeIcon = null,
  container = {},
  inputStyle = {},
  placeholderTextColor = '#474747',
  iconStyle = {},
  numberOfLines = null,
  multiline = false,
  editable = true,
  keyboardType = null,
  onChange = text => {},
  value = ''
}) => {
  const [toggle, setToggle] = useState(false)
  const [text, settext] = useState(value)

  const onChangeValue = text => {
    onChange(text)
    settext(text)
  }
  return (
    <View style={[styles.input, container]}>
      <TextInput
        editable={editable}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onChangeText={onChangeValue}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[
          styles.inputStyle,
          inputStyle,
          { width: eyeIcon ? '85%' : '95%' }
        ]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
      />
      <TouchableOpacity activeOpacity={1} onPress={onPress}>
        <Image style={[styles.logoImg, iconStyle]} source={eyeIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#FAFAFA'
  },
  logoImg: {
    // position: 'absolute',
    // top: Platform.OS === 'ios' ? -18 : -32,
    // right: 15,
    marginTop: 18,
    marginLeft: 15,
    height: 18,
    width: 18,
    resizeMode: 'contain'
  },
  inputStyle: {
    width: '100%',
    // marginTop: Platform.OS === 'ios' ? 15 : 1,
    marginLeft: 6,
    fontSize: 15,
    color: '#474747',
    borderColor: '#474747'
  }
})
