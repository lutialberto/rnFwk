import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {ButtonAppProps} from './ButtonAppProps';
import {vw} from '~/fwk/constants';
import {ButtonFwk} from '~/fwk/components';
import {Colors} from '~/hooks/theme/Models';
import {useTheme} from '~/hooks/theme/useTheme';

const ButtonApp = ({
  variant = 'default',
  enabled = true,
  containerStyle,
  labelStyle,
  labelComponent,
  ...props
}: ButtonAppProps) => {
  const {getColors} = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  const getContainerStyle = () => {
    const containerStyles = {
      default: styles.defaultContainer,
      outline: styles.outlineContainer,
      textOnly: {},
    };
    const containerDisabledStyles = {
      default: !enabled && styles.defaultDisabledContainer,
      outline: !enabled && styles.outlineDisabledContainer,
      textOnly: !enabled && styles.outlineDisabledContainer,
    };

    return [
      styles.baseContainer,
      containerStyles[variant],
      containerStyle,
      containerDisabledStyles[variant],
    ];
  };

  const getLabelStyle = () => {
    const labelStyles = {
      default: {},
      outline: styles.outlineLabel,
      textOnly: styles.outlineLabel,
    };
    const labelDisabledStyles = {
      default: {},
      outline: !enabled && styles.outlineDisabledLabel,
      textOnly: !enabled && styles.outlineDisabledLabel,
    };

    return [styles.baseLabel, labelStyles[variant], labelStyle, labelDisabledStyles[variant]];
  };

  return (
    <ButtonFwk
      {...props}
      enabled={enabled}
      containerStyle={getContainerStyle()}
      labelStyle={getLabelStyle()}
      labelComponent={labelComponent ?? <Text style={getLabelStyle()}>{props.label ?? ''}</Text>}
    />
  );
};

export default ButtonApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    baseContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: vw * 10,
      paddingVertical: vw * 2,
      paddingHorizontal: vw * 3,
      flexDirection: 'row',
    },
    baseLabel: {
      marginLeft: vw,
      textAlign: 'center',
      color: colors.themeColors.fontColor,
    },
    defaultContainer: {
      backgroundColor: colors.themeColors.primary,
    },
    defaultDisabledContainer: {
      backgroundColor: colors.themeColors.disabledColor,
    },
    outlineContainer: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.themeColors.primary,
    },
    outlineDisabledContainer: {
      borderColor: colors.themeColors.disabledColor,
    },
    outlineLabel: {
      color: colors.themeColors.primary,
    },
    outlineDisabledLabel: {
      color: colors.themeColors.disabledColor,
    },
  });
};
