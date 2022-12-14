import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import colors from '../../utils/colors'
const width = Dimensions.get('window').width;

interface ProductCardProps {
    item: Object,
    index: Number
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <View style={styles.conatiner}>
            <View>
                <Image source={{ uri: props.item?.image }}
                    style={styles.productImage}
                />
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({

    conatiner: {
        backgroundColor: colors.productBackGround,
        flex: 1,
        marginHorizontal: 7,
        marginBottom: 5,
        minHeight: 150,
        maxHeight: 300,
        borderRadius: 17,
    },
    badgeView: {
        backgroundColor: colors.tintYellow,
        flexWrap: 'wrap'
    },
    productImage: {
        height: 150,
        width: '100%',

    }
});
