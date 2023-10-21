import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Divider,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginEmailScreen = props => {
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
            marginBottom: 12,
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
          {'Login'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 40 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            {
              marginTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Email */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
              },
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
          <TextInput
            editable={true}
            onChangeText={newTextInputValue => {
              try {
                setTextInputValue(newTextInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter your email address'}
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
          {/* Login */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ForgotPassword2Screen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Forgot Password?'}
              </Text>
            </Touchable>
          </View>
          {/* Continue with Email */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'HomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_5'],
                borderRadius: 24,
                fontFamily: 'System',
                fontSize: 17,
                fontWeight: '700',
                height: 56,
                marginTop: 35,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Continue with Email'}
          />
          {/* continue with */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            <Divider
              color={theme.colors['Custom Color_14']}
              style={StyleSheet.applyWidth(
                { height: 1, width: 60 },
                dimensions.width
              )}
            />
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_14'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Or continue with'}
            </Text>
            <Divider
              color={theme.colors['Custom Color_14']}
              style={StyleSheet.applyWidth(
                { height: 1, width: 60 },
                dimensions.width
              )}
            />
          </View>
          {/* Google Login */}
          <Touchable
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_2'],
                  borderLeftWidth: 1,
                  borderRadius: 24,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.IconGoogle}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Google'}
              </Text>
            </View>
          </Touchable>
          {/* Apple Login */}
          <Touchable
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_2'],
                  borderLeftWidth: 1,
                  borderRadius: 24,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  height: 56,
                  justifyContent: 'center',
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.IconApple}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 16,
                  },
                  dimensions.width
                )}
              >
                {'Continue with Apple'}
              </Text>
            </View>
          </Touchable>
          {/* Sign Up */}
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
                    color: theme.colors['Custom Color_5'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {' Sign Up'}
              </Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LoginEmailScreen);
