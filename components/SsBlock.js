import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Divider, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SsBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}>
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            borderRadius: 16,
            height: 109,
            marginLeft: 16,
            marginRight: 16,
            opacity: 0.57,
          },
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 16,
            flexDirection: 'row',
            height: 109,
            justifyContent: 'space-evenly',
            left: 0,
            marginLeft: 16,
            marginRight: 16,
            opacity: 1,
            position: 'absolute',
            right: 0,
            top: 0,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <View>
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors['Custom Color_2'] },
                dimensions.width
              )}
            >
              {'Weight'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_700Bold',
                    fontSize: 30,
                  },
                  dimensions.width
                )}
              >
                {'89'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors['Custom Color_2'], paddingLeft: 5 },
                  dimensions.width
                )}
              >
                {'Kg'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Custom Color_2']}
            style={StyleSheet.applyWidth(
              { height: 40, position: 'absolute', right: 0, width: 1 },
              dimensions.width
            )}
          />
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <View>
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors['Custom Color_2'] },
                dimensions.width
              )}
            >
              {'Height'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_700Bold',
                    fontSize: 30,
                  },
                  dimensions.width
                )}
              >
                {'169'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors['Custom Color_2'], marginLeft: 5 },
                  dimensions.width
                )}
              >
                {'Cm'}
              </Text>
            </View>
          </View>
          <Divider
            color={theme.colors['Custom Color_2']}
            style={StyleSheet.applyWidth(
              { height: 40, position: 'absolute', right: 0, width: 1 },
              dimensions.width
            )}
          />
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <View>
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors['Custom Color_2'] },
                dimensions.width
              )}
            >
              {'Todo Today'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 8 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_700Bold',
                    fontSize: 30,
                  },
                  dimensions.width
                )}
              >
                {'45'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  { color: theme.colors['Custom Color_2'], marginLeft: 5 },
                  dimensions.width
                )}
              >
                {'%'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withTheme(SsBlock);
