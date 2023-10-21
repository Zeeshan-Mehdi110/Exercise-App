import React from 'react';
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
import { Modal, Text, View, useWindowDimensions } from 'react-native';

const EnterOTPScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [SuccesModal, setSuccesModal] = React.useState(false);
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
          {
            justifyContent: 'center',
            marginTop: 60,
            paddingBottom: 10,
            paddingTop: 30,
          },
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
          {'Enter OTP'}
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
          {'We have just sent you 4 digit code via your email '}
        </Text>
        {/* Email */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 13,
              marginTop: 8,
              opacity: 1,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'example@gmail.com'}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 35, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* OTP */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-evenly' },
            dimensions.width
          )}
        >
          {/* OTP */}
          <TextInput
            editable={true}
            keyboardType={'numeric'}
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={textInputValue.toString()}
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
                width: 52,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* OTP */}
          <TextInput
            editable={true}
            keyboardType={'numeric'}
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={textInputValue.toString()}
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
                width: 52,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* OTP */}
          <TextInput
            editable={true}
            keyboardType={'numeric'}
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={textInputValue.toString()}
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
                width: 52,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* OTP */}
          <TextInput
            editable={true}
            keyboardType={'numeric'}
            onChangeText={newOTPValue => {
              try {
                setTextInputValue(newOTPValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={textInputValue.toString()}
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
                width: 52,
              },
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Continue */}
        <Button
          onPress={() => {
            try {
              setSuccesModal(true);
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
          title={'Continue'}
        />
        {/* Login */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
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
            {'Didn’t receive code? '}
          </Text>

          <Touchable>
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
              {'Resend Code'}
            </Text>
          </Touchable>
        </View>
      </View>

      <Modal animationType={'none'} transparent={true} visible={SuccesModal}>
        <View
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                height: '100%',
                opacity: 0.7,
                position: 'absolute',
                top: 0,
                width: '100%',
              },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_3'],
                borderRadius: 16,
                height: 353,
                justifyContent: 'center',
                marginLeft: 24,
                marginRight: 24,
              },
              dimensions.width
            )}
          >
            <Circle size={75}>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color_2'],
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['App Green']}
                  name={'Ionicons/ios-checkmark-circle'}
                  size={101}
                  style={StyleSheet.applyWidth(
                    { marginLeft: 7, marginTop: 2 },
                    dimensions.width
                  )}
                />
              </View>
            </Circle>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 21,
                  lineHeight: 28,
                  marginTop: 25,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'You have logged in \nsuccessfully'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  lineHeight: 20,
                  marginTop: 10,
                  opacity: 0.5,
                  paddingLeft: 25,
                  paddingRight: 25,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel'
              }
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    setSuccesModal(false);
                    navigation.navigate('OnboardingEnterAppScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '40%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_5'],
                      borderRadius: 20,
                      height: 46,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        paddingLeft: 25,
                        paddingRight: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {'Continue'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(EnterOTPScreen);
