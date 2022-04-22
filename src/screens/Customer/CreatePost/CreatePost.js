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
  Image,
  TextInput,
  FlatList

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
import { Card } from '../../../components/Card/Card'
const CreatePost = ({ navigation }) => {
    const[select,setSelect] = useState ("")
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
        <View style={styles.container}>
            <Header 
            arrow={true}
            title='Recommended Feeds'
            onBackPress={() => navigation.goBack()}
            dots={true}
            />
            <View style={styles.border}></View>
            <View style={{flexDirection:"row",paddingLeft:15}}>
                <Image style={styles.girl} source={Images.Pictures.girl}/>
                <Text style={styles.profileText}>Liza Ashlay</Text>
            </View>
            <Card 
            container={{width:"88%",alignSelf:"center"}}
            />
        </View>
      </>
    )
  }
  
  export default CreatePost
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    border:{
        backgroundColor:"#00000020",
        width:"100%",
        height:1,
        marginBottom:20,
        marginTop:"10%"
    },
    girl:{
        width:40,
        height:40,
        marginRight:14
    },
    profileText:{
      color:"#455267",
      fontSize:17,
      fontWeight:"bold"
        
    }
  })
  