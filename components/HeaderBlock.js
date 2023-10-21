import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const HeaderBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          height: 48,
          justifyContent: 'center',
          marginTop: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            left: 16,
            position: 'absolute',
            top: 0,
            width: 48,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <Icon
            color={theme.colors['Custom Color_2']}
            name={'Ionicons/arrow-back-sharp'}
            size={24}
          />
        </Touchable>
      </View>

      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color_2'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 18,
          },
          dimensions.width
        )}
      >
        {'Help and Support'}
      </Text>
    </View>
  );
};

export default withTheme(HeaderBlock);
