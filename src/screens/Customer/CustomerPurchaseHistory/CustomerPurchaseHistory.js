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
import LinearGradient from 'react-native-linear-gradient'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import { InputField } from '../../../components/InputField/InputField'
import { Card } from '../../../components/Card/Card'
import { Modals } from '../../../components/Modal/Modals'

const PurchaseHistory = ({ navigation }) => {
  const [isSelected, setisSelected] = useState(true)
  const card = [
    { TagStatus: false, bidBtnVisible: false },
    { TagStatus: true, bidBtnVisible: true },
    { bidBtnVisible: false },
    { bidBtnVisible: false }
  ]
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header arrow={true} title="Purchase History" serach={true} />
        <View style={styles.btnsView}>
          <Button
            onPress={() => setisSelected(true)}
            titleStyle={
              isSelected ? styles.textbtncolor : styles.textbtncolorblue
            }
            title="Service"
            containerStyle={
              isSelected ? styles.btnsstyles : styles.whitebtnsstyles
            }
          />
          <Button
            onPress={() => setisSelected(false)}
            titleStyle={
              isSelected ? styles.textbtncolorblue : styles.textbtncolor
            }
            title="Product"
            containerStyle={
              isSelected ? styles.whitebtnsstyles : styles.btnsstyles
            }
          />
        </View>
        <View style={styles.cardView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              alignSelf: 'center',
              paddingBottom: '32%'
            }}
            horizontal={false}
            data={card}
            renderItem={({ item }) => {
              return (
                <Card
                  TagVisible={true}
                  bidBtnVisible={item.bidBtnVisible}
                  howMushView={true}
                  bidbtnTitle={'Reviews'}
                  TagStatus={item.TagStatus}
                  container={{
                    alignSelf: 'center',
                    marginVertical: 10
                  }}
                />
              )
            }}></FlatList>
        </View>
      </View>
    </>
  )
}

export default PurchaseHistory

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btnsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginTop: 30
  },
  btnsstyles: {
    width: '45%',
    height: 40,
    backgroundColor: '#0989FF',
    borderRadius: 10,

    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  whitebtnsstyles: {
    width: '45%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,

    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  textbtncolor: {
    color: '#fff'
  },
  textbtncolorblue: {
    color: '#212121'
  },
  cardView: {
    marginTop: 25
  }
})
