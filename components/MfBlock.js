import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Checkbox, Touchable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const MfBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexDirection: 'row', justifyContent: 'space-evenly' },
        dimensions.width
      )}
    >
      <Touchable
        style={StyleSheet.applyWidth(
          { marginTop: 20, width: '45%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_2'],
              borderLeftWidth: 1,
              borderRadius: 8,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 55,
              paddingLeft: 12,
              paddingRight: 12,
            },
            dimensions.width
          )}
        >
          <Checkbox
            checkedIcon={'Ionicons/checkmark-circle-sharp'}
            color={theme.colors['Custom Color_2']}
            uncheckedColor={theme.colors['Custom Color_2']}
            uncheckedIcon={'FontAwesome/circle-thin'}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 15,
              },
              dimensions.width
            )}
          >
            {'Male'}
          </Text>
        </View>
      </Touchable>

      <Touchable
        style={StyleSheet.applyWidth(
          { marginLeft: '5%', marginTop: 20, width: '45%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_2'],
              borderLeftWidth: 1,
              borderRadius: 8,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 55,
              paddingLeft: 12,
              paddingRight: 12,
            },
            dimensions.width
          )}
        >
          <Checkbox
            checkedIcon={'Ionicons/checkmark-circle-sharp'}
            color={theme.colors['Custom Color_2']}
            uncheckedColor={theme.colors['Custom Color_2']}
            uncheckedIcon={'FontAwesome/circle-thin'}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 15,
              },
              dimensions.width
            )}
          >
            {'Female'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(MfBlock);
