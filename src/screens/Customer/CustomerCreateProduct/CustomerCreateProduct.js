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

import { Button } from '../../../components/Button/Button'
import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import { CustomerTabBar } from '../../../components/CustomerTab/CustomerTab'
import { InputField } from '../../../components/InputField/InputField'
import ToggleSwitch from 'toggle-switch-react-native'

const CustomerCreateProduct = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [textArea, setTextArea] = useState('')
  const [isEnabled, setIsEnabled] = useState(!isEnabled)

  const lengthChecker = text => {
    if (text.length <= 200) {
      setTextArea(text)
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <ScrollView style={styles.container}>
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
            <TouchableOpacity
              style={styles.categoryView}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CustomerSelectCategory')}>
              <Text style={styles.categoryText}>Select Categories</Text>
              <Image style={styles.down} source={Images.Pictures.downarrow} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.feildsView}>
          <View>
            <Text style={styles.feildsText}>Product Title</Text>
            <InputField
              container={{ backgroundColor: '#F5F5F5' }}
              onChange={text => setTitle(text)}
              value={title}
              placeholder={'Enter product title...'}
            />
          </View>
          <View style={styles.textView}>
            <Text style={styles.feildsText}>Product Description</Text>
            <InputField
              multiline={true}
              numberOfLines={10}
              container={{
                backgroundColor: '#F5F5F5',
                height: 85,
                paddingBottom: 30
              }}
              onChange={text => lengthChecker(text)}
              value={textArea}
              placeholder={'Enter product description...'}
            />
            <View style={styles.textareaView}>
              <Image
                style={styles.textlines}
                source={Images.Pictures.textarea}
              />
            </View>
            <View style={styles.count}>
              <Text style={styles.counttext}>{textArea.length}/200</Text>
            </View>
          </View>
          <View>
            <Text style={styles.feildsText}>Location</Text>
            <InputField
              eyeIcon={Images.Pictures.location}
              container={{ backgroundColor: '#F5F5F5' }}
              onChange={text => setTitle(text)}
              value={title}
              placeholder={'2743 Filbert Street, Bowmanstown, Pennsyl...'}
            />
          </View>
          <View style={{ marginTop: 14 }}>
            <Text style={styles.feildsText}>Minimum Amount</Text>
            <InputField
              container={{ backgroundColor: '#F5F5F5' }}
              onChange={text => setTitle(text)}
              value={title}
              placeholder={'Enter Amount'}
            />
          </View>

          <TouchableOpacity>
            <View style={[styles.addCard]}>
              <View style={[styles.innerView]}>
                <Image
                  style={styles.imageStyle}
                  source={Images.Pictures.blueplus}
                />
                <Text style={styles.addText}>Add Media</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.btnView}>
            <View>
              <Text style={styles.feildsText}>Video chat enable</Text>
            </View>
            <View>
              <ToggleSwitch
                isOn={isEnabled}
                trackOnStyle={styles.trackOnStyle}
                trackOffStyle={styles.trackOffStyle}
                thumbOnStyle={styles.thumbOnStyle}
                thumbOffStyle={styles.thumbOffStyle}
                onColor={'#0989FF'}
                offColor={'#fff'}
                labelStyle={{ color: 'black', fontWeight: '900' }}
                size="small"
                onToggle={() => setIsEnabled(!isEnabled)}
              />
            </View>
          </View>
          <View style={styles.btnBottom}>
            <Button title="Submit" />
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 150 / 2,
    marginTop: 3
  },
  firstView: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 15
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
    height: 5,
    width: 9,
    marginLeft: 5,
    marginRight: 7,
    marginTop: 8
  },
  categoryView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A9B7C1',
    borderRadius: 4,
    margin: 5,
    marginLeft: 15
  },
  feildsView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 40
  },
  textView: {
    marginTop: 13
  },
  textlines: {
    height: 8,
    width: 8
  },
  textareaView: {
    alignSelf: 'flex-end',
    marginTop: 90,
    right: 6,
    position: 'absolute'
  },
  count: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  counttext: {
    color: '#778897',
    fontWeight: '400',
    fontSize: 11,
    opacity: 0.5
  },
  addCard: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 1,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#0989FF',
    height: 60,
    marginTop: 20,
    backgroundColor: 'rgba(9, 137, 255, 0.1)',
    marginVertical: 10
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageStyle: {
    height: 20,
    width: 20
  },
  addText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#0989FF',
    marginLeft: 10
  },
  feildsText: {
    fontWeight: '500',
    fontSize: 13,
    color: '#0C1A30'
  },
  btnView: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  trackOnStyle: {
    width: 37,
    height: 21
  },
  trackOffStyle: {
    width: 37,
    height: 21,
    backgroundColor: '#D5D8E3'
  },
  thumbOnStyle: {
    height: 17,
    width: 17,
    marginLeft: 0
  },
  thumbOffStyle: {
    height: 17,
    width: 17,
    marginLeft: 3
  },
  btnBottom: {
    marginVertical: 40
  }
})
