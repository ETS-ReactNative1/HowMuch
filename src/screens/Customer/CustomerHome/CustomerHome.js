import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image
} from 'react-native'

import { Button } from '../../../../components/Button/Button'
import { useMutation, useQuery } from '@apollo/client'
import { SignInAction } from '../../../../stores/actions/user.action'
import { useDispatch } from 'react-redux'
import {Header} from '../../../components/Header/Header'
 import {Images} from '../../../utils/Images'
import LinearGradient from 'react-native-linear-gradient'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
const CustomerHome = ({ navigation }) => {
    const[select,setSelect] = useState ("")
    
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <View style={styles.container}>
            <Header 
            menu={true}
            title='Home'
            serach={true}
            notification={true}
            />
                <View style={{height:"30%",justifyContent:"flex-end"}}>
           <Image
           style={styles.applogo} 
            source={Images.Pictures.appIcon}/>
         </View>
         <View style={{flexDirection:"row",justifyContent:"center",marginTop:"20%"}}>
         <TouchableOpacity 
         style={select == 0  ?  styles.button : styles.button1}
         onPress={() => setSelect(!select)}
         activeOpacity={0.9}
         >
             <Image 
             style={select ? styles.product : styles.product1}
             source={Images.Pictures.product} 
              />
             <Text style={select == 0 ? styles.test :styles.test1}> Product</Text>
         </TouchableOpacity>
         <TouchableOpacity 
           activeOpacity={1}
               style={select ?  styles.button : styles.button1}
               onPress={() => setSelect(!select)}
         > 
         <Image 
            style={select ? styles.product : [styles.product1,{tintColor:"#ffffff"}]}
         source={Images.Pictures.wrench}/>
         <Text style={select ? styles.test :styles.test1}>Services</Text>
         </TouchableOpacity>
         </View>
         <CustomerTabBar navigation={navigation} active="home" />
        </View>
      </>
    )
  }
  
  export default CustomerHome
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    applogo:{
        width:"60%",
        height:"60%",
        resizeMode:"contain",
        alignSelf:"center",marginTop:15
      },
      button:{
          borderWidth:2,
          borderColor:"#00000010",
          padding:44,
          alignItems:"center",
          borderRadius:15,
          marginHorizontal:10,
          justifyContent:"center"
      },
      button1:{
        padding:40,
        alignItems:"center",
        borderRadius:15,
        marginHorizontal:10,
        backgroundColor:"#0085FF"
      },
      product1:{
        width:40,
        height:40,
        resizeMode:"contain",
        tintColor:"#a3b1ba",
        alignSelf:"center"
      },
      product:{
        width:40,
        height:40,
        resizeMode:"contain",
        alignSelf:"center"
    },
    test1:{
      color:"#ffffff",
      fontSize:15,
      top:15
    },
    test:{
      color:"#000000",
      fontSize:15,
      top:15
    }
  })
  