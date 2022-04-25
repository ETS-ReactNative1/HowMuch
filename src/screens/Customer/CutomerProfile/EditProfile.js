import React, { useState } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Images } from '../../../utils/Images'
import { Header } from '../../../components/Header/Header'
import { Button } from '../../../components/Button/Button'
import { InputField } from '../../../components/InputField/InputField'

export const EditProfile = ({ navigation }) => {
  const [status, setStatus] = useState(1)

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={styles.container}>
        <View style={{ marginTop: 40 }}>
          <Header title="Edit Profile" arrow={true} />
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 10,
            paddingTop: 35
          }}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoImageContainer}>
            <View style={styles.logoImageView}>
              <Image
                source={Images.Pictures.girl3}
                style={styles.profileLogo}
              />

              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.cameraImageView}>
                <Image
                  source={Images.Pictures.camera}
                  style={styles.cameraIconStyle}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.inputContainers]}>
            <View style={[styles.innerView]}>
              <Text style={[styles.text]}>Full Name</Text>
              <InputField
                placeholder={'Full Name'}
                placeholderTextColor={'#00000030'}
                inputStyle={{ fontSize: 13, fontWeight: '400' }}
                container={{ backgroundColor: '#F5F5F5' }}
                value="Anna Howard"
              />
            </View>

            <View style={[styles.innerView]}>
              <Text style={[styles.text]}>Email Address</Text>
              <InputField
                placeholder={'Email Address'}
                placeholderTextColor={'#00000030'}
                inputStyle={{ fontSize: 13, fontWeight: '400' }}
                container={{ backgroundColor: '#F5F5F5' }}
                value="annahoward@gmail.com"
              />
            </View>

            <View style={[styles.innerView]}>
              <Text style={[styles.text]}>Country</Text>
              <InputField
                placeholder={'Country'}
                placeholderTextColor={'#00000030'}
                inputStyle={{ fontSize: 13, fontWeight: '400' }}
                container={{ backgroundColor: '#F5F5F5' }}
                value="UAE"
              />
            </View>

            <View style={[styles.innerView]}>
              <Text style={[styles.text]}>City</Text>
              <InputField
                placeholder={'City'}
                placeholderTextColor={'#00000030'}
                inputStyle={{ fontSize: 13, fontWeight: '400' }}
                container={{ backgroundColor: '#F5F5F5' }}
                value="Sharjah"
              />
            </View>

            <View style={[styles.innerView]}>
              <Text style={[styles.text]}>Phone Number</Text>
              <InputField
                placeholder={'Phone Number'}
                placeholderTextColor={'#00000030'}
                inputStyle={{ fontSize: 13, fontWeight: '400' }}
                container={{ backgroundColor: '#F5F5F5' }}
                value="+971 12234123"
              />
            </View>

            <View style={[styles.innerView]}>
              <Text style={[styles.text]}>Date of birth</Text>
              <InputField
                placeholder={'Date of birth'}
                placeholderTextColor={'#00000030'}
                inputStyle={{ fontSize: 13, fontWeight: '400' }}
                container={{ backgroundColor: '#F5F5F5' }}
                value="7 Sep, 1992"
              />
            </View>
          </View>
          <View style={styles.saveButtonContainer}>
            <Button title={'Save Changes'} containerStyle={{ width: '87%' }} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logoImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  logoImageView: {
    height: 110,
    width: 110,
    borderRadius: 65,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileLogo: {
    height: '100%',
    width: '100%'
  },

  //   },
  cameraIconStyle: {
    height: 15,
    width: 17,
    resizeMode: 'cover'
  },
  cameraImageView: {
    height: 35,
    width: 35,
    borderRadius: 18,
    backgroundColor: '#0989FF',
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1
  },

  inputContainers: {
    marginTop: 20,
    marginRight: 5,
    width: '87%',
    alignSelf: 'center'
  },
  innerView: {
    marginVertical: 10
  },

  text: {
    color: '#0C1A30',
    fontSize: 13,
    fontWeight: '500',

    marginBottom: 11
  },
  saveButtonContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40
  }
})
