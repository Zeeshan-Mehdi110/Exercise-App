import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View, useWindowDimensions } from 'react-native';

const Onboarding3Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={Images.PexelsMarkofitProduction61587731}
        style={StyleSheet.applyWidth(
          { height: '100%', justifyContent: 'flex-end', width: '100%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, justifyContent: 'flex-end' },
            dimensions.width
          )}
        >
          <LinearGradient
            color1={theme.colors['Custom Color']}
            color2={'rgba(0, 0, 0, 0)'}
            endX={0}
            endY={100}
            startX={0}
            startY={0}
            style={StyleSheet.applyWidth(
              { height: '50%', position: 'absolute', top: 0, width: '100%' },
              dimensions.width
            )}
          />
          <LinearGradient
            color1={theme.colors['Custom Color']}
            color2={'rgba(0, 0, 0, 0)'}
            endX={0}
            endY={0}
            startX={0}
            startY={100}
            style={StyleSheet.applyWidth(
              { paddingBottom: 12, width: '100%' },
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 30,
                  marginTop: 60,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'We will help you to \nAchieve your Dream \nBody'}
            </Text>
            {/* description */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontSize: 15,
                  lineHeight: 22,
                  marginTop: 5,
                  opacity: 0.65,
                  paddingLeft: 40,
                  paddingRight: 40,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy '
              }
            </Text>
            {/* Get Started */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('CreateAccountScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['GetFit Orange'],
                  borderRadius: 24,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  height: 54,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 30,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Get Started'}
            />
            {/* Login */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 30,
                  paddingBottom: 30,
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
                    opacity: 1,
                  },
                  dimensions.width
                )}
              >
                {'Don’t have an account? '}
              </Text>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('CreateAccountScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_13'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Register'}
                </Text>
              </Touchable>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(Onboarding3Screen);
