import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from 'react-native'
import { Images } from '../../../utils/Images'
const { width, height } = Dimensions.get('screen')

export const VideoCallScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={styles.container}>
        <ImageBackground
          source={Images.Pictures.backVideoImg}
          style={styles.profileLogo}>
          <Image
            source={Images.Pictures.bottomShadow}
            style={styles.profileLogo}
          />

          <View style={styles.topTimeContainer}>
            <View style={styles.recordView}>
              <View style={styles.recordInnerView} />
            </View>

            <Text style={styles.timeTextStyle}>Time 03:03:00</Text>
          </View>

          <View style={styles.userImg}>
            <Image
              source={Images.Pictures.audioCallImg}
              style={styles.userImgStyle}
            />
          </View>

          <View style={styles.bottomButtonContainer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.sideImgStyle}>
              <Image
                source={Images.Pictures.muteIcon}
                style={styles.muteIconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={styles.centerImgStyle}>
              <Image
                source={Images.Pictures.callReceiverIcon}
                style={[styles.muteIconStyle, { height: 34, width: 34 }]}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} style={styles.sideImgStyle}>
              <Image
                source={Images.Pictures.videoChatIcon}
                style={styles.muteIconStyle}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileLogo: {
    height: '100%',
    width: '100%'
  },
  topTimeContainer: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  recordView: {
    backgroundColor: '#fff',
    height: 12,
    width: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  recordInnerView: {
    backgroundColor: 'rgba(242, 99, 99, 1)',
    height: 8,
    width: 8,
    borderRadius: 5
  },
  timeTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(94, 112, 121, 1)'
  },
  userImg: {
    position: 'absolute',
    bottom: '20%',
    left: '8%'
  },
  userImgStyle: {
    height: 165,
    width: 155,
    resizeMode: 'contain'
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: '60%',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 30
  },
  sideImgStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  centerImgStyle: {
    backgroundColor: 'rgba(242, 99, 99, 1)',
    height: 70,
    width: 70,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },

  muteIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain'
  }
})
