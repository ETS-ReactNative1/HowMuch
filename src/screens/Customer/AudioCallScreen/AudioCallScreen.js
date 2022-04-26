import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import { Images } from '../../../utils/Images'
const { width, height } = Dimensions.get('screen')

export const AudioCallScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={styles.container}>
        <View style={{ height: '15%', alignSelf: 'center' }} />
        <View style={styles.userImg}>
          <Image
            source={Images.Pictures.audioCallImg}
            style={styles.userImgStyle}
          />
          <Text
            style={[
              styles.timeTextStyle,
              { fontSize: 22, color: 'rgba(49, 56, 66, 1)', marginVertical: 15 }
            ]}>
            Kristin Watson
          </Text>
          <Text style={styles.timeTextStyle}>04:37 mins</Text>
        </View>

        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity activeOpacity={0.9} style={styles.recordView}>
            <View style={styles.recordInnerView}>
              <Image
                source={Images.Pictures.crossX}
                style={{
                  height: 12,
                  width: 12,
                  resizeMode: 'contain',
                  tintColor: '#FFF'
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.recordView, { backgroundColor: '#0DE39120' }]}>
            <Image
              source={Images.Pictures.crossX}
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                tintColor: '#0DE391'
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  userImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userImgStyle: {
    height: 220,
    width: 200,
    resizeMode: 'contain'
  },
  timeTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(49, 56, 66, 0.6)'
  },
  recordView: {
    backgroundColor: '#FF537220',
    height: 70,
    width: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  recordInnerView: {
    backgroundColor: '#FF5372',
    height: 27,
    width: 27,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    height: '20%',
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})
