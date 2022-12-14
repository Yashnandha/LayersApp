import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SvgIcon from '../../assets/svgIcon'
import colors from '../../utils/colors'

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity
                    onPress={() => props.navigation.closeDrawer()}
                    style={styles.closeIcon}>
                    <SvgIcon.CloseIcon />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.versionCode}>Account</Text>
            </View>

        </View>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.coolBlack
    },
    profileContainer: {
        backgroundColor: colors.white,
        height: '20%',
    },

    versionCode: {
        color: colors.white,
        fontSize: 13,
        lineHeight: 15
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 20,
        padding: 10
    }
});
