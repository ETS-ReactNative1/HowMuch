import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { Images } from '../../utils/Images'
const { width, height } = Dimensions.get('screen')

export const NotificationCard = ({ navigation,
  onPress = () => {},
  container = {},
  image = Images.Pictures.girl1,
  time = '5 min ago',
  titleName = 'David Silbia',
  description = 'Present in posuere dui. In hac habita.',
  button = null
}) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <View style={[styles.container, container]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: '20%' }}>
            <Image style={styles.img} source={image} />
          </View>

          <View style={{ width: '80%', marginLeft: 10 }}>
            <View style={{ paddingRight: 10 }}>
              {
                <Text
                  style={{ color: '#BCC2C5', fontSize: 13, fontWeight: '500' }}>
                  {time}
                </Text>
              }
              <Text
                style={{ color: '#455267', fontSize: 13, fontWeight: 'bold' }}>
                {titleName}
                <Text
                  style={{ color: '#455267', fontSize: 13, fontWeight: '400' }}>
                  {description}
                </Text>
              </Text>
            </View>
          </View>
        </View>

        {button && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                  
                setActive(true),
                navigation.navigate('VideoCallScreen')
              }}
              activeOpacity={1}
              style={
                active == true
                  ? styles.activeButtonStyle
                  : styles.InActiveButtonStyle
              }>
              <Text
                style={
                  active == true
                    ? styles.activeButtonText
                    : styles.InActiveButtonText
                }>
                Reject
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                {onPress}
                setActive(false),
                navigation.navigate('AudioCallScreen')
              }}
              activeOpacity={1}
              style={[
                active == false
                  ? styles.activeButtonStyle
                  : styles.InActiveButtonStyle,
                { marginLeft: '7%' }
              ]}>
              <Text
                style={
                  active == false
                    ? styles.activeButtonText
                    : styles.InActiveButtonText
                }>
                Chat
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  activeButtonStyle: {
    width: '38%',
    backgroundColor: '#0989FF',
    paddingVertical: 12,
    borderRadius: 10
  },
  activeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center'
  },
  InActiveButtonStyle: {
    width: '38%',
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  InActiveButtonText: {
    color: '#706D6D',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center'
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 5
  }
})
