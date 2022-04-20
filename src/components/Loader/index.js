import React, { Component } from 'react'
import { View, Modal, ActivityIndicator} from 'react-native'
import { theme } from '../../utils/theme'

export const  Loader = ({
    visible = false
}) => {

        return (
            <View style={{ flex: 1, position: 'absolute', top: 0, bottom: 0,left: 0, right: 0 }}>
                <Modal
                    transparent={true}
                    visible={visible}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                        <ActivityIndicator color={theme.backgroundColor.themeRed} size={50} />
                    </View>
                </Modal>

            </View>
        )
}