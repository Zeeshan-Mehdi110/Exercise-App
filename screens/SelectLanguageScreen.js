import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SelectLanguageScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 70, paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        {/* App Name */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'System',
              fontSize: 40,
              fontStyle: 'italic',
              fontWeight: '700',
            },
            dimensions.width
          )}
        >
          {'Muscles'}
        </Text>
        {/* Tag Line */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
              marginTop: 4,
            },
            dimensions.width
          )}
        >
          {'Exercise with style'}
        </Text>
        {/* Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 23,
              marginTop: 50,
            },
            dimensions.width
          )}
        >
          {'Select your Language'}
        </Text>
        {/* Sub Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              lineHeight: 18,
              marginTop: 8,
              opacity: 0.5,
            },
            dimensions.width
          )}
        >
          {
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
          }
        </Text>
        {/* Select Language */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('LanguagesScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_4'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 55,
                justifyContent: 'space-between',
                paddingLeft: 12,
                paddingRight: 12,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {Constants['Language']}
            </Text>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Entypo/chevron-down'}
              size={24}
            />
          </View>
        </Touchable>
        {/* Save Button */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('AboutYourselfScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_5'],
              borderRadius: 28,
              fontFamily: 'System',
              fontSize: 17,
              fontWeight: '600',
              height: 55,
              letterSpacing: 1.2,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Save'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SelectLanguageScreen);
