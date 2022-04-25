import React, { useState } from 'react'
import {
  View,
  Modal,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  TouchableWithoutFeedback
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Images } from '../../utils/Images'
import { Button } from '../Button/Button'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')
const Citydata = ['Al Mawasi', 'Bethlehem', 'Gaza', 'Hebron']

export const Modals = ({
  visibleState = false,
  data = [],
  onPress = () => {},
  onCross = () => {},
  textStyle = {},
  onSetValue = e => {}
}) => {
  const [number, onChangeNumber] = useState('524')
  const navigation = useNavigation()

  const checking = text => {
    if (text.length <= 4) {
      onChangeNumber(text)
    }
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visibleState}
      onRequestClose={onCross}>
      {/* <TouchableWithoutFeedback onPress={onCross}> */}
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.topView}>
            <Text style={styles.txtstyle}>
              How Much<Text style={styles.txtstyletwo}> - Product</Text>
            </Text>
            <TouchableOpacity onPress={onCross}>
              <Image style={styles.crossX} source={Images.Pictures.crossX} />
            </TouchableOpacity>
          </View>
          <View style={styles.midView}>
            <View style={styles.midinnerView}>
              <Text style={styles.feildtxtstyle}>AED.</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => checking(text)}
                value={number}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.midibottmView}>
              <Text style={styles.midibottmtxt}>Enter Digits</Text>
            </View>
          </View>
          <View style={styles.btnView}>
            <Button
              onPress={onPress}
              containerStyle={{ width: '100%' }}
              title={'Submit Bid'}
            />
          </View>
        </View>
      </View>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  )
}

const styles = StyleSheet.create({
  crossView: {
    marginLeft: 20,
    marginTop: Platform.OS == 'ios' ? 60 : 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  txtstyle: {
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 0.2,
    color: '#0C1A30'
  },
  txtstyletwo: {
    color: '#B4C3DA',
    fontWeight: '500'
  },
  topView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  crossX: {
    width: 13,
    height: 13,
    marginTop: 5
  },
  midView: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    padding: 35,
    borderRadius: 8,
    marginTop: 45
  },
  midinnerView: {
    flexDirection: 'row',
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  feildtxtstyle: {
    fontSize: 16,
    color: '#989797',
    opacity: 0.5,
    fontWeight: '400'
  },
  input: {
    fontSize: 50,
    fontWeight: '500',
    color: '#000',
    marginTop: -45
  },
  midibottmtxt: {
    fontSize: 11,
    fontWeight: '300',
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: -10
  },
  btnView: {
    marginTop: 45,
    width: '80%'
  }
})
