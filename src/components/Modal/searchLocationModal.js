import React, { useEffect, useRef } from 'react'
import { View, Text, Modal, Dimensions, Platform } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Feather from 'react-native-vector-icons/Feather'
import { theme } from '../../utils/theme'
const {height, width} = Dimensions.get('screen')

export const renderSearchLocation = (visible, toggleModal) => {
  // console.log(navigator.geolocation)
//   const { t } = useTranslation()
  const ref = useRef()
  useEffect(() => {
    ref.current?.focus()
  }, [visible])
  
  if(visible) {
    return (
        <View
          style={{
            // flex: 1,
            // height: '120%',
            // position: 'absolute',
            // top: 0,
            // bottom: 0,
            // left: 0,
            // right: 0
            height: height
          }}>
          <Modal
            transparent={true}
            visible={visible}
            onRequestClose={() => {
              toggleModal()
            }}>
            <View
              style={{
                // flex: 1,
                height: height,
                backgroundColor: '#fff',
                marginTop: Platform.OS == 'ios' ? 40 : 0
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  paddingHorizontal: 15,
                  top: 40
                }}>
                <Feather
                  onPress={() => {
                    toggleModal()
                  }}
                  name="arrow-left"
                  color={theme.textColor.Black}
                  size={18}
                />
              </View>
              <GooglePlacesAutocomplete
                ref={ref}
                placeholder={"Search Location"}
                predefinedPlacesAlwaysVisible={true}
                autoFocus={true}
                onPress={(data, details = null) => {
                  toggleModal({
                    latitude: details?.geometry?.location?.lat,
                    longitude: details?.geometry?.location?.lng,
                    details: details
                  })
                }}
                query={{
                  key: 'AIzaSyCRqapKfPvsVTyk4XyYtsN3Fz413Iixz_w',
                  language: 'en'
                }}
                onFail={e => console.log('onFail', e)}
                fetchDetails={true}
                textInputProps={{
                  placeholderTextColor: theme.textColor.lightGrey
                }}
                styles={{
                  textInputContainer: {
                    backgroundColor: theme.backgroundColor.white,
                    width: '80%',
                    alignSelf: 'center',
                    borderWidth: 0.8,
                    borderColor: theme.textColor.lightBlack,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20
                  },
                  textInput: {
                    // height: 45,
                    color: '#5d5d5d',
                    fontSize: 14,
                    fontFamily: 'Rubik-Medium',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5
                  }
                }}
                renderLeftButton={() => {
                  return (
                    <View
                      style={{ justifyContent: 'center', paddingHorizontal: 15 }}>
                      <Feather
                        name="search"
                        color={theme.backgroundColor.themeRed}
                        size={18}
                      />
                    </View>
                  )
                }}
              />
            </View>
          </Modal>
        </View>
      )
  }else {
      return <></>
  }
}
