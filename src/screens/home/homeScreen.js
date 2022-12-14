import { View, Text, Dimensions, Image, ImageBackground, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import homeStyle from './home.style'
import Header from '../../components/header'
import assets from '../../assets/assets';
import ProductCard from '../../components/card/ProductCard';

const HomeScreen = (props) => {
  const width = Dimensions.get('window').width;
  const [newArriveProduct, setNewArriveProduct] = useState([
    { id: 1, image: 'https://cdn.shopify.com/s/files/1/0602/9334/9613/files/11_b436d762-52ac-4f21-8d29-ecb04204f459.png' },
    { id: 2, image: 'https://cdn.shopify.com/s/files/1/0602/9334/9613/files/1_24512a1e-42eb-46f0-9eb3-f29c06fc9040.png' },
    { id: 3, image: 'https://cdn.shopify.com/s/files/1/0602/9334/9613/files/9_875bb621-f3e4-4947-a80f-671494c74461.png' },
    { id: 4, image: 'https://cdn.shopify.com/s/files/1/0602/9334/9613/files/10_66223dc0-8645-45ec-a1e5-01bc5ea41ff8.png' }])
  return (
    <SafeAreaView style={homeStyle.container}>
      <Header
        onMenuPress={() => props.navigation.openDrawer()} />
      <ImageBackground
        source={assets.conatinerBg}
        style={homeStyle.imageContainer}
        resizeMode='cover'
      />
      <View>
        <Text style={homeStyle.newArive}>NEW ARRIVES LAPTOP SKINS</Text>
        <FlatList
          data={newArriveProduct}
          renderItem={({ item, index }) => (
            <ProductCard
              item={item}
              index={index}
            />
          )}
          numColumns={2}
        />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen