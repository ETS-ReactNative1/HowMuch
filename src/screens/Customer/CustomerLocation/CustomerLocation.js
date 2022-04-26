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

const CustomerLocation = ({ navigation }) => {

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
            <View style={styles.container}>
                <Header
                    arrow={true}
                    title="Search"
                    dots={true}
                />
                <View
                    style={{ flexDirection: "row", marginTop: 25, marginBottom: 10 }}>
                    <TouchableOpacity

                        activeOpacity={0.9}
                    >
                        <Image style={styles.search} source={Images.Pictures.search} />
                    </TouchableOpacity>
                    <TextInput
                        placeholderTextColor="#212121"
                        style={styles.input}
                        placeholder='Search'
                    />
                </View>
                <View style={styles.set}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between", paddingHorizontal: 20,
                    }}>
                        <Text>Use current location</Text>
                        <View style={styles.radio1}>
                            <View style={styles.circle}></View>
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 2, backgroundColor: "#00000010", marginVertical: 10 }}></View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between", paddingHorizontal: 20,
                    }}>
                        <Text style={{color:"#768697"}}>Search location from map</Text>
                        <View style={styles.radio}></View>
                    </View>
                </View>
                <Text style={{ color: "#0C1A30", fontWeight: "bold", paddingLeft: 16, paddingBottom: 6 }}>Nearby location</Text>
                <View style={styles.row}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.clock} source={Images.Pictures.clock} />
                        <Text>688 Cherry Hill Driver Gulfport,</Text>
                    </View>
                    <Image style={styles.x} source={Images.Pictures.x} />
                </View>
                <View style={styles.row}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.clock} source={Images.Pictures.clock} />
                        <Text>158 Rockville Court Corona</Text>
                    </View>
                    <Image style={styles.x} source={Images.Pictures.x} />
                </View>
                <View style={styles.row}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.clock} source={Images.Pictures.clock} />
                        <Text>9854 East Old York st. Dalton</Text>
                    </View>
                    <Image style={styles.x} source={Images.Pictures.x} />
                </View>
            </View>
        </>
    )
}

export default CustomerLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "#00000010",
    },
    input: {
        height: 55,
        margin: 12,
        borderWidth: 1,
        width: "90%",
        borderColor: "#00000010",
        borderRadius: 10,
        paddingLeft: 42,
        // backgroundColor:"#F6F6F6"

    },
    search: {
        position: "absolute",
        width: 23,
        height: 23,
        top: 27,
        left: 22,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between", paddingHorizontal: 18,
        paddingVertical: 16
    },
    clock: {
        width: 20,
        height: 20, marginRight: 9
    },
    x: {
        width: 20,
        height: 20
    },
    radio: {
        width: 18,
        height: 18,
        borderColor: "#768697",
        borderWidth: 1.5,
        borderRadius: 30,
        alignItems:"center",justifyContent:"center",
    },
    radio1: {
        width: 18,
        height: 18,
        borderColor: "#0788FF",
        borderWidth: 1.5,
        borderRadius: 30,
        alignItems:"center",justifyContent:"center",
    },
    set: {

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor: "#FFFFFF", marginHorizontal: 20,
        paddingVertical: 20,
        borderRadius:10,
        marginBottom:25
    },
    circle:{
        width:10,
        height:10,
        backgroundColor:"#0788FF",
        borderRadius:30,
        
    }
})
