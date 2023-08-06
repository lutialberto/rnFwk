import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryTextProps} from './PrimaryTextProps';
import {vw} from '~/fwk/constants';
import {Colors} from '~/hooks/theme/Models';
import {useTheme} from '~/hooks/theme/useTheme';

const PrimaryText = ({text, style}: PrimaryTextProps) => {
  const {getColors} = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  return <Text style={[styles.text, style]}>{text}</Text>;
};
export default PrimaryText;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    text: {
      color: colors.themeColors.fontColor,
      fontFamily: 'Arial',
      fontSize: vw * 5,
    },
  });
};
