import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native'
import { InputField } from '../../../../components/InputField/InputField'
import { Button } from '../../../../components/Button/Button'
import { Header } from '../../../../components/Header/Header'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import CountDown from 'react-native-countdown-component'

const CustomerOtp = ({ navigation }) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.loginText}>Verification</Text>
        </View>
        <View style={styles.bottomBtnView}>
          <Text style={styles.Forgot}>Verification Code</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.Sign}>Re-send Code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.feildsView}>
          <OTPInputView
            style={{ width: '80%', height: 20 }}
            pinCount={4}
            autoFocusOnLoad
            keyboardType={'default'}
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`)
            }}
          />
        </View>
        <View style={styles.bottomBtnViewTwo}>
          <View>
            <Text style={styles.headings}>Kirim kode ulang dalam</Text>
          </View>
          <View style={styles.otpView}>
            {/* <Text style={styles.time}> */}
            <CountDown
              until={300}
              timeToShow={['M', 'S']}
              timeLabels={{ m: 'MM', s: 'SS' }}
              style={{ width: '15%' }}
              digitStyle={{ backgroundColor: 'none' }}
              // onFinish={() => alert('finished')}
              separatorStyle={{
                color: '#838589',
                marginBottom: 16,
                marginLeft: -5
              }}
              digitTxtStyle={{ color: '#838589' }}
              onPress={() => alert('hello')}
              timeLabelStyle={{ color: 'transparent' }}
              showSeparator
              size={12}
            />
            {/* </Text> */}
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('CustomerUpdatePassword')}
          style={styles.btnView}>
          <Button title="Continue" />
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default CustomerOtp

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginText: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    marginLeft: 25,
    marginTop: 90
  },
  feildsView: {
    width: '100%',
    alignItems: 'center'
  },
  feildsText: {
    marginBottom: 22,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 20
  },
  btnView: {
    marginTop: 30
  },
  bottomBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 38,
    marginTop: 120
  },
  bottomBtnViewTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 38,
    marginTop: 50
  },
  Forgot: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18
  },
  Sign: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: '#3669C9'
  },
  innerText: {
    marginLeft: 25,
    marginRight: 50,
    marginTop: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#838589',
    lineHeight: 25
  },
  innerTextColor: {
    color: '#3669C9'
  },
  underlineStyleBase: {
    width: 74,
    height: 50,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: '#FAFAFA'
  },
  headings: {
    fontWeight: '400',
    color: '#838589',
    fontSize: 12
  },
  time: {
    color: '#838589',
    fontSize: 12,
    fontWeight: '700'
  },
  otpView: {
    marginTop: -6,
    marginRight: -40
  }
})
