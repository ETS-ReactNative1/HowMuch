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
import {} from '../../../../components/Button/Button'

const CustomerSignup = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header back={true} />
        <Button title="Login" />
      </View>
    </>
  )
}

export default CustomerSignup

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
