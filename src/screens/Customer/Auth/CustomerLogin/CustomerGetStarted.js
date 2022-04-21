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
    FlatList,
    Dimensions,
    Image
} from 'react-native'

import { Button } from '../../../../components/Button/Button'
import { useMutation, useQuery } from '@apollo/client'
import { SignInAction } from '../../../../stores/actions/user.action'
import { useDispatch } from 'react-redux'
import { Header } from '../../../../components/Header/Header'
import { InputField } from '../../../../components/InputField/InputField'
import { Images } from '../../../../utils/Images'
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux';
const CoustomerGetStarted = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    const onViewRef = React.useRef(({ viewableItems }) => {
        console.log('viewableItems', viewableItems)
        let currentIndex = viewableItems[0].index;
        setCurrentIndex(currentIndex)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    const [currentIndex, setCurrentIndex] = useState()
    const [reason, setReason] = useState([
        {
            image: Images.Pictures.search3
        },
        {
            image: Images.Pictures.search2
        },
        {
            image: Images.Pictures.search1
        },
    ])

    const width = Dimensions.get('screen').width
    const height = Dimensions.get('screen').height
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
            <LinearGradient
               colors={['#2E9BFF80', '#fff']}
               start={{ x: 1, y: -2 }}
               end={{ x: 2, y: 1 }}
             style={styles.container}>
                <Text style={styles.test}>SKIP</Text>
                <View style={{height:"49%"}}>
                <FlatList
                    showsVerticalScrollIndicator="none"
                    data={reason}
                    keyExtractor={(item, index) => index}
                    horizontal={true}
                    // pagingEnabled={true}
                    // snapToInterval={width}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={onViewRef.current}
                    viewabilityConfig={viewConfigRef.current}
                    // pagingEnabled
                    renderItem={({ item }) => {
                        return (

                            <View style={{}}>
                                <Image style={{ width: Dimensions.get("window").width, height: Platform.OS == "ios" ? 220 : 260, resizeMode: "contain", marginHorizontal: 1, marginVertical: 10}} source={item.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>

                        )
                    }}
                >
                </FlatList>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    {reason.map((val, index) => {
                        if (index == currentIndex) {
                            return <View key={index} style={{ width: 10, height: 10, backgroundColor: "#2E9BFF", borderRadius: 10, zIndex: 20, margin: 4 }} />
                        } else {
                            return <View key={index} style={{ width: 10, height: 10, backgroundColor: "#c1d7eb", borderRadius: 10, zIndex: 20, margin: 4, }} />
                        }
                    })}
                </View>
                </View>
                <View style={{ paddingBottom: 14, paddingTop: 24 }}>
                    <Text style={styles.dec}>Perfect for mobile and </Text>
                    <Text style={styles.dec}>web app</Text>
                </View>
                <Text style={styles.lorem}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                <Button
                    containerStyle={styles.containerStyle}
                    title='Get Started'
                    onPress={() => navigation.navigate('AppStackNavigator',{
                        screen:"CustomeAppStack"
                    })}
                />
            </LinearGradient>
        </>
    )
}
const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CoustomerGetStarted);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // backgroundColor:"#2E9BFF"
    },
    test: {
        textAlign: "right",
        paddingTop: "10%",
        color: "#000000",
        fontSize: 18
    },
    dec: {
        fontSize: 22,
        textAlign: "center",
        fontWeight: "600"
    },
    lorem: {
        textAlign: "center"
    },
    containerStyle: {
        borderRadius: 30,
        marginVertical: 30
    }
})
