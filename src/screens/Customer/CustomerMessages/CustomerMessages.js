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

import { useDispatch } from 'react-redux'
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import LinearGradient from 'react-native-linear-gradient'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import { InputField } from '../../../components/InputField/InputField'
import { ProfileCard } from '../../../components/ProfileCard/ProfileCard'
import { SwipeListView } from 'react-native-swipe-list-view'
import { Card } from '../../../components/Card/Card'
import { ToggleSwitch } from '../../../components/ToggleSwitch/index'
import { Button } from '../../../components/Button/Button'

const CustomerMessages = ({ navigation }) => {
  const [select, setSelect] = useState('')
  const product = [
    {},
    {
      image: Images.Pictures.girl2
    },
    {
      image: Images.Pictures.girl3
    },
    {
      image: Images.Pictures.girl
    },
    {},
    {
      image: Images.Pictures.girl2
    },
    {
      image: Images.Pictures.girl3
    }
  ]
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey)
    const newData = [...listData]
    const prevIndex = listData.findIndex(item => item.key === rowKey)
    newData.splice(prevIndex, 1)
  }
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <Image
          source={Images.Pictures.delete}
          style={{ height: 22, width: 22 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn1, styles.backRightBtnRight1]}
        onPress={() => closeRow(rowMap, data.item.key)}>
        <Image
          source={Images.Pictures.volume}
          style={{ height: 22, width: 22 }}
        />
      </TouchableOpacity>
    </View>
  )
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header
          menu={true}
          notification={true}
          title="Messages"
          serach={true}
        />
        <View style={{ marginTop: 30 }}>
          <SwipeListView
            data={product}
            renderHiddenItem={renderHiddenItem}
            showsVerticalScrollIndicator={false}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            rightOpenValue={-150}
            previewRowKey={'0'}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <ProfileCard image={item.image} />}
            // renderHiddenItem={(data, rowMap) => (
            //   <View style={styles.rowBack}></View>
            // )}
            ListFooterComponent={() => <View style={{ height: 120 }}></View>}
            // rightOpenValue={-75}
          />
        </View>
        <CustomerTabBar navigation={navigation} active="Messages" />
      </View>
    </>
  )
}

export default CustomerMessages

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 25,
    width: 75,
    right:25,
    backgroundColor: '#F14848',
    marginHorizontal:10,
    width:50,
    height:50,
    borderRadius:10
  },
  backRightBtnLeft: {
    backgroundColor: 'red',
    right: 70
  },
  backRightBtn1: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 25,
    width: 75,
    right:15,
    backgroundColor: '#1CACE3',
    marginHorizontal:10,
    width:50,
    height:50,
    borderRadius:10
  },
  backRightBtnLeft1: {
    backgroundColor: 'red',
    right: 10
  },
})
