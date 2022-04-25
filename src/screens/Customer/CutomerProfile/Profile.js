import React, { useState } from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'

const PersonalData = [
  {
    titleText: 'Business',
    infoText: 'SG Fabrics'
  },
  {
    titleText: 'Email Address',
    infoText: 'sgfabrics@gmail.com'
  },
  {
    titleText: 'Country',
    infoText: 'UAE'
  },
  {
    titleText: 'City',
    infoText: 'Sharjah'
  },
  {
    titleText: 'Phone Number',
    infoText: '+971 1234123'
  }, 
]

export const Profile = ({ navigation }) => {
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
          <Header menu={true} title="My Profile" notification={true} />
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 100,
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
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              activeOpacity={0.8}
              style={{ position: 'absolute', top: 0, right: 22 }}>
              <Image
                source={Images.Pictures.editIcon}
                style={styles.editImageStyle}
              />
            </TouchableOpacity>

            <View style={styles.TextView}>
              <Text style={styles.userTextStyle}>David Phillips</Text>
              <Text style={styles.userTextStyle2}>@davidphillips</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.vendorButtonStyle}>
              <Text style={styles.venderTextStyle}>Switch to vender</Text>
            </TouchableOpacity>
            <View style={styles.fieldCardStyle}>
              {PersonalData.map((item, index) => {
                return (
                  <>
                    <View style={[styles.fieldContainer]}>
                      <Text style={styles.titleTextStyle}>
                        {item.titleText}
                      </Text>
                      <Text style={styles.infoTextStyle}>{item.infoText}</Text>
                    </View>
                    {index !== PersonalData.length - 1 && (
                      <View style={styles.underLineView} />
                    )}
                  </>
                )
              })}
            </View>
          </View>
        </ScrollView>
        <CustomerTabBar navigation={navigation} active="Feeds" />
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
    justifyContent: 'center',
    overflow: 'hidden'
  },
  profileLogo: {
    height: '100%',
    width: '100%'
  },
  editImageStyle: {
    height: 36,
    width: 36,
    resizeMode: 'contain'
  },
  userTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(49, 56, 66, 1)'
  },
  userTextStyle2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'rgba(142, 142, 147, 1)',
    marginTop: 2
  },
  TextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18
  },
  vendorButtonStyle: {
    backgroundColor: 'rgba(255, 171, 8, 0.1)',
    width: '85%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
    borderRadius: 10
  },
  venderTextStyle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFAB08'
  },
  fieldCardStyle: {
    width: '88%',
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  },

  fieldContainer: {
    height: 60,
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  titleTextStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(50, 50, 50, .9)'
  },
  infoTextStyle: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.8)'
  },
  underLineView: {
    height: 0.8,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(146, 146, 148, .3)'
  }

})
