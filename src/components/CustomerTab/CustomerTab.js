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
      style: {},
      text:"Home"
    },
    {
      name: 'Feeds',
      icon: Images.Pictures.category,
      navigateTo: 'CustomerFeeds',
      style: {},
      text:"Feeds"
    },
    {
      name: 'search',
      icon: Images.Pictures.plus,
      navigateTo: 'CreatePost',
      style: {
        width:60,
        height:60,
        
      }
    },
    {
      name: 'bookmark',
      icon: Images.Pictures.measage,
      navigateTo: 'CustomerBookmark',
      style: {
        width: 22,
        height: 22
      },
      text:"Message"
    },
    {
      name: 'profile',
      icon: Images.Pictures.profile,
      navigateTo: 'CustomerProfile',
      style: {
        width: 22,
        height: 22,
      },
      text:"Profile"
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
                 <Text style={{textAlign:"center"}}>{item.text}</Text>
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
                style={[styles.iconStyle1, item.style]}
              />
              <Text style={styles.text}>{item.text}</Text>
              {/* <Image
                source={Images.Pictures.arrow}
                style={{ height: 10, width: 25 }}
              /> */}
              {/* <View style={{backgroundColor:"red",
              width:50,
              paddingTop:5
            }}></View> */}
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
    height:76,
    backgroundColor:"#ffffff",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    // alignItems:"center",
    bottom: 0,
    position: 'absolute',
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginVertical: 10,
    alignSelf:"center"
    // tintColor:"#0888FF"
  },
  text:{
    color:"#0888FF",
    paddingBottom:15,
    textAlign:"center"
  },
  iconStyle1: {
    height: 22,
    width: 22,
    marginVertical: 10,
     tintColor:"#0888FF",
     alignSelf:"center"
  },
})
