import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AsdfghBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 45,
        },
        dimensions.width
      )}
    >
      <Text
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Custom Color_2'],
            fontFamily: 'Inter_400Regular',
            fontSize: 15,
            opacity: 0.64,
          },
          dimensions.width
        )}
      >
        {'Already have an account? '}
      </Text>

      <Touchable
        onPress={() => {
          try {
            navigation.navigate('LoginScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_5'],
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
            },
            dimensions.width
          )}
        >
          {'Login'}
        </Text>
      </Touchable>
    </View>
  );
};

export default withTheme(AsdfghBlock);
