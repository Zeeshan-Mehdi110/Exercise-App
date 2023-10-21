import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const Hdr2Block2 = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth({ paddingBottom: 35 }, dimensions.width)}
    >
      {/* Title */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color_2'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 21,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'Create account'}
      </Text>
      {/* sub title */}
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color_2'],
            fontFamily: 'Inter_400Regular',
            fontSize: 13,
            marginTop: 8,
            opacity: 0.6,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'Lorem ipsum dolor sit amet'}
      </Text>
    </View>
  );
};

export default withTheme(Hdr2Block2);
