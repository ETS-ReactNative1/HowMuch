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
const CustomerFeeds = ({ navigation }) => {
    const[select,setSelect] = useState ("")
    const card  = [
      {},
      {},
      {},
      {},
    ]
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
              <Text style={styles.select}>Select Location</Text>
              <View style={{flexDirection:"row"}}>
              <Image 
              style={styles.location}
              source={Images.Pictures.location}
              />
              <Text>36 Guild Street London, UK</Text>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.search} source={Images.Pictures.search}/>
              <TextInput 
                 style={styles.input}
              placeholder='Search'
              />
            <Image style={{width:68,height:68,resizeMode:"contain",alignSelf:"center"}} source={Images.Pictures.filter}/>
            </View>
            <View style={styles.row1}>
              <Text>Recommended Product</Text>
              <Text>View</Text>
            </View>
            <FlatList
               contentContainerStyle={{ paddingBottom: 50,height:"90%",marginTop:15 }}
            horizontal={true}
            data={card}
            renderItem={({}) => {
              return(
                <Card/>
              )
            }}
            >

            </FlatList>
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
      paddingTop:"8%",
      paddingBottom:14,
      paddingLeft:20
    },
    inputStyle:{
      borderWidth:1,
      borderColor:"#00000010",
    },
    input: {
      height: 55,
      margin: 12,
      borderWidth: 1,
     width:"75%",
     borderColor:"#00000010",
     borderRadius:10,
     paddingLeft:42
    },
    search:{
      position:"absolute",
      width:26,
      height:26,
      top:25,
      left:22
    },
    location:{
      width:20,
      height:20,
      resizeMode:"contain",
      marginRight:6
    },
    select:{
      paddingRight:20,fontSize:13
    },
    row1:{
      flexDirection:"row",
      justifyContent:"space-between",paddingHorizontal:20
    }
  })
  