import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts';
const width = Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    offerContainer: {
        backgroundColor: colors.black,
        height: '10%'
    },
    newArive: {
        color: colors.black,
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        letterSpacing: 1,
        fontFamily: fonts.proximanova_bold
    },
    imageContainer: {
        width: width,
        height: 150
    },
})