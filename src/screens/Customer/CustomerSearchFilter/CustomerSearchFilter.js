import React, { useState, useEffect, createRef } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Platform,
    Image,
    TextInput
} from 'react-native'

import { Button } from '../../../../components/Button/Button'
import { Header } from '../../../components/Header/Header'
import { Modals } from '../../../components/Modal/Modals'
import { Images } from '../../../utils/Images'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

const CustomerSearchFilter = ({ navigation }) => {
    const [select, setSelect] = useState('')
    const [food, setFood] = useState([
        {
            title: 'Product'
        },
        {
            title: 'Service'
        },
        {
            title: 'Both'
        },
    ])

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
            <View style={styles.container}>
                <Header
                    arrow={true}
                    title="Search"
                />
                <View style={styles.border}></View>
                <Text style={styles.gender}>Gender</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly",paddingBottom:25 }}>
                    {food.map((item, index) => {
                        return (
                            <>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => setSelect(index)}
                                    style={select == index ? styles.btn1 : styles.btn}>
                                    <Text style={select == index ? styles.text1 : styles.text}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            </>
                        )
                    })}
                </View>
                <Text style={styles.target}>Target Audience</Text>
                <TextInput
                        placeholderTextColor="#72777A"
                        style={styles.input}
                        placeholder='Search'
                    />
                    <View style={{flexDirection:"row"}}>
                        <View style={styles.button}>
                            <Image style={{width:23,height:23}} source={Images.Pictures.electricity}/>
                            <Text style={{paddingHorizontal:4,color:"#FE5151"}}>Electrican</Text>
                            <Image style={{width:15,height:15,tintColor:"#FE5656"}} source={Images.Pictures.close}/>
                        </View>
                        <View style={styles.button1}>
                            <Image style={{width:23,height:23}} source={Images.Pictures.plumber}/>
                            <Text style={{paddingHorizontal:4,color:"#7C2FF9"}}>Plumber</Text>
                            <Image style={{width:15,height:15}} source={Images.Pictures.close}/>
                        </View>
                    </View>
                    
            </View>
        </>
    )
}

export default CustomerSearchFilter

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    border: {
        backgroundColor: "#00000010",
        height: 1,
        width: "100%",
        marginTop: 30
    },
    gender: {
        color: "#4D5D65",
        fontSize: 18,
        fontWeight: "500",
        paddingLeft: 20,
        paddingVertical: 20
    },
    btn: {
        backgroundColor: "#D5DAE220",
        borderColor: "#E7E7E7",
        borderWidth: 1,
        paddingHorizontal: 32,
        paddingVertical: 9,
        borderRadius: 8
    },
    btn1: {
        backgroundColor: "#0989FF20",
        borderColor: "#1CACE3",
        borderWidth: 1,
        paddingHorizontal: 32,
        paddingVertical: 9,
        borderRadius: 8
    },
    text:{
        color:"#9CA2AA",
    },
    text1:{
        color:"#1CACE3",
    },
    target:{
        paddingLeft:18,
        color:"#4D5D65",
        fontSize:18,
        fontWeight:"bold"
    },
    input: {
        height: 55,
        margin: 12,
        borderWidth: 1,
        width: "90%",
        borderColor: "#00000010",
        borderRadius: 10,
        paddingLeft: 20,

    },
    button:{
        flexDirection:"row",
        backgroundColor:"#FFEEEE",
        width:136,
        height:48,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        marginTop:20,
        borderRadius:10
    },
    button1:{
        flexDirection:"row",
        backgroundColor:"#F2EBFE",
        width:136,
        height:48,
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:10,
        marginTop:20,
        borderRadius:10
    }
})
