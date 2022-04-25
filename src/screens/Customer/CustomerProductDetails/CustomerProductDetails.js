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

import { Button } from '../../../components/Button/Button'
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import { Card } from '../../../components/Card/Card'
import { Modals } from '../../../components/Modal/Modals'

const CustomerProductDetails = ({ navigation }) => {
  const [isOpen, setisOpen] = useState(false)

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
      <Header arrow={true} title="Products" notification={true} />
      <ScrollView>
        <View style={styles.profileView}>
          <TouchableOpacity activeOpacity={0.8} style={styles.mapContainer}>
            <View style={styles.innerStylesheet}>
              <Image
                style={styles.stylesheetimgs}
                source={Images.Pictures.imgbot}
              />
              <View>
                <Text style={styles.sheetText}>Mande Portman</Text>
                <Text style={styles.sheetTexttwo}>@mandeportman</Text>
              </View>
            </View>
            <View style={styles.innerStylesheet}>
              <Image style={styles.rightArrow} source={Images.Pictures.msg} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <View style={styles.containt}>
            <Image style={styles.mainImg} source={Images.Pictures.laptop} />
            <View>
              <Text
                style={{
                  color: '#0888FF',
                  fontSize: 11,
                  paddingVertical: 5,
                  marginTop: 10,
                  fontWeight: '400',
                  paddingLeft: 10
                }}>
                Sat, 26th Apr 9:00 PM
              </Text>
              <Text
                style={{
                  color: '#465061',
                  paddingLeft: 10,
                  fontSize: 18,
                  marginTop: 5,
                  fontWeight: '700'
                }}>
                Mac Laptop 7th Generation
              </Text>
            </View>
            <View style={{ paddingLeft: 10, marginTop: 10 }}>
              <Text style={{ color: '#333333', fontSize: 12, lineHeight: 20 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent in posuere dui. ctumst. Morbi vitae tincidunt leo.{' '}
                <Text
                  style={{ color: '#465061', fontSize: 12, fontWeight: '700' }}>
                  View More...
                </Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.topViewlist}>
            <Text style={styles.txtone}>Related Product</Text>
            <TouchableOpacity>
              <Text style={styles.txttwo}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              marginLeft: 20,
              paddingRight: 35
            }}
            horizontal={true}
            data={card}
            renderItem={({}) => {
              return (
                <Card
                  onPress={() => navigation.navigate('CustomerProductDetails')}
                  onBidPress={() => setisOpen(true)}
                  container={{
                    alignSelf: 'center',
                    marginVertical: 10
                  }}
                />
              )
            }}></FlatList>
        </View>
        <View style={styles.btnView}>
          <Button title="Bid Now" />
        </View>
        <Modals
          onCross={() => setisOpen(false)}
          onPress={() => setisOpen(false)}
          visibleState={isOpen}
        />
      </ScrollView>
    </>
  )
}

export default CustomerProductDetails

const styles = StyleSheet.create({
  mapContainer: {
    marginVertical: 16,
    width: '88%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 20
  },
  profileView: {
    marginTop: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  innerStylesheet: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  stylesheetimgs: {
    height: 50,
    width: 50,
    borderRadius: 100,
    resizeMode: 'contain'
  },
  sheetText: {
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 11,
    color: '#000'
  },
  sheetTexttwo: {
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 10,
    color: '#979797'
  },
  rightArrow: {
    width: 20,
    height: 18,
    resizeMode: 'contain'
  },
  details: {
    justifyContent: 'flex-start',
    marginHorizontal: 25,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },
  containt: {
    padding: 20,
    alignSelf: 'center'
  },
  mainImg: {
    width: 340,
    height: 210,
    resizeMode: 'contain'
  },
  topViewlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 50
  },
  txtone: {
    color: '#313842',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 16
  },
  txttwo: {
    color: '#58677D',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 13
  },
  btnView: {
    marginTop: 60,
    marginBottom: 20
  }
})
