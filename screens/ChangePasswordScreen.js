import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ChangePasswordScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

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
        {/* Back Click */}
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
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
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
          {'Change Password'}
        </Text>
      </View>
      {/* Disclaimer */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 8,
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 8,
            paddingBottom: 12,
            paddingTop: 12,
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              fontSize: 15,
              lineHeight: 21,
            },
            dimensions.width
          )}
        >
          {'The new password must be different from the current password'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Form */}
        <View>
          {/* Password */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  opacity: 1,
                },
                dimensions.width
              )}
            >
              {'Password'}
            </Text>
            <TextInput
              defaultValue={Constants['Email']}
              editable={true}
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'Email',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'******'}
              placeholderTextColor={theme.colors['Light']}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 0.5,
                  borderColor: theme.colors['Custom Color_4'],
                  borderLeftWidth: 0.5,
                  borderRadius: 8,
                  borderRightWidth: 0.5,
                  borderTopWidth: 0.5,
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  height: 52,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['App Green'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 12,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'✔  There must be at least 8 characters'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['App Green'],
                fontFamily: 'Inter_400Regular',
                fontSize: 13,
                marginLeft: 20,
                marginTop: 12,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'✔  There must be a unique code like @!#'}
          </Text>
          {/* Confirm Password */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
                  opacity: 1,
                },
                dimensions.width
              )}
            >
              {'Confirm Password'}
            </Text>
            <TextInput
              defaultValue={Constants['Email']}
              editable={true}
              onChangeText={newTextInputValue => {
                try {
                  setGlobalVariableValue({
                    key: 'Email',
                    value: newTextInputValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'******'}
              placeholderTextColor={theme.colors['Light']}
              secureTextEntry={true}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 0.5,
                  borderColor: theme.colors['Custom Color_4'],
                  borderLeftWidth: 0.5,
                  borderRadius: 8,
                  borderRightWidth: 0.5,
                  borderTopWidth: 0.5,
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  height: 52,
                  marginTop: 10,
                  paddingBottom: 8,
                  paddingLeft: 16,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Submit */}
        <Button
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_5'],
              borderRadius: 24,
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              height: 56,
              marginBottom: 40,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Submit'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ChangePasswordScreen);
