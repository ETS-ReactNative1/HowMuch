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
      <TouchableWithoutFeedback onPress={onCross}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              contentContainerStyle={[styles.listView, { width: width - 50 }]}
              data={Citydata}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => close(item)}>
                    <Text style={[styles.defaultTextStyle, textStyle]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    bottom: Platform.OS == 'ios' ? 10 : -5
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
    position: 'absolute',
    bottom: 0,
    height: '30%',
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
