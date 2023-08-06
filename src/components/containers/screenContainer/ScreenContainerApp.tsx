import {StyleSheet} from 'react-native';
import React from 'react';
import {ScreenContainerFwk, ScreenContainerFwkProps} from '~/fwk/components';
import {Colors} from '~/hooks/theme/Models';
import {vw} from '~/fwk/constants';
import {useTheme} from '~/hooks/theme/useTheme';

const ScreenContainerApp = ({children, style}: ScreenContainerFwkProps) => {
  const {getColors} = useTheme();
  const colors = getColors();
  const styles = getStyles(colors);

  return <ScreenContainerFwk style={[styles.container, style]}>{children}</ScreenContainerFwk>;
};

export default ScreenContainerApp;

const getStyles = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.themeColors.backgroundColor,
      paddingHorizontal: vw * 3,
      flex: 1,
    },
  });
};
