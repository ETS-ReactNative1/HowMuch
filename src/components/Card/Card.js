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

export const Card = ({
  onPress = () => {},
  profile = ' Liza Ashlay',
  profileImg = Images.Pictures.girl,
  product = Images.Pictures.services,
  watch = 'Apple Watch 2022',
  decription = 'Praesent in posuere dui. In hac habitas plate',
  decription1 = 'ctumst. Morbi . View More...',
  container = {},
  categary1 = '',
  categary = '',
  backgroundColor = '',
  backgroundColor1 = '',
  color1 = '',
  color = '',
  TagVisible = null,
  TagStatus = false,
  bidBtnVisible = true,
  howMushView = false,
  bidbtnTitle = 'Bid Now'
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, container]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <View>
          <Image
            style={{
              width: 28,
              height: 28,
              resizeMode: 'contain',
              marginLeft: 10
            }}
            source={profileImg}
          />
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 6
              }}>
              <View style={[styles.round, backgroundColor]}></View>
              <Text style={[styles.text, color]}>{categary}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 8,
                alignItems: 'center'
              }}>
              <View style={[styles.round, backgroundColor1]}></View>
              <Text style={[styles.text, color1]}>{categary1}</Text>
            </View>
            <View style={styles.topView}>
              <View style={{ flexDirection: 'row', marginTop: -22 }}>
                <Text
                  style={{
                    color: '#455267',
                    fontSize: 12,
                    fontWeight: '700',
                    paddingLeft: 8
                  }}>
                  {profile}
                </Text>
                {TagVisible && (
                  <View style={{ marginTop: -2 }}>
                    <Text
                      style={TagStatus ? styles.tagstyleC : styles.tagstyle}>
                      {TagStatus ? 'Completed' : 'Pending'}
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View3dots}>
          <TouchableOpacity>
            <Image style={styles.dots3} source={Images.Pictures.Vdots} />
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.services} source={product} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10
        }}>
        <View>
          <Text style={{ color: '#0888FF', fontSize: 11, fontWeight: '500' }}>
            Sat, 26th Apr 9:00 PM
          </Text>
          <Text
            style={{
              color: '#465061',
              paddingVertical: 6,
              fontSize: 14,
              fontWeight: '700'
            }}>
            {watch}
          </Text>
        </View>
        {bidBtnVisible && (
          <View style={styles.btn}>
            <Text style={{ color: '#fff', fontSize: 12 }}>{bidbtnTitle}</Text>
          </View>
        )}
      </View>
      <View
        style={{
          paddingLeft: 10,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(135, 135, 135, 0.1)',
          paddingBottom: 15
        }}>
        <Text style={{ color: '#333333', fontSize: 12 }}>{decription}</Text>
        <Text style={{ color: '#333333', fontSize: 12 }}>{decription1}</Text>
      </View>
      {howMushView && (
        <View style={styles.lastView}>
          <Text style={styles.howmuchtxt}>How Much</Text>
          <Text style={styles.doller}> $85.90</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#00000010',
    marginHorizontal: 8,
    borderRadius: 20,
    shadowColor: '#00000080',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,

    elevation: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    paddingBottom: 16
  },
  services: {
    width: 340,
    height: 170,
    resizeMode: 'contain',
    marginVertical: 10,
    marginTop: -10
  },
  btn: {
    backgroundColor: '#FFAB08',
    width: 67,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  round: {
    width: 8,
    height: 8,
    borderRadius: 20
  },
  text: {
    paddingBottom: 4,
    paddingLeft: 2,
    fontSize: 12,
    fontWeight: 'bold'
  },
  round: {
    width: 8,
    height: 8,
    borderRadius: 20
  },
  tagstyle: {
    backgroundColor: '#FFE6E8',
    color: '#FF0918',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontWeight: '700',
    marginLeft: 15
  },
  tagstyleC: {
    backgroundColor: '#E6F3FF',
    color: '#0989FF',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontWeight: '700',
    marginLeft: 15
  },
  lastView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 5
  },
  howmuchtxt: {
    color: '#57DD41',
    fontSize: 15,
    fontWeight: '600'
  },
  doller: {
    fontSize: 15,
    fontWeight: '600'
  },
  dots3: {
    width: 18,
    height: 4
  },
  topView: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  View3dots: {
    marginTop: -20,
    marginRight: 15
  }
})
