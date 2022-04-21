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
    onPress  = () => { },
    profile=" Liza Ashlay",
    profileImg = Images.Pictures.girl
}) => {
    return (
        <TouchableOpacity 
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.container}
     >
            <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image source={profileImg}/>
                <Text >
               {profile}
                </Text>
            </View>
            <Image style={styles.services} source={Images.Pictures.services}/>
            <Text>Sat, 26th Apr 9:00 PM</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff",
        borderWidth:1,
        borderColor:"#00000010",
        padding:10,
        marginHorizontal:8,
        borderRadius:10,
        shadowColor: "#00000070",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    },
    services:{
        width:340,
        height:170,
        resizeMode:"contain",
        marginVertical:10
    }
})
