import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import { Images } from '../../utils/Images'
const { height, width } = Dimensions.get('screen')
export const CustomerTabBar = ({ active = '', navigation }) => {
  const items = [
    {
      name: 'home',
      icon: Images.Pictures.homeIcon,
      navigateTo: 'CustomerHome',
      style: {}
    },
    {
      name: 'Feeds',
      icon: Images.Pictures.category,
      navigateTo: 'CustomerFeeds',
      style: {}
    },
    {
      name: 'search',
      icon: Images.Pictures.plus,
      navigateTo: 'CustomerSearch',
      style: {}
    },
    {
      name: 'bookmark',
      icon: Images.Pictures.measage,
      navigateTo: 'CustomerBookmark',
      style: {
        width: 16,
        height: 20
      }
    },
    {
      name: 'profile',
      icon: Images.Pictures.profile,
      navigateTo: 'CustomerProfile',
      style: {
        width: 15,
        height: 20,
      }
    }
  ]

  return (
    <View style={styles.containerStyle}>
      {items.map((item, index) => {
        if (item.name != active) {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                item.navigateTo && navigation.navigate(item.navigateTo)
              }}
              >
              <Image
                source={item.icon}
                style={[styles.iconStyle, item.style]}
              />
            </TouchableOpacity>
          )
        } else {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                item.navigateTo && navigation.navigate(item.navigateTo)
              }}
              style={{ justifyContent: 'space-between', padding: 0}}>
              <Image
                source={item.icon}
                style={[styles.iconStyle, item.style]}
              />
              <Image
                source={Images.Pictures.ActiveTab}
                style={{ height: 10, width: 30 }}
              />
            </TouchableOpacity>
          )
        }
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: width,
    height:60,
    backgroundColor:"#ffffff",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"center",
    bottom: 0,
    position: 'absolute'
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginVertical: 15
  }
})
