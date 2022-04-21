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
import { useMutation, useQuery } from '@apollo/client'
import { SignInAction } from '../../../../stores/actions/user.action'
import { useDispatch } from 'react-redux'
import { Header } from '../../../../components/Header/Header'
import { Images } from '../../../../utils/Images'
import {} from '../../../../components/Button/Button'

const CustomerRestPassword = ({ navigation }) => {
  const [email, setEmail] = useState('')

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <ScrollView style={styles.container}>
        <Header
          back={true}
          container={{ marginTop: Platform.OS == 'ios' ? 30 : 10 }}
        />
        <View>
          <Text style={styles.loginText}>Reset Password</Text>
        </View>
        <View>
          <Text style={styles.innerText}>
            Kami telah mengirimkan kode verifikasi ke +628*******716{' '}
            <Text style={styles.innerTextColor}>Ganti?</Text>
          </Text>
        </View>
        <View style={styles.feildsView}>
          <View>
            <Text style={styles.feildsText}>Email Address</Text>
            <InputField
              onChange={text => setEmail(text)}
              value={email}
              placeholder={'matias@gmail.com'}
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('CustomerOtp')}>
            <Button title="Reset" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default CustomerRestPassword

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
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
  },
  feildsText: {
    marginBottom: 22,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 20
  },
  btnView: {
    marginTop: 70
  },
  bottomBtnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 38,
    marginTop: 80
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
  }
})
