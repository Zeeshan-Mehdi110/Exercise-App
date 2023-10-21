import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  LinearGradient,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View, useWindowDimensions } from 'react-native';

const OnboardingEnterAppScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        resizeMode={'cover'}
        source={Images.PexelsAndreaPiacquadio37560421}
        style={StyleSheet.applyWidth(
          { height: '100%', justifyContent: 'flex-end', width: '100%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              bottom: 0,
              left: 0,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          <LinearGradient
            color1={theme.colors['Custom Color']}
            color2={'rgba(0, 0, 0, 0)'}
            endX={0}
            endY={0}
            startX={0}
            startY={100}
            style={StyleSheet.applyWidth(
              { height: '100%', width: '100%' },
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
                  marginTop: 100,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {"Welcome, let's \nexercise together"}
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
            {/* Start Introduction */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('SelectLanguageScreen');
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
                  marginBottom: 50,
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 30,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Start Introduction'}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingEnterAppScreen);
