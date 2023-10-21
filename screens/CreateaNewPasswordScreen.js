import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateaNewPasswordScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'center',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
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
            <Circle bgColor={theme.colors['Custom Color_2']} size={50}>
              <Icon
                color={theme.colors['Custom Color']}
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
          {'Create New Password'}
        </Text>
      </View>
      {/* heading texts */}
      <View
        style={StyleSheet.applyWidth(
          { paddingBottom: 25, paddingTop: 25 },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 21,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Create a\nNew Password'}
        </Text>
        {/* sub title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              marginTop: 8,
              opacity: 0.6,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Enter your new password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Password */}
          <View>
            {/* Password */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  marginTop: 16,
                },
                dimensions.width
              )}
            >
              {'Password'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              {/* Pasword Input */}
              <TextInput
                editable={true}
                onChangeText={newPaswordInputValue => {
                  try {
                    setTextInputValue(newPaswordInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Create a password'}
                placeholderTextColor={theme.colors['Light']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Custom Color_4'],
                    borderLeftWidth: 1,
                    borderRadius: 5,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    height: 52,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                    width: '100%',
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 56,
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 0,
                    width: 48,
                    zIndex: 1,
                  },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Image
                    resizeMode={'cover'}
                    source={Images.Hide}
                    style={StyleSheet.applyWidth(
                      { height: 24, width: 24 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </View>
          </View>
          {/* Confirm Password */}
          <View>
            {/* Confirm Password */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  marginTop: 16,
                },
                dimensions.width
              )}
            >
              {'Confirm Password'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              {/* Pasword Input */}
              <TextInput
                editable={true}
                onChangeText={newPaswordInputValue => {
                  try {
                    setTextInputValue(newPaswordInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                placeholder={'Confirm password'}
                placeholderTextColor={theme.colors['Light']}
                secureTextEntry={true}
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Custom Color_4'],
                    borderLeftWidth: 1,
                    borderRadius: 5,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 16,
                    height: 52,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                    width: '100%',
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 56,
                    justifyContent: 'center',
                    position: 'absolute',
                    right: 0,
                    width: 48,
                    zIndex: 1,
                  },
                  dimensions.width
                )}
              >
                <Touchable>
                  <Image
                    resizeMode={'cover'}
                    source={Images.Hide}
                    style={StyleSheet.applyWidth(
                      { height: 24, width: 24 },
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </View>
          </View>
          {/* Next */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('LoginEmailScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_5'],
                borderRadius: 24,
                fontFamily: 'System',
                fontSize: 15,
                fontWeight: '700',
                height: 56,
                marginTop: 35,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateaNewPasswordScreen);
