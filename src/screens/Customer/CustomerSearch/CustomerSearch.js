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

const CustomerSearch = ({ navigation }) => {

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
                    style={{ flexDirection: "row" ,marginTop:25,marginBottom:10}}>
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
                    <TouchableOpacity 
                    activeOpacity={0.9}
                    onPress={() => navigation.navigate('CustomerSearchFilter')}
                    >
                    <Image style={{ width: 62, height: 62, resizeMode: "contain", alignSelf: "center",marginTop:9 }} source={Images.Pictures.filter} />
                    </TouchableOpacity>
                </View>
                <Text style={{color:"#0C1A30",fontWeight:"bold",paddingLeft:16,paddingBottom:6}}>Terakhir Dicari</Text>
                <View style={styles.row}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={styles.clock} source={Images.Pictures.clock}/>
                    <Text>TMA2 Wireless</Text>
                    </View>
                    <Image style={styles.x} source={Images.Pictures.x}/>
                </View>
                <View style={styles.row}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={styles.clock} source={Images.Pictures.clock}/>
                    <Text>Cable</Text>
                    </View>
                    <Image style={styles.x} source={Images.Pictures.x}/>
                </View>
                <View style={styles.row}>
                    <View style={{flexDirection:"row"}}>
                    <Image style={styles.clock} source={Images.Pictures.clock}/>
                    <Text>Macbook</Text>
                    </View>
                    <Image style={styles.x} source={Images.Pictures.x}/>
                </View>
            </View>
        </>
    )
}

export default CustomerSearch

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
        width: "75%",
        borderColor: "#00000010",
        borderRadius: 10,
        paddingLeft: 42,

    },
    search: {
        position: "absolute",
        width: 23,
        height: 23,
        top: 27,
        left: 22
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",paddingHorizontal:18,
        paddingVertical:16
    },
    clock:{
        width:20,
        height:20,marginRight:9
    },
    x:{
        width:20,
        height:20
    }
})
