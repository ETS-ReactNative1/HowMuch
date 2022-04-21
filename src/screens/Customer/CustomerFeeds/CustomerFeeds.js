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
import { InputField } from '../../../components/InputField/InputField'

const CustomerFeeds = ({ navigation }) => {
    const[select,setSelect] = useState ("")
    
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <View style={styles.container}>
            <Header 
            menu={true}
            title='Recommended Feeds'
            notification={true}
            />
            <View style={styles.row}>
              <Text>Select Location</Text>
              <Text>36 Guild Street London, UK</Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <InputField 
            inputStyle={styles.inputStyle}
            placeholder="Search"
            />
            <Image source={Images.Pictures.filter}/>
            </View>
         <CustomerTabBar navigation={navigation} active="Feeds" />
        </View>
      </>
    )
  }
  
  export default CustomerFeeds
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    row:{
      flexDirection:"row",
      justifyContent:"space-around",
      paddingTop:"8%",
      paddingBottom:14
    },
    inputStyle:{
      borderWidth:1,
      borderColor:"#00000010",
      width:"70%"
    }
  })
  