import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const PlaneDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [textAreaValue, setTextAreaValue] = React.useState('');
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
          {'Today’s Plane'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, marginBottom: 20, paddingBottom: 20 },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Container */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 35, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          {/* Plane Name */}
          <View>
            {/* Plane Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                },
                dimensions.width
              )}
            >
              {'Plane Name'}
            </Text>
            {/* Plane Input */}
            <TextInput
              editable={true}
              onChangeText={newPlaneInputValue => {
                try {
                  setTextInputValue(newPlaneInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Build leg muscles'}
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
                  fontSize: 15,
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
          {/* Selected Date */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            {/* Selected date */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                },
                dimensions.width
              )}
            >
              {'Selected'}
            </Text>
            <DatePicker
              date={datePickerValue}
              label={'Select Date'}
              leftIconMode={'inset'}
              mode={'date'}
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              rightIconName={'Feather/calendar'}
              style={StyleSheet.applyWidth(
                { color: theme.colors['Divider'], marginTop: 8 },
                dimensions.width
              )}
              type={'solid'}
            />
          </View>
          {/* Description */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
          >
            {/* Description */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                },
                dimensions.width
              )}
            >
              {'Description'}
            </Text>
            <TextInput
              editable={true}
              multiline={true}
              numberOfLines={4}
              onChangeText={newTextAreaValue => {
                try {
                  setTextAreaValue(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Enter your plane name'}
              placeholderTextColor={theme.colors['Light']}
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_4'],
                  borderLeftWidth: 1,
                  borderRadius: 8,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 15,
                  height: 140,
                  lineHeight: 20,
                  marginTop: 16,
                  paddingBottom: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
              textAlignVertical={'top'}
              value={textAreaValue}
            />
          </View>
          {/* Save */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'WorkoutScreen',
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
                fontSize: 15,
                fontWeight: '700',
                height: 56,
                marginTop: 35,
                position: 'relative',
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Save'}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PlaneDetailsScreen);
