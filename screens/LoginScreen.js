import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Divider,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const LoginScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color'],
          justifyContent: 'center',
        },
        dimensions.width
      )}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth({ paddingBottom: 35 }, dimensions.width)}
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
          {'Hi, Welcome Back! 👋'}
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
          {'Lorem ipsum dolor sit amet'}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingLeft: 20, paddingRight: 20 },
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
        {/* Forgot Password */}
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
          title={'Continue with Email'}
        />
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
                fontSize: 15,
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
                  fontFamily: 'Inter_500Medium',
                  fontSize: 15,
                },
                dimensions.width
              )}
            >
              {' Sign Up'}
            </Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
