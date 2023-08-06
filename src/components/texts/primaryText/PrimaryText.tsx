import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PrimaryTextProps} from './PrimaryTextProps';
import {vw} from '~/fwk/constants';
import {Colors} from '~/hooks/theme/Models';
import {useTheme} from '~/hooks/theme/useTheme';
import Fonts from '~/constants/Fonts';

const PrimaryText = ({text, style, variant = 'default'}: PrimaryTextProps) => {
  const {getColors} = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  const getTextStyle = () => {
    const textStyles = {
      default: {},
      title: styles.title,
      errorMessage: styles.errorMessage,
      label: styles.label,
    };

    return [styles.baseText, textStyles[variant], style];
  };

  return <Text style={getTextStyle()}>{text}</Text>;
};
export default PrimaryText;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    baseText: {
      color: colors.themeColors.fontColor,
      fontSize: vw * 5,
      fontFamily: Fonts.Regular,
    },
    title: {
      fontSize: vw * 10,
      fontFamily: Fonts.Bold,
    },
    errorMessage: {
      color: colors.nonThemeColors.red,
      fontSize: vw * 4,
      fontFamily: Fonts.Light,
    },
    label: {
      color: colors.nonThemeColors.gray,
      fontSize: vw * 4,
      fontFamily: Fonts.Bold,
      textTransform: 'uppercase',
      letterSpacing: vw,
    },
  });
};
