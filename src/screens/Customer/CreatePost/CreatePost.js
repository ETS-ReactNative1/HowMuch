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

import { useMutation, useQuery } from '@apollo/client'
import { SignInAction } from '../../../../stores/actions/user.action'
import { useDispatch } from 'react-redux'
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import LinearGradient from 'react-native-linear-gradient'
import { InputField } from '../../../components/InputField/InputField'
import { Card } from '../../../components/Card/Card'
import { ToggleSwitch } from '../../../components/ToggleSwitch/index'
import { Button } from '../../../components/Button/Button'
const CreatePost = ({ navigation }) => {
  const [select, setSelect] = useState('')
  const product = [
    {
      image: Images.Pictures.product1
    },
    {
      image: Images.Pictures.product2
    },
    {
      image: Images.Pictures.product3
    },
    {
      image: Images.Pictures.product4
    }
  ]
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header
          arrow={true}
          title="Recommended Feeds"
          onBackPress={() => navigation.goBack()}
          dots={true}
        />
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.border}></View>
          <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
            <Image style={styles.girl} source={Images.Pictures.girl} />
            <View>
              <Text style={styles.profileText}>Liza Ashlay</Text>
              <View style={styles.btn}>
                <Text style={styles.select}>Select Categories</Text>
                <Image style={styles.arrow} source={Images.Pictures.arrow} />
              </View>
            </View>
          </View>
          <Text style={styles.decription}>What are you looking for...</Text>
          <Text style={styles.locationText}>Location</Text>
          <View style={styles.row}>
            <Text>2743 Filbert Street, Bowmanstown, Pennsyl...</Text>
            <Image style={styles.location1} source={Images.Pictures.location} />
          </View>
          <Text style={styles.locationText}>Minimum Amount</Text>
          <View style={styles.row}>
            <Text>2743 Filbert Street, Bowmanstown, Pennsyl...</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 10
            }}>
            {product.map((item, index) => {
              return (
                <View>
                  <Image
                    style={{
                      width: 115,
                      height: 115,
                      marginHorizontal: 6,
                      resizeMode: 'contain',
                      marginVertical: 6
                    }}
                    source={item.image}
                  />
                </View>
              )
            })}
            <View style={styles.dotted}>
              <Text
                style={{ fontSize: 34, fontWeight: 'bold', color: '#CAD2DB' }}>
                +
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              paddingVertical: 20
            }}>
            <Text>Video chat enable</Text>
            {/* <ToggleSwitch/> */}
          </View>
          <Button title="Submit" containerStyle={{ width: 376 }} />
        </ScrollView>
      </View>
    </>
  )
}

export default CreatePost

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  border: {
    backgroundColor: '#00000020',
    width: '100%',
    height: 1,
    marginBottom: 20,
    marginTop: '10%'
  },
  girl: {
    width: 40,
    height: 40,
    marginRight: 14
  },
  profileText: {
    color: '#455267',
    fontSize: 17,
    fontWeight: 'bold'
  },
  arrow: {
    transform: [{ rotate: '270deg' }],
    width: 13,
    height: 13,
    resizeMode: 'contain',
    marginLeft: 4,
    top: 1.5
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#A9B7C1',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 3.5,
    borderRadius: 6,
    marginVertical: 6
  },
  select: {
    fontSize: 12,
    color: '#434343'
  },
  decription: {
    color: '#A9B7C1',
    paddingVertical: 25,
    paddingLeft: 20,
    fontSize: 16
  },
  location1: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 6
  },
  row: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    width: '85%',
    height: 50,
    alignSelf: 'center',
    //   backgroundColor:"red",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  locationText: {
    paddingLeft: 20,
    fontSize: 13,
    color: '#0C1A30',
    fontWeight: '500'
  },
  dotted: {
    backgroundColor: '#F5F5F5',
    width: 114,
    height: 108,
    marginTop: 8,
    borderRadius: 10,
    marginLeft: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#00000050'
  }
})
