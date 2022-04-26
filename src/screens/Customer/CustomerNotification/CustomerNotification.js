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

export const CustomerNotification = ({ navigation }) => {
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
          <Header title="Notification" arrow={true} />
        </View>

        {/* <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 10,
            paddingTop: 35
          }}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}>      

        
        </ScrollView> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },  
})
