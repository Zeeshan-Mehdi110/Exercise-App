import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Modal, Text, View, useWindowDimensions } from 'react-native';

const ModBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Modal animationType={'none'} transparent={true}>
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['App Green'],
            height: '100%',
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
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
          <Icon
            color={theme.colors['Custom Color_8']}
            name={'AntDesign/questioncircleo'}
            size={101}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_600SemiBold',
                fontSize: 21,
                marginTop: 25,
              },
              dimensions.width
            )}
          >
            {'Are You Sure?'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                marginTop: 4,
                opacity: 0.5,
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
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Touchable
              style={StyleSheet.applyWidth({ width: '40%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Custom Color_8'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 46,
                    justifyContent: 'center',
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_8'],
                      fontFamily: 'Inter_500Medium',
                    },
                    dimensions.width
                  )}
                >
                  {'Log Out\n'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth({ width: '40%' }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color_5'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Custom Color_8'],
                    borderLeftWidth: 1,
                    borderRadius: 20,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
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
                    },
                    dimensions.width
                  )}
                >
                  {'Cancel'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default withTheme(ModBlock);
