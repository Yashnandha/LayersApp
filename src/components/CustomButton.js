import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../utils/colors';

interface buttonProps {
    label: String,
    onPress: () => void
}

const CustomButton = (props: buttonProps) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.buttonContainer}>
            <Text style={styles.labelStyle}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton


const styles = StyleSheet.create({
    buttonContainer: {
        height: 40,
        backgroundColor: colors.coolBlack,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    labelStyle: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    }
});