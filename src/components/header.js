import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors'
import assets from '../assets/assets'
import CustomStatusbar from './CustomStatusbar'
import SvgIcon from '../assets/svgIcon'

interface HeaderProps{
onMenuPress: ()=> Event | undefined
}

const Header = (props: HeaderProps) => {
  return (
    <View style={style.container}>
      <CustomStatusbar />
      <View style={style.headerContainer}>
      <View style={style.logoStyle}>
        <Image source={assets.Logo}
          style={style.logoStyle}
          resizeMode={'contain'}
        />
      </View>
      <TouchableOpacity
      onPress={props.onMenuPress}
        style={style.menuIcon}>
        <SvgIcon.MenuIcon />
      </TouchableOpacity>


      <TouchableOpacity style={style.SearchIcon}>
        <SvgIcon.SearchIcon fill={'#ffffff'} />
      </TouchableOpacity>

      <TouchableOpacity style={style.cartIcon}>
        <SvgIcon.CartIcon />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Header

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.coolBlack,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  logoStyle: { height: 40, width: '100%' },
  menuIcon: {
    position: 'absolute',
    paddingHorizontal: 20
  },
  SearchIcon: {
    position: 'absolute',
    right: 35,
    paddingHorizontal: 20
  },
  cartIcon: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 20
  },
})