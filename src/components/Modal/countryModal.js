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
  Platform
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from '../../components/Button/Button'
import { Images } from '../../utils/Images'

const {width, height} = Dimensions.get('screen')
const Citydata = [
  'Al Mawasi',
  'Bethlehem',
  'Gaza',
  'Hebron',
  'Jenin',
  'Jericho',
  'Nablus',
  'Ramallah',
  'Bhimbar',
  'Kotli',
  'Kotli District'
]

export const CountryModal = ({
  visibleState = false,
  data = [],
  onPress = () => {},
  onCross = () => {},
  textStyle = {},
  onSetValue = e => {},
  onChange = text => {}
}) => {
  const close = e => {
    onSetValue(e)
    onCross()
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visibleState}
      onRequestClose={onCross}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.crossView}>
            <TouchableOpacity activeOpacity={0.8} onPress={onCross}>
              <Image
                source={Images.Pictures.crossIcon}
                style={styles.ImageStyle}
              />
            </TouchableOpacity>
            <View style={styles.inputserach}>
              <TextInput
                onChangeText={text => onChange(text)}
                style={[styles.inputStyle]}
                placeholder={'Enter city name '}
              />
            </View>
          </View>
          {data?.length !== 0 ? (
            // <ScrollView
            // style={styles.listView}
            //   showsVerticalScrollIndicator={false}>
              <FlatList
              contentContainerStyle={[styles.listView, { width: width-50}]}
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity onPress={() => close(item)}>
                      <Text style={[styles.defaultTextStyle, textStyle]}>{item}</Text>
                    </TouchableOpacity>
                  )
                }}

              />
            // </ScrollView>
          ) : (
            <Text style={[styles.defaultTextStyleEmpty]}>
              Please Select Country First
            </Text>
          )}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  defaultmodalbtn: {
    width: 250,
    marginVertical: 10,
    marginTop: 30
  },
  inputserach: {
    marginTop: -8,
    marginLeft: 8
  },
  inputStyle: {
    width: '95%',
    // marginTop: Platform.OS === 'ios' ? 15 : 1,
    marginLeft: 6,
    fontSize: 15,
    color: '#474747',
    borderColor: '#474747'
  },
  listView: {
    paddingLeft: 30
  },
  crossView: {
    marginLeft: 20,
    marginTop: Platform.OS == 'ios' ? 60 : 10,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  ImageStyle: {
    height: 22,
    width: 22,
    bottom: Platform.OS == "ios" ? 10 : -5
    
  },
  defaultTextStyle: {
    fontSize: 16,
    padding: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  defaultTextStyleEmpty: {
    alignSelf: 'center',
    flex: 1,
    fontSize: 16
  },
  modalView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})
