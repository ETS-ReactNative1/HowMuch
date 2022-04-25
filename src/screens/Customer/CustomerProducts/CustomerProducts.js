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
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import LinearGradient from 'react-native-linear-gradient'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import { InputField } from '../../../components/InputField/InputField'
import { Card } from '../../../components/Card/Card'

const CustomerProducts = ({ navigation }) => {
  const [selected, setSelected] = useState('')
  const card = [
    {
      img: Images.Pictures.boll,
      title: 'Sports'
    },
    { img: Images.Pictures.music, title: 'Sports' },
    { img: Images.Pictures.car, title: 'Sports' },
    { img: Images.Pictures.boll, title: 'Sports' }
  ]

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header arrow={true} title="Products" notification={true} />
        <ScrollView
          contentContainerStyle={{ paddingBottom: '2%' }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <Text style={styles.select}>Select Location</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.location}
                source={Images.Pictures.location}
              />
              <Text>36 Guild Street London, UK</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.search} source={Images.Pictures.search} />
            <TextInput
              placeholderTextColor="#212121"
              style={styles.input}
              placeholder="Search"
            />
            <Image
              style={{
                width: 68,
                height: 68,
                resizeMode: 'contain',
                alignSelf: 'center'
              }}
              source={Images.Pictures.filter}
            />
          </View>
          <View style={styles.row1}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={card}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => setSelected(index)}
                    activeOpacity={0.8}
                    style={
                      selected === index ? styles.toplist : styles.toplisttow
                    }>
                    <Image
                      style={
                        selected === index
                          ? styles.toplisticontow
                          : styles.toplisticon
                      }
                      source={item.img}
                    />
                    <Text
                      style={
                        selected === index
                          ? styles.textlisttow
                          : styles.textlist
                      }>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                )
              }}></FlatList>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 15 }}
            horizontal={false}
            data={card}
            renderItem={({}) => {
              return (
                <Card
                  container={{
                    width: '88%',
                    alignSelf: 'center',
                    marginVertical: 10
                  }}
                />
              )
            }}></FlatList>
        </ScrollView>
      </View>
    </>
  )
}

export default CustomerProducts

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    paddingTop: '8%',
    paddingBottom: 14,
    paddingLeft: 20
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#00000010'
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
    width: '75%',
    borderColor: '#00000010',
    borderRadius: 10,
    paddingLeft: 42
  },
  search: {
    position: 'absolute',
    width: 26,
    height: 26,
    top: 25,
    left: 22
  },
  location: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 6
  },
  select: {
    paddingRight: 20,
    fontSize: 13
  },
  row1: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 10
  },
  toplist: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#0085FF'
  },
  toplisttow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  toplisticon: {
    width: 15,
    tintColor: '#000',
    height: 15,
    resizeMode: 'contain'
  },
  toplisticontow: {
    width: 15,
    tintColor: '#fff',
    height: 15,
    resizeMode: 'contain'
  },
  imges: {
    width: 38,
    height: 38
  },
  card: {
    backgroundColor: '#ffffff',
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderRadius: 12,
    alignItems: 'center',
    width: 115,
    height: 115,
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 11,
    fontWeight: '500',
    paddingTop: 8
  },
  textlist: {
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '400',
    color: '#212121'
  },
  textlisttow: {
    fontSize: 12,
    marginLeft: 10,
    fontWeight: '400',
    color: '#fff'
  }
})
