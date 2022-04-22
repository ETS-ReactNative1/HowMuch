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

export const ProfileCard = ({
    onPress = () => { },
    container = {},
    image = Images.Pictures.girl1,
    title = "Alex Lee",
    decription = "Lorem ipsum dolor sit amet, consectetur.",
    time = "15:34"
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={[styles.container,container]}
        >
            <Image style={styles.img} source={image}/>
            <View style={{justifyContent:"center",marginLeft:8}}>
                <Text>{title}</Text>
                <Text style={{color:"#455267",fontSize:13}}>{decription}</Text>
            </View>
            <Text style={{paddingTop:4}}>{time}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:"#ffffff",
    borderWidth:1,
    borderColor:"#00000010",
    paddingHorizontal:20,
    marginHorizontal:20,
    paddingVertical:8,
    borderRadius:10,
    flexDirection:"row",
    shadowColor: "#00000080",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,

elevation: 3,
marginVertical:10
},
img:{
    width:50,
    height:50
}
})
