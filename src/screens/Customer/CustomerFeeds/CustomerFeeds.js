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
  })
  