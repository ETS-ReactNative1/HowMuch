import React, { useEffect, useRef, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Platform,
    Animated,
    Easing
} from 'react-native'
import { Images } from '../../utils/Images'
import { theme } from '../../utils/theme'
const { width, height } = Dimensions.get('screen')
import { useIsFocused, useNavigation } from '@react-navigation/native'

export const Header = ({
    onBackPress = {},
    back = null,
    title = ""
}) => {
    return (
        <View style={styles.container}>
            {back && (
                      <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={onBackPress}
                  >
                      <Image
                          style={styles.arrow}
                          source={Images.Pictures.arrow}
                      />
                  </TouchableOpacity>
            )}
      <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    arrow: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 20
    }
})