import React, { useState } from 'react'
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native'
import { Images } from '../../../utils/Images'
import { Header } from '../../../components/Header/Header'
import { NotificationCard } from '../../../components/NotificationCard/NotificationCard'
import { FlatList } from 'react-native-gesture-handler'

export const CustomerNotification = ({ navigation }) => {
  const [status, setStatus] = useState(1)
  const cardData = [
    {
      image: Images.Pictures.girl4,
      time: '5 min ago',
      titleName: 'David Silbia',
      description: ' Present in posuere dui. In hac habita.',
      button: true,
      // onPress: () => {navigation.navigate('VideoCallScreen')}
    },
    {
      image: Images.Pictures.girl1,
      time: '5 min ago',
      titleName: 'Adnan safi',
      description: ' Present in posuere dui. In hac habita.',
      button: false
    },
    {
      image: Images.Pictures.girl3,
      time: '5 min ago',
      titleName: 'Ronald C. Kinch',
      description: ' Present in posuere dui. In hac habita.',
      button: false
    },
    {
      image: Images.Pictures.girl6,
      time: '5 min ago',
      titleName: 'Clara Tolson',
      description: ' Present in posuere dui. In hac habita.',
      button: true
    },
    {
      image: Images.Pictures.girl5,
      time: '5 min ago',
      titleName: 'Adnan safi',
      description: ' Present in posuere',
      button: false
    },
    {
      image: Images.Pictures.girl1,
      time: '5 min ago',
      titleName: 'Adnan safi',
      description: ' Present in posuere ',
      button: false
    },
    {
      image: Images.Pictures.girl4,
      time: '5 min ago',
      titleName: 'David Silbia',
      description: ' Present in posuere dui. In hac habita.',
      button: true
    },
    {
      image: Images.Pictures.girl1,
      time: '5 min ago',
      titleName: 'Adnan safi',
      description: ' Present in posuere dui. In hac habita.',
      button: false
    },
    {
      image: Images.Pictures.girl3,
      time: '5 min ago',
      titleName: 'Ronald C. Kinch',
      description: ' Present in posuere dui. In hac habita.',
      button: false
    }
  ]

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
        <FlatList
          contentContainerStyle={{ paddingVertical: 30 }}
          showsVerticalScrollIndicator={false}
          data={cardData}
          renderItem={({ item, index }) => {
            return (
              <>
                <View
                  onPress={() => navigation.navigate('ChatRoom')}
                  activeOpacity={0.9}
                  style={{ marginVertical: 10 }}>
                  <NotificationCard
                  navigation={navigation}
                    image={item.image}
                    time={item.time}
                    titleName={item.titleName}
                    description={item.description}
                    button={item.button}
                  />
                </View>
              </>
            )
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
