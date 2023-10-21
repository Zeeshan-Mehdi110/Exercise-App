import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const PlayWorkoutPlaylistScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [isPlaying, setIsPlaying] = React.useState(false);

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
            <Circle bgColor={theme.colors['Custom Color']} size={50}>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Ionicons/arrow-back-sharp'}
                size={24}
              />
            </Circle>
          </Touchable>
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { height: '50%', top: 0, width: '100%' },
          dimensions.width
        )}
      >
        <WebView
          cacheEnabled={true}
          javaScriptEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          source={{
            uri: 'https://www.youtube.com/embed/c8hjhRqIwHE?controls=0',
          }}
          style={StyleSheet.applyWidth(
            { flex: 1, height: '100%', width: '100%' },
            dimensions.width
          )}
        />
      </View>
      {/* Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            bottom: 0,
            flex: 1,
            left: 0,
            paddingBottom: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            position: 'absolute',
            right: 0,
          },
          dimensions.width
        )}
      >
        {/* About Exercise */}
        <View>
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_500Medium',
                fontSize: 28,
              },
              dimensions.width
            )}
          >
            {'Doing leg stretch'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', marginTop: 16 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.BxStopwatch1}
                style={StyleSheet.applyWidth(
                  { height: 24, opacity: 0.65, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 14,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'15  minutes'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginLeft: 25 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.BxVideoRecording1}
                style={StyleSheet.applyWidth(
                  { height: 24, opacity: 0.65, width: 24 },
                  dimensions.width
                )}
              />
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 14,
                    marginLeft: 10,
                  },
                  dimensions.width
                )}
              >
                {'1/9 Step Videos'}
              </Text>
            </View>
          </View>
        </View>
        {/* Timer */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom #ffffff'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 40,
              marginTop: 40,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {'20 : 00'}
        </Text>
        {/* Control Panel */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          {/* Back */}
          <View
            style={StyleSheet.applyWidth(
              {
                height: 48,
                justifyContent: 'center',
                paddingLeft: 25,
                paddingRight: 25,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontSize: 21,
                    opacity: 0.65,
                  },
                  dimensions.width
                )}
              >
                {'Back'}
              </Text>
            </Touchable>
          </View>
          {/* Play Pause */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', justifyContent: 'center' },
              dimensions.width
            )}
          >
            {/* Tap to Pause */}
            <>
              {!isPlaying ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsPlaying(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle bgColor={theme.colors['Custom Color_5']} size={48}>
                    <Icon
                      color={theme.colors['Custom #ffffff']}
                      name={'Ionicons/ios-pause'}
                      size={24}
                      style={StyleSheet.applyWidth(
                        { marginLeft: 2 },
                        dimensions.width
                      )}
                    />
                  </Circle>
                </Touchable>
              )}
            </>
            {/* Tap to Play */}
            <>
              {isPlaying ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsPlaying(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle bgColor={theme.colors['Custom Color_5']} size={48}>
                    <Icon
                      color={theme.colors['Custom #ffffff']}
                      name={'Ionicons/ios-play'}
                      size={24}
                      style={StyleSheet.applyWidth(
                        { marginLeft: 2 },
                        dimensions.width
                      )}
                    />
                  </Circle>
                </Touchable>
              )}
            </>
          </View>
          {/* Next */}
          <View
            style={StyleSheet.applyWidth(
              {
                height: 48,
                justifyContent: 'center',
                paddingLeft: 25,
                paddingRight: 25,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom #ffffff'],
                    fontSize: 21,
                    opacity: 0.65,
                  },
                  dimensions.width
                )}
              >
                {'Next'}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PlayWorkoutPlaylistScreen);
