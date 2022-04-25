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
  Image,
  FlatList
} from 'react-native'

import { Header } from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import { Button } from '../../../components/Button/Button'

const chatData = [
  {
    Image: 'Mike',
    title: 'Carpenter',
    isSelected: true
  },
  {
    Image: 'Mike',
    title: 'Electrician',
    isSelected: true
  },
  {
    Image: 'Mike',
    title: 'Cleaning & Maid Service',
    isSelected: true
  },
  {
    Image: 'Mike',
    title: 'Plumber',
    isSelected: true
  },
  {
    Image: 'Mike',
    title: 'Painter',
    isSelected: false
  },
  {
    Image: 'Mike',
    title: 'Architects & Engineers',
    isSelected: true
  },
  {
    Image: 'Mike',
    title: 'Tile & Stone',
    isSelected: false
  },
  {
    Image: 'Mike',
    title: 'Fences',
    isSelected: false
  },
  {
    Image: 'Mike',
    title: 'Windows &Doors',
    isSelected: false
  }
]

export default function CustomerSelectCategory({ navigation }) {
  const [checked, setchecked] = useState()

  const checking = index => {
    if (chatData[index].isSelected) {
      chatData[index].isSelected = false
      console.log('if true', chatData[index].isSelected)
      setchecked(chatData[index].isSelected)
    } else {
      chatData[index].isSelected = true
      console.log('if false', chatData[index].isSelected)
      setchecked(chatData[index].isSelected)
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Header
          back={true}
          title="Select Category"
          container={{ marginTop: Platform.OS == 'ios' ? 30 : 10 }}
        />
        <FlatList
          contentContainerStyle={[styles.flatView]}
          data={chatData}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.listView}>
                <View style={styles.imgandtextView}>
                  <Text style={[styles.defaultTextStyle]}>{item.title}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => checking(index)}
                  activeOpacity={0.7}
                  style={styles.logoView}>
                  {item.isSelected ? (
                    <Image
                      style={styles.logoImg}
                      source={Images.Pictures.checkblue}
                    />
                  ) : (
                    <Image
                      style={styles.logoImg}
                      source={Images.Pictures.uncheck}
                    />
                  )}
                </TouchableOpacity>
              </View>
            )
          }}
        />
        <View style={styles.btnView}>
          <Button onPress={() => navigation.goBack()} title={'Done'} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  defaultTextStyle: {
    fontWeight: '500',
    lineHeight: 56,
    fontSize: 12
  },
  flatView: {
    marginTop: '5%',
    paddingBottom: '20%'
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoImg: {
    height: 28,
    width: 28,
    borderRadius: 100,
    marginTop: 10
  },
  imgandtextView: {
    marginLeft: 30
  },
  logoView: {
    marginRight: 20
  },
  btnView: {
    marginBottom: 10,
    marginRight: 30,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  }
})
