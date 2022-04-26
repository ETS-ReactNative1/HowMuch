import React, { useState, useEffect, useRef } from 'react'
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
  Easing,
  Animated,
  FlatList
} from 'react-native'

import { Button } from '../../../components/Button/Button'
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import LinearGradient from 'react-native-linear-gradient'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import { InputField } from '../../../components/InputField/InputField'
import { Card } from '../../../components/Card/Card'
import { Modals } from '../../../components/Modal/Modals'
import { useIsFocused } from '@react-navigation/native'
import Popover from 'react-native-popover-view'

const CustomerIntersted = ({ navigation }) => {
  const [showPopover, setShowPopover] = useState(false)

  const isFocuesd = useIsFocused()
  const touchable = useRef()
  const [expanded, setExpanded] = React.useState(false)
  const animationWidth = React.useRef(new Animated.Value(0)).current

  useEffect(() => {
    setShowPopover(false)
  }, [isFocuesd])

  React.useEffect(() => {
    if (expanded) {
      Animated.timing(animationWidth, {
        duration: 1000,
        toValue: 220,
        useNativeDriver: false,
        easing: Easing.ease
      }).start()
    } else {
      Animated.timing(animationWidth, {
        duration: 1000,
        toValue: 0,
        useNativeDriver: false,
        easing: Easing.ease
      }).start()
    }
  }, [expanded])

  const card = [
    {
      accepted: true
    },
    {},
    {},
    {}
  ]

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header arrow={true} title="Intrested" serach={true} />
        <View style={styles.topView}>
          <Text style={styles.textstyle}>Intersted Vendors 25</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            ref={touchable}
            onPress={() => setShowPopover(true)}
            title={'Sort by'}
            style={[styles.btnContainer]}>
            <Image style={styles.Path} source={Images.Pictures.Path} />
            <Text style={styles.test}>Sort by</Text>
          </TouchableOpacity>
          <Popover
            popoverStyle={{ borderRadius: 10 }}
            from={touchable}
            arrowShift={0.7}
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}>
            <View style={styles.pop}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  width: 140,
                  borderBottomWidth: 1,
                  borderBottomColor: '#efefef'
                }}>
                <Image
                  source={Images.Pictures.block}
                  style={{ height: 20, width: 0, marginHorizontal: 10 }}
                />
                <Text style={Images.Pictures.block}>Lowest price</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  padding: 10,
                  width: 140,
                  borderBottomWidth: 1,
                  borderBottomColor: '#efefef'
                }}>
                <Image
                  source={Images.Pictures.report}
                  style={{ height: 20, width: 0, marginHorizontal: 10 }}
                />
                <Text style={Images.Pictures.block}>Highest rating</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', padding: 10, width: 110 }}>
                <Image
                  source={Images.Pictures.report}
                  style={{ height: 20, width: 0, marginHorizontal: 10 }}
                />
                <Text style={Images.Pictures.block}>Select Date</Text>
              </TouchableOpacity>
            </View>
          </Popover>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignSelf: 'center'
          }}
          numColumns={2}
          data={card}
          renderItem={({ item }) => {
            return (
              <View style={styles.shadowView}>
                <View style={styles.mapContainer}>
                  <Image
                    style={styles.imgmain}
                    source={Images.Pictures.girl1}
                  />
                  <Text style={styles.txtcard}>Micheal Ulasi</Text>
                  <View style={styles.plumerView}>
                    <Image
                      style={styles.reddot}
                      source={Images.Pictures.reddot}
                    />
                    <Text style={styles.txtred}>Plumber</Text>
                  </View>
                  <View style={styles.bidView}>
                    <Text style={styles.bidtext}>Bid $20.00</Text>
                  </View>
                  <View style={styles.btnsView}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={
                        item.accepted ? styles.whitebtn : styles.orangebtn
                      }>
                      <Text
                        style={
                          item.accepted ? styles.txtwhite : styles.txtorange
                        }>
                        {item.accepted ? 'Accepted' : 'Accept'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={item.accepted ? styles.msgbtnblue : styles.msgbtn}>
                      <Image
                        style={styles.msgicon}
                        source={Images.Pictures.whitemsg}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }}></FlatList>
      </View>
    </>
  )
}

export default CustomerIntersted

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnContainer: {
    backgroundColor: '#2E9BFF',
    flexDirection: 'row',
    alignItems: 'center',
    width: '26%',
    height: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 4.7,
    marginBottom: 3
  },
  orangebtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFAB08',
    marginRight: 10
  },
  whitebtn: {
    backgroundColor: '#FFAB08',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFAB08',
    marginRight: 10
  },
  msgbtn: {
    backgroundColor: '#C1C1C2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 30
  },
  msgbtnblue: {
    backgroundColor: '#0989FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 30
  },
  mapContainer: {
    padding: 20,
    marginVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: -8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 22
  },
  shadowView: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    margin: 5
  },
  textstyle: {
    color: '#252529',
    fontSize: 15,
    fontWeight: '500',
    alignSelf: 'center'
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20
  },
  test: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 10
  },
  Path: {
    width: 7,
    height: 7
  },
  imgmain: {
    width: 45,
    height: 45
  },
  txtcard: {
    fontSize: 13,
    fontWeight: '600',
    color: '#455267',
    lineHeight: 16,
    marginTop: 10
  },
  txtred: {
    color: '#FE5151',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
    marginTop: 3
  },
  plumerView: {
    flexDirection: 'row'
  },
  reddot: {
    width: 4,
    height: 4,
    marginTop: 7,
    marginRight: 5
  },
  bidtext: {
    color: '#465061',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12
  },
  bidView: {
    borderRadius: 5,
    backgroundColor: '#ECEDEF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10
  },
  txtorange: {
    textAlign: 'center',
    color: '#FFAB08',
    fontWeight: '500',
    fontSize: 11
  },
  txtwhite: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 11
  },
  btnsView: {
    marginTop: 15,
    flexDirection: 'row'
  },
  msgicon: {
    height: 15,
    width: 20,
    resizeMode: 'contain',
    tintColor: '#ffffff'
  }
})
