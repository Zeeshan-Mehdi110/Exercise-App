import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const NotificationSettingsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);

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
          {'Notifications'}
        </Text>
      </View>
      {/* Notification Settings */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: theme.colors['Custom Color_6'],
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 12,
          },
          dimensions.width
        )}
      >
        {/* Section Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_400Regular',
              fontSize: 12,
              marginBottom: 8,
              marginTop: 5,
              opacity: 0.6,
            },
            dimensions.width
          )}
        >
          {'Messages Notifications'}
        </Text>
        {/* New Workout */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_2'],
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
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
            {'New Workout'}
          </Text>
          <Switch
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
          />
        </View>
        {/* Added Friend */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_2'],
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
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
            {'Added Friend'}
          </Text>
          <Switch
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
          />
        </View>
        {/* Message */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_2'],
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
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
            {'Message'}
          </Text>
          <Switch
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
          />
        </View>
        {/* Complete Workout */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 55,
              justifyContent: 'space-between',
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
            {'Complete Workout'}
          </Text>
          <Switch
            activeTrackColor={theme.colors['Custom Color_5']}
            inactiveTrackColor={theme.colors['Custom Color_7']}
            onValueChange={newSwitchValue => {
              try {
                setSwitchValue(newSwitchValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={switchValue}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationSettingsScreen);
