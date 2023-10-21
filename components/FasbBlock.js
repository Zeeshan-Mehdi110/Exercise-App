import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Circle, Icon, Touchable, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const FasbBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { bottom: 20, position: 'absolute', right: 20 },
        dimensions.width
      )}
    >
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('RootNavigator');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Circle bgColor={theme.colors['Custom Color_5']} size={50}>
          <Icon
            color={theme.colors['Custom Color_2']}
            name={'Feather/plus'}
            size={24}
          />
        </Circle>
      </Touchable>
    </View>
  );
};

export default withTheme(FasbBlock);
