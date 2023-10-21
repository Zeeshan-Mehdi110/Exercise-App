import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateAccountFormScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'] },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center', marginTop: 20 },
          dimensions.width
        )}
      >
        {/* Title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 24,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Complete your account'}
        </Text>
        {/* sub title */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              marginTop: 8,
              opacity: 0.6,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 30 },
          dimensions.width
        )}
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
          {/* First Name */}
          <View>
            {/* First Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                },
                dimensions.width
              )}
            >
              {'First Name'}
            </Text>
            {/* First Name Input */}
            <TextInput
              editable={true}
              onChangeText={newFirstNameInputValue => {
                try {
                  setTextInputValue(newFirstNameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter your first name'}
              placeholderTextColor={theme.colors['Light']}
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
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Last Name */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
          >
            {/* Last Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                },
                dimensions.width
              )}
            >
              {'Last Name'}
            </Text>
            {/* Last Name Input */}
            <TextInput
              editable={true}
              onChangeText={newLastNameInputValue => {
                try {
                  setTextInputValue(newLastNameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter your last name'}
              placeholderTextColor={theme.colors['Light']}
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
                  marginTop: 12,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
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
          {/* Continue with Email */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('EnterOTPScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_5'],
                borderRadius: 24,
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '700',
                height: 56,
                marginTop: 35,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Continue with Email'}
          />
          {/* Login */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 45,
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
                  opacity: 0.64,
                },
                dimensions.width
              )}
            >
              {'Already have an account? '}
            </Text>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_5'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Login'}
              </Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(CreateAccountFormScreen);
