import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const FixaaaaBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <Touchable
      onPress={() => {
        try {
          navigation.navigate('PlayWorkoutPlaylistScreen');
        } catch (err) {
          console.error(err);
        }
      }}
      style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 8,
            flexDirection: 'row',
            height: 80,
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-start', flex: 1, flexDirection: 'row' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { borderRadius: 10, overflow: 'hidden' },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.CategoryHand}
              style={StyleSheet.applyWidth(
                { height: 80, width: 70 },
                dimensions.width
              )}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginLeft: 16, marginRight: 16 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 15,
                  marginTop: 10,
                },
                dimensions.width
              )}
            >
              {'Doing leg stretch'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                  lineHeight: 17,
                  marginTop: 8,
                  opacity: 0.5,
                },
                dimensions.width
              )}
            >
              {'Finish this exercise in 15 minutes'}
            </Text>
          </View>
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
              source={Images.Progress}
              style={StyleSheet.applyWidth(
                { height: 36, width: 36 },
                dimensions.width
              )}
            />
          </Touchable>
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(FixaaaaBlock);
