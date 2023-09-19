import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = ({
  size,
  fontStyle,
  type,
  color,
  textAlign,
  textDecorationLine,
  opacity,
  letterSpacing,
  style,
  children,
  numberOfLines,
  maxWidth,
}) => {
  const styles = StyleSheet.create({
    Main: {
      fontSize: size ? size : 14,
      fontStyle: fontStyle ? fontStyle : 'normal',
      fontFamily:
        type === 'bold'
          ? 'Montserrat-Bold'
          : type === 'semiBold'
          ? 'Montserrat-SemiBold'
          : type === 'black'
          ? 'Montserrat-Black'
          : type === 'medium'
          ? 'Montserrat-Medium'
          : type === 'light'
          ? 'Montserrat-Light'
          : 'Montserrat-Regular',
      color: color ? color : '#000',
      textAlign: textAlign ? textAlign : 'left',
      textDecorationLine: textDecorationLine ? textDecorationLine : 'none',
      opacity: opacity ? opacity : 1,
      letterSpacing: letterSpacing ? letterSpacing : 0,
      maxWidth: maxWidth ? maxWidth : '100%',
    },
  });
  return (
    <Text
      allowFontScaling={false}
      style={[styles.Main, style]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};

export default CustomText;
