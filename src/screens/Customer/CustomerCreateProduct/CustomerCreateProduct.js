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
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import { InputField } from '../../../components/InputField/InputField'

const CustomerCreateProduct = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header
          back={true}
          title="Create Product"
          container={{ marginTop: Platform.OS == 'ios' ? 30 : 10 }}
        />
        <View style={styles.firstView}>
          <View>
            <Image style={styles.logoImg} source={Images.Pictures.girl} />
          </View>
          <View>
            <Text style={styles.nameText}>Liza Ashlay</Text>
            <View style={styles.categoryView}>
              <Text style={styles.categoryText}>Select Categories</Text>
              <Image style={styles.down} source={Images.Pictures.downarrow} />
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default CustomerCreateProduct

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '8%',
    paddingBottom: 14
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#00000010'
  },
  logoImg: {
    height: 50,
    width: 50,
    marginTop: 3
  },
  firstView: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 25
  },
  nameText: {
    color: '#455267',
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 15
  },
  categoryText: {
    marginLeft: 7,
    margin: 2,
    color: '#434343',
    fontWeight: '400',
    fontSize: 12
  },
  down: {
    height: 7,
    width: 9,
    marginLeft: 5,
    marginRight: 7,
    marginTop: 7
  },
  categoryView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A9B7C1',
    borderRadius: 4,
    margin: 5,
    marginLeft: 15
  }
})
