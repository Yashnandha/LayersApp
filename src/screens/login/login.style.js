import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    topCurve: {
        height: '25%',
        backgroundColor: colors.coolBlack,
        borderBottomRightRadius: 60,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footerContent: {
        flex: 1
    },
    bottomCurvefill: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.coolBlack
    }, bottomCurve: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 70
    },
    welcomeLabel: {
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
        fontWeight: '800',
        letterSpacing: 2,
        marginBottom: 20
    }
})