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

const CustomerSubmitReview = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [textArea, setTextArea] = useState('')

  const lengthChecker = text => {
    if (text.length <= 250) {
      setTextArea(text)
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header arrow={true} title="Submit Review" />
        <View style={styles.feildsView}>
          <View>
            <InputField
              container={{ backgroundColor: '#F5F5F5' }}
              onChange={text => setTitle(text)}
              value={title}
              inputStyle={styles.inputtxt}
              placeholder={'Subject'}
            />
          </View>
          <View style={styles.textView}>
            <InputField
              multiline={true}
              inputStyle={styles.inputtxt}
              numberOfLines={10}
              container={{
                backgroundColor: '#F5F5F5',
                height: 125,
                paddingBottom: 80
              }}
              onChange={text => lengthChecker(text)}
              value={textArea}
              placeholder={'Type your review...'}
            />
            <View style={styles.count}>
              <Text style={styles.counttext}>{textArea.length}/250</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnbtm}>
          <Button title="Submit" />
        </View>
      </View>
    </>
  )
}

export default CustomerSubmitReview

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  feildsView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 40
  },
  feildsText: {
    fontWeight: '500',
    fontSize: 13,
    color: '#0C1A30'
  },
  textView: {
    marginTop: 13
  },
  count: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 20
  },
  counttext: {
    color: '#778897',
    fontWeight: '400',
    fontSize: 11,
    opacity: 0.5
  },
  inputtxt: {
    color: '#0C1A30',
    opacity: 0.5
  },
  btnbtm: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center'
  }
})
