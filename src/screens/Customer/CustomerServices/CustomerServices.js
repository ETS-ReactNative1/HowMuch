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
  TextInput,
  FlatList
} from 'react-native'
import { InputField } from '../../../../components/InputField/InputField'
import { Button } from '../../../../components/Button/Button'
import { useMutation, useQuery } from '@apollo/client'
import { SignInAction } from '../../../../stores/actions/user.action'
import { useDispatch } from 'react-redux'
import {Header} from '../../../components/Header/Header'
import { Images } from '../../../utils/Images'
import { Card } from '../../../components/Card/Card'

const CustomerServices = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('1234567890')
  const [toggleIcon, setToggleIcon] = useState(true)
const Services = [
    {
        title:"Electrician",
        image:Images.Pictures.electricity,
        color:{
            backgroundColor:"#FE515110"
        },
        textColor:{
            color:"#FE5151"
        }
    },
    {
        title:"Plumber",
        image:Images.Pictures.plumber,
        color:{
            backgroundColor:"#7C2FF910"
        },
        textColor:{
            color:"#7C2FF9"
        }
    },
    {
        title:"Painter",
        image:Images.Pictures.paint,
        color:{
            backgroundColor:"#3143EA10"
        },
        textColor:{
            color:"#3143EA"
        }
    },
    {
        title:"Fences",
        image:Images.Pictures.fences,
        color:{
            backgroundColor:"#6D370810"
        },
        textColor:{
            color:"#6D3708"
        }
    }
]
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
      <View style={styles.container}>
          <Header 
          arrow={true}
          title="Services"
          notification={true}
          />
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:50}}
      >
      <View style={styles.row}>
              <Text style={styles.select}>Select Location</Text>
              <View style={{flexDirection:"row"}}>
              <Image 
              style={styles.location}
              source={Images.Pictures.location}
              />
              <Text>36 Guild Street London, UK</Text>
              </View>
            </View>
            <View style={{flexDirection:"row"}}>
              <Image style={styles.search} source={Images.Pictures.search}/>
              <TextInput 
              placeholderTextColor="#212121"
                 style={styles.input}
              placeholder='Search'
              />
            <Image style={{width:68,height:68,resizeMode:"contain",alignSelf:"center"}} source={Images.Pictures.filter}/>
            </View>
            <FlatList
            data={Services}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return(
              <View style={[styles.btn,item.color]}>
                  <Image style={styles.icon} source={item.image}/>
                  <Text style={[styles.text,item.textColor]}>{item.title}</Text>
              </View>
                )
              }}
            >
            </FlatList>
            <Card 
            categary='Plumber'
            backgroundColor={{backgroundColor:"#7C2FF9"}}
            backgroundColor1={{backgroundColor:"#FE5151"}}
            color1={{color:"#FE5151"}}
            color={{color:"#8F4CFA"}}
            categary1='Electrican'
            container={{width:"88%",alignSelf:"center"}}/>
            <Card 
            categary='Plumber'
            color={{color:"#8F4CFA"}}
            backgroundColor={{backgroundColor:"#7C2FF9"}}
             container={{width:"88%",alignSelf:"center",marginTop:20}}
            />
      </ScrollView>
      </View>
    </>
  )
}

export default CustomerServices

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row:{
    flexDirection:"row",
    paddingTop:"8%",
    paddingBottom:14,
    paddingLeft:20
  },
  location:{
    width:20,
    height:20,
    resizeMode:"contain",
    marginRight:6
  },
  select:{
    paddingRight:20,fontSize:13
  },
  inputStyle:{
    borderWidth:1,
    borderColor:"#00000010",
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1,
   width:"75%",
   borderColor:"#00000010",
   borderRadius:10,
   paddingLeft:42,
   
  },
  search:{
    position:"absolute",
    width:26,
    height:26,
    top:25,
    left:22
  },
  btn:{
      paddingHorizontal:12,
      paddingVertical:11,
      marginHorizontal:10,
      flexDirection:"row",
      borderRadius:10,
      alignItems:"center",
      marginVertical:14
  },
  icon:{
      width:25,
      height:25,
      resizeMode:"contain",
      marginRight:5
  },
  text:{
      fontSize:12,
      fontWeight:"bold"
  }
})
