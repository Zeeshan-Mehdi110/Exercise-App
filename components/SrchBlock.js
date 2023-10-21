import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const SrchBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: theme.colors['Custom Color_4'],
          borderLeftWidth: 1,
          borderRadius: 24,
          borderRightWidth: 1,
          borderTopWidth: 1,
          flexDirection: 'row',
          height: 52,
          justifyContent: 'space-between',
          marginBottom: 12,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          paddingLeft: 12,
          paddingRight: 12,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Custom Color_4']}
        name={'AntDesign/search1'}
        size={24}
      />
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center' },
          dimensions.width
        )}
      >
        <TextInput
          editable={true}
          placeholder={'Search...'}
          placeholderTextColor={theme.colors['Custom Color_4']}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 16,
              marginLeft: 8,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        />
      </View>

      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 48,
          },
          dimensions.width
        )}
      >
        <Touchable>
          <Image
            resizeMode={'cover'}
            source={Images.Filter}
            style={StyleSheet.applyWidth(
              { height: 18, width: 26 },
              dimensions.width
            )}
          />
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(SrchBlock);
