import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FpBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 25,
        },
        dimensions.width
      )}
    >
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('ForgotPassword2Screen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              textAlign: 'right',
            },
            dimensions.width
          )}
        >
          {'Forgot Password?'}
        </Text>
      </Touchable>
    </View>
  );
};

export default withTheme(FpBlock);
