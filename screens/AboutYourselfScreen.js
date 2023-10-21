import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const AboutYourselfScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [checkboxValue, setCheckboxValue] = React.useState(false);

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
          {'Tell us about yourself'}
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
        {/* Gender */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', justifyContent: 'space-evenly' },
            dimensions.width
          )}
        >
          {/* Male */}
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Gender',
                  value: 'male',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginTop: 20, width: '45%' },
              dimensions.width
            )}
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
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/circle-thin'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 15,
                  },
                  dimensions.width
                )}
              >
                {'Male'}
              </Text>
              <>
                {!(Constants['Gender'] === 'male') ? null : (
                  <CircleImage
                    size={24}
                    source={Images.Check}
                    style={StyleSheet.applyWidth(
                      { left: 10, position: 'absolute' },
                      dimensions.width
                    )}
                  />
                )}
              </>
            </View>
          </Touchable>
          {/* Female */}
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'Gender',
                  value: 'female',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { marginLeft: '5%', marginTop: 20, width: '45%' },
              dimensions.width
            )}
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
                  paddingLeft: 12,
                  paddingRight: 12,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'FontAwesome/circle-thin'}
                size={24}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    marginLeft: 15,
                  },
                  dimensions.width
                )}
              >
                {'Female'}
              </Text>
              <>
                {!(Constants['Gender'] === 'female') ? null : (
                  <CircleImage
                    size={24}
                    source={Images.Check}
                    style={StyleSheet.applyWidth(
                      { left: 10, position: 'absolute' },
                      dimensions.width
                    )}
                  />
                )}
              </>
            </View>
          </Touchable>
        </View>
        {/* Next */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('HeightScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_5'],
              borderRadius: 28,
              fontFamily: 'Inter_700Bold',
              fontSize: 17,
              height: 55,
              letterSpacing: 1.2,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Next'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AboutYourselfScreen);
