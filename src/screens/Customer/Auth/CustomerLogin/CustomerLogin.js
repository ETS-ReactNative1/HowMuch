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

const CustomerLogin = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [toggleIcon, setToggleIcon] = useState(false)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <ScrollView style={styles.container}>
        <Header
          back={true}
          container={{ marginTop: Platform.OS == 'ios' ? 45 : 10 }}
        />
        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.feildsView}>
          <View>
            <Text style={styles.feildsText}>Email Address</Text>
            <InputField onChange={text => setEmail(text)} value={email} />
          </View>
          <View>
            <Text style={styles.feildsText}>Password</Text>
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
        </View>
        <View style={styles.btnView}>
          <Button title="Login" />
        </View>
        <View style={styles.bottomBtnView}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.Forgot}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.Sign}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default CustomerLogin

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginText: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    marginLeft: 25,
    marginTop: 100
  },
  feildsView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 60
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
  }
})
