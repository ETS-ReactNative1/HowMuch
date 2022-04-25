import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform,
  Animated,
  Easing
} from 'react-native'
import { Images } from '../../utils/Images'
import { theme } from '../../utils/theme'
const { width, height } = Dimensions.get('screen')
import { useIsFocused, useNavigation } from '@react-navigation/native'

export const Button = ({
    title = "",
    containerStyle= {},
    onPress  = () => { },
}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={onPress}
        style={[styles.container,containerStyle]}>
            <Text style={styles.test}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2E9BFF',
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10
  },
  test: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight:'500'
  }
})
