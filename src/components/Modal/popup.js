import React, { useState } from 'react'
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Text
} from 'react-native'
import { Button } from '../../components/Button/Button'

export const Popup = ({
  visibleState = false,
  btnvisible = false,
  msg = null,
  onPress = () => {},
  textStyle = {},
  btnStyle = {},
  btntitle = null
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visibleState}
      onRequestClose={onPress}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.defaultTextStyle, textStyle]}>{msg}</Text>
            {btnvisible && (
              <Button
                onPress={onPress}
                title={btntitle}
                textStyle={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
                shadow="#F83636"
                containerStyle={[styles.defaultmodalbtn, btnStyle]}
              />
            )}
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
  defaultTextStyle: {
    fontSize: 18
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
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
  }
})
