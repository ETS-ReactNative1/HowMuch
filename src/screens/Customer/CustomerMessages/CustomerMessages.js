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
            showsVerticalScrollIndicator={false}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => <ProfileCard image={item.image} />}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}></View>
            )}
            ListFooterComponent={() => <View style={{ height: 120 }}></View>}
            rightOpenValue={-75}
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
  }
})
