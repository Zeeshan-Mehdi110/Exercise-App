import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const Onboarding23Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Image
        resizeMode={'cover'}
        source={Images.PexelsNappy93607512}
        style={StyleSheet.applyWidth(
          { height: '100%', width: '100%' },
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            backgroundColor: theme.colors['Custom Color'],
            borderTopRightRadius: 50,
            bottom: 0,
            height: 320,
            justifyContent: 'space-around',
            left: 0,
            paddingBottom: 45,
            paddingLeft: 25,
            paddingTop: 25,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        {/* Texts */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 30,
                lineHeight: 40,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {'Monitor your Body \nChanges Easily'}
          </Text>
          {/* description */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontSize: 15,
                lineHeight: 25,
                marginTop: 10,
                opacity: 1,
                paddingRight: 40,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {
              'Semper in cursus magna et eu varius nunc adipiscing. Elementum justo,'
            }
          </Text>
        </View>
        {/* Next */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', marginRight: 20 },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Onboarding3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Circle bgColor={theme.colors['GetFit Orange']} size={60}>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Entypo/chevron-right'}
                size={24}
              />
            </Circle>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('Onboarding3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  justifyContent: 'center',
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 15,
                  },
                  dimensions.width
                )}
              >
                {'Skip'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(Onboarding23Screen);
