import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Circle, Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const QqqqqqqqqBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          height: 48,
          justifyContent: 'center',
          left: 0,
          marginTop: 12,
          paddingLeft: 16,
          paddingRight: 16,
          position: 'absolute',
          right: 0,
          top: 0,
        },
        dimensions.width
      )}
    >
      {/* Back Click */}
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
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle bgColor={theme.colors['Custom Color']} size={50}>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
          </Circle>
        </Touchable>
      </View>
      {/* Screen Heading */}
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
        {'Workout Detail'}
      </Text>
    </View>
  );
};

export default withTheme(QqqqqqqqqBlock);
