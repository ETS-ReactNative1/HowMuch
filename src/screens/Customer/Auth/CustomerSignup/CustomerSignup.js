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
import { Header } from '../../../../components/Header/Header'
import { Images } from '../../../../utils/Images'

const CustomerSignup = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('1234567890')
  const [cpassword, setCPassword] = useState('1234567890')
  const [city, setCity] = useState('New York')
  const [country, setCountry] = useState('USA')
  const [toggleIcon, setToggleIcon] = useState(true)
  const [toggleIconc, setToggleIconc] = useState(true)
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <ScrollView style={styles.container}>
        <Header
          back={true}
          container={{ marginTop: Platform.OS == 'ios' ? 30 : 10 }}
        />
        <View>
          <Text style={styles.loginText}>Sign up</Text>
        </View>
        <View style={styles.imgView}>
          <Image style={styles.logoImg} source={Images.Pictures.dummy} />
          <TouchableOpacity activeOpacity={0.8}>
            <Image style={styles.plusimg} source={Images.Pictures.orangePlus} />
          </TouchableOpacity>
          <View style={styles.bloewimgTextView}>
            <Text style={styles.bloewimgText}>Add Profile Picture</Text>
          </View>
        </View>
        <View style={styles.feildsView}>
          <View>
            <Text style={styles.feildsText}>User Name</Text>
            <InputField
              onChange={text => setUserName(text)}
              value={userName}
              placeholder={'Jorden'}
            />
          </View>
          <View>
            <Text style={styles.feildsText}>Email Address</Text>
            <InputField
              onChange={text => setEmail(text)}
              value={email}
              placeholder={'matias@gmail.com'}
            />
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
          <View>
            <Text style={styles.feildsText}>Confirm Password </Text>
            <InputField
              onChange={text => setCPassword(text)}
              onPress={() => setToggleIconc(!toggleIconc)}
              value={cpassword}
              secureTextEntry={toggleIconc}
              eyeIcon={
                toggleIconc ? Images.Pictures.eyeicon : Images.Pictures.eye
              }
            />
          </View>
          <View style={styles.bottmView}>
            <View style={styles.bottmViewinner}>
              <Text style={styles.feildsText}>City</Text>
              <InputField onChange={text => setsetCity(text)} value={city} />
            </View>
            <View style={styles.bottmViewinnerTwo}>
              <Text style={styles.feildsText}>Country</Text>
              <InputField onChange={text => setCountry(text)} value={country} />
            </View>
          </View>
        </View>
        <View style={styles.btnView}>
          <Button title="Sign In" />
        </View>

        <View style={styles.bottomBtnView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CustomerRestPassword')}>
            <Text style={styles.Forgot}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CustomerLogin')}>
            <Text style={styles.Sign}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  )
}

export default CustomerSignup

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginText: {
    fontWeight: '700',
    fontSize: 25,
    lineHeight: 30,
    marginLeft: 25,
    marginTop: 40
  },
  feildsView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30
  },

  feildsText: {
    marginBottom: 22,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 20
  },
  bottmView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottmViewinner: {
    width: '45%'
  },
  bottmViewinnerTwo: {
    width: '45%'
    // marginLeft: 30
  },
  bottomBtnView: {
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
  btnView: {
    marginTop: 40
  },
  imgView: {
    alignSelf: 'center',
    marginTop: 30
  },
  plusimg: {
    height: 40,
    width: 40,
    marginLeft: 90
  },
  logoImg: {
    width: 140,
    height: 140,
    borderRadius: 150 / 2,
    marginBottom: -50
  },
  bloewimgText: {
    color: '#58677D',
    opacity: 0.5,
    fontWeight: '400',
    fontSize: 13
  },
  bloewimgTextView: {
    alignSelf: 'center',
    marginTop: 20
  }
})
