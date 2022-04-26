import React, { useState, useEffect, createRef } from 'react'
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
import { Header } from '../../../components/Header/Header'
import { Modals } from '../../../components/Modal/Modals'
import { Images } from '../../../utils/Images'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'

const CustomerHome = ({ navigation }) => {
  const [select, setSelect] = useState()
  const actionSheetRef = createRef()

  const openSheet = () => {
    setSelect(!select)
    actionSheetRef.current?.show()
  }
  const moveTo = () => {
    navigation.navigate('CustomerProducts')
    actionSheetRef.current?.hide()
  }
const services = () => {
  setSelect(!select)
  navigation.navigate('CustomerServices')
}
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header menu={true} title="Home" serach={true} notification={true} />
        <View style={{ height: '30%', justifyContent: 'flex-end' }}>
          <Image style={styles.applogo} source={Images.Pictures.appIcon} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '20%'
          }}>
          <TouchableOpacity
            style={select == 0 ? styles.button : styles.button1}
            onPress={() => openSheet()}
            activeOpacity={0.9}>
            <Image
              style={select == 0 ? styles.product1 : styles.product}
              source={Images.Pictures.product}
            />
            <Text style={select == 0 ? styles.test : styles.test1}>
              {' '}
              Product
            </Text>

            <ActionSheet
              containerStyle={styles.actionContainer}
              defaultOverlayOpacity={0.6}
              ref={actionSheetRef}>
              <View style={{ marginTop: 15 }}>
                <TouchableOpacity
                  onPress={() => moveTo()}
                  activeOpacity={0.8}
                  style={styles.mapContainer}>
                  <View style={styles.innerStylesheet}>
                    <Image
                      style={styles.stylesheetimgs}
                      source={Images.Pictures.imgss}
                    />
                    <Text style={styles.sheetText}>Buy</Text>
                  </View>
                  <View style={styles.innerStylesheet}>
                    <Image
                      style={styles.rightArrow}
                      source={Images.Pictures.rightArrow}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => moveToSell()}
                  activeOpacity={0.8}
                  style={styles.mapContainer}>
                  <View style={styles.innerStylesheet}>
                    <Image
                      style={styles.stylesheetimgs}
                      source={Images.Pictures.box}
                    />
                    <Text style={styles.sheetText}>Sell</Text>
                  </View>
                  <View style={styles.innerStylesheet}>
                    <Image
                      style={styles.rightArrow}
                      source={Images.Pictures.rightArrow}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </ActionSheet>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={select  ? styles.button : styles.button1}
            onPress={() => services()}
            // onPress={() => setSelect(!select)}
            >
            <Image
              style={
                select
                  ? styles.product
                  : [styles.product1, { tintColor: '#ffffff' }]
              }
              source={Images.Pictures.wrench}
            />
            <Text style={select ? styles.test : styles.test1}>Services</Text>
          </TouchableOpacity>
        </View>
        <CustomerTabBar navigation={navigation} active="home" />
      </View>
    </>
  )
}

export default CustomerHome

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  applogo: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 15
  },
  button: {
    borderWidth: 2,
    borderColor: '#00000010',
    padding: 44,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  button1: {
    padding: 40,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: '#0085FF'
  },
  product1: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: '#a3b1ba',
    alignSelf: 'center'
  },
  product: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  test1: {
    color: '#ffffff',
    fontSize: 15,
    top: 15
  },
  test: {
    color: '#000000',
    fontSize: 15,
    top: 15
  },
  centerView: {
    width: '100%',
    alignSelf: 'center'
  },
  actionContainer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  // shadows: {
  //   shadowColor: '#00000050',
  //   shadowOffset: {
  //     width: 0,
  //     height: 3
  //   },
  //   shadowOpacity: 0.27,
  //   shadowRadius: 4.65,
  //   elevation: 6
  // },
  mapContainer: {
    marginVertical: 16,
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 19
  },
  innerStylesheet: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  stylesheetimgs: {
    height: 50,
    width: 50
  },

  rightArrow: {
    width: 9,
    height: 16
  },
  sheetText: {
    marginLeft: 15,
    fontWeight: '500',
    fontSize: 15,
    color: '#404043'
  }
})
