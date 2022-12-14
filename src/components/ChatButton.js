import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors'

const ChatButton = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Text>ChatButton</Text>
            </View>
        </View>
    )
}

export default ChatButton

const styles = StyleSheet.create({
    container: { flex: 1, flexWrap: 'wrap' },
    buttonContainer: {
        backgroundColor: colors.chatColor,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 7,
        position: 'absolute',
        bottom: 40,
        right: 25,
    }

});
