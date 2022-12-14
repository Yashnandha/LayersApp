import React from 'react';
import {StatusBar, View, ViewStyle} from 'react-native';
import colors from '../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CoustomStatusProps {
    backgroundColor?: string | undefined;
    containerStyle?: ViewStyle | undefined;
  }
  

const CustomStatusbar = (props:CoustomStatusProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: props?.backgroundColor || colors.coolBlack,
        },
        props?.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={props?.backgroundColor || colors.coolBlack}
        barStyle={'light-content'}
        {...props}
      />
    </View>
  );
};

export default CustomStatusbar;
