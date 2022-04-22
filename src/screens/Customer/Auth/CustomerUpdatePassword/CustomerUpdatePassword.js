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
import { InputField } from '../../../../components/InputField/InputField'
import { Button } from '../../../../components/Button/Button'
import { Images } from '../../../../utils/Images'

const CustomerUpdatePassword = ({ navigation }) => {
  const [password, setPassword] = useState('1234567890')
  const [cpassword, setCPassword] = useState('1234567890')
  const [toggleIcon, setToggleIcon] = useState(true)
  const [toggleIconc, setToggleIconC] = useState(true)

  const update = () => {
    if (password != cpassword) {
      alert("pasword dosn't matched")
    } else if (password.length < 6 && cpassword.length < 6) {
      alert('Minimus 6 Character Allowed')
    } else if (password.length > 20 && cpassword.length > 20) {
      alert('Maximum 20 Character Allowed')
    } else {
      alert('Password Updated Successfully')
      navigation.navigate('CustomerLogin')
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.loginText}>Update Password</Text>
        </View>
        <View>
          <Text style={styles.innerText}>
            Lengkapi data terakhir berikut untuk masuk ke aplikasi Mega Mall
          </Text>
        </View>
        <View style={styles.feildsView}>
          <View>
            <Text style={styles.feildsText}>New Password</Text>
            <InputField
              onChange={text => setPassword(text)}
              onPress={() => setToggleIcon(!toggleIcon)}
              value={password}
              secureTextEntry={toggleIcon}
              eyeIcon={
                toggleIcon ? Images.Pictures.eyeicon : Images.Pictures.eye
              }
            />
          </View>
          <View style={styles.warningView}>
            <Image style={[styles.logoImg]} source={Images.Pictures.question} />
            <Text style={styles.wraningText}>
              Kata sandi harus 6 karakter atau lebih
            </Text>
          </View>
          <View>
            <Text style={styles.feildsText}>Confirm New Password</Text>
            <InputField
              onChange={text => setCPassword(text)}
              onPress={() => setToggleIconC(!toggleIconc)}
              value={cpassword}
              secureTextEntry={toggleIconc}
              eyeIcon={
                toggleIconc ? Images.Pictures.eyeicon : Images.Pictures.eye
              }
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <Button title="Save Update" onPress={() => update()} />
        </View>
      </ScrollView>
    </>
  )
}

export default CustomerUpdatePassword

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
  warningView: {
    flexDirection: 'row',
    marginTop: 10
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
  wraningText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#838589',
    lineHeight: 25,
    marginLeft: 10
  },
  logoImg: {
    width: 15,
    height: 15,
    marginTop: 6
  }
})
