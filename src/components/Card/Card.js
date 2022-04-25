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
    onPress = () => { },
    profile = " Liza Ashlay",
    profileImg = Images.Pictures.girl,
    product = Images.Pictures.services,
    watch = "Apple Watch 2022",
    decription = "Praesent in posuere dui. In hac habitas plate",
    decription1 = "ctumst. Morbi . View More...",
    container = {},
    categary1 = "",
    categary = "",
    backgroundColor = "",
    backgroundColor1 = "",
    color1="",
    color=""
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={[styles.container, container]}
        >
            <View style={{ flexDirection: "row", alignItems: "center"}}>
                <Image style={{ width: 28, height: 28, resizeMode: "contain", marginLeft: 10 }} source={profileImg} />
                <View>
                   <View style={{flexDirection:"row"}}>
                   <View style={{flexDirection:"row",alignItems:"center",marginLeft:6}}>
                        <View style={[styles.round, backgroundColor]}></View>
                        <Text  style={[styles.text,color]}>{categary}</Text>
                    </View>
                    <View style={{flexDirection:"row",marginLeft:8,alignItems:"center"}}>
                    <View style={[styles.round, backgroundColor1]}></View>
                    <Text style={[styles.text,color1]}>{categary1}</Text>
                    </View>
                   </View>
                    <Text style={{ color: "#455267", fontSize: 12, fontWeight: "700", paddingLeft: 8 }}>
                        {profile}
                    </Text>
                </View>
            </View>
            <Image style={styles.services} source={product} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <View>
                    <Text style={{ color: "#0888FF", fontSize: 11, fontWeight: "500" }}>Sat, 26th Apr 9:00 PM</Text>
                    <Text style={{ color: "#465061", paddingVertical: 6, fontSize: 14, fontWeight: "700" }}>{watch}</Text>
                </View>
                <View style={styles.btn}>
                    <Text style={{ color: "#fff", fontSize: 12 }}>Bid Now</Text>
                </View>
            </View>
            <View style={{ paddingLeft: 10 }}>
                <Text style={{ color: "#333333", fontSize: 12 }}>
                    {decription}
                </Text>
                <Text style={{ color: "#333333", fontSize: 12 }}>
                    {decription1}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#00000010",
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: "#00000080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        paddingHorizontal:8,
        paddingVertical:10,
        paddingBottom:16
    },
    services: {
        width: 340,
        height: 170,
        resizeMode: "contain",
        marginVertical: 10
    },
    btn: {
        backgroundColor: "#FFAB08",
        width: 67,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    round: {
        width: 8,
        height: 8,
        borderRadius:20
    },
    text:{
        paddingBottom:4,
        paddingLeft:2,
        fontSize:12,
        fontWeight:"bold"
    },
    round:{
        width:8,
        height:8,
        borderRadius:20,

    }
})
