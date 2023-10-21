import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
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
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const MakeTodaysPlaneScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color'],
          justifyContent: 'space-between',
        },
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

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 85 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Search */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              flexDirection: 'row',
              height: 52,
              justifyContent: 'space-between',
              marginLeft: 20,
              marginRight: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Custom Color_4']}
            name={'Feather/search'}
            size={24}
          />
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <TextInput
              editable={true}
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              placeholder={'Search...'}
              placeholderTextColor={theme.colors['Custom Color_4']}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 15,
                  paddingBottom: 8,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Filters */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', justifyContent: 'center' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.Filter}
                style={StyleSheet.applyWidth(
                  { height: 18, width: 26 },
                  dimensions.width
                )}
              />
            </View>
          </Touchable>
        </View>
        {/* Category */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
              },
              dimensions.width
            )}
          >
            {'Category'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-evenly' },
              dimensions.width
            )}
          >
            <Touchable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 10 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.CategoryHand}
                  style={StyleSheet.applyWidth(
                    { height: 100, width: 74 },
                    dimensions.width
                  )}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    borderRadius: 15,
                    height: 95,
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: 74,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Hand'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 15 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Rectangle22429}
                  style={StyleSheet.applyWidth(
                    { height: 100, width: 74 },
                    dimensions.width
                  )}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 95,
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: 74,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Legs'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 15 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Rectangle224291}
                  style={StyleSheet.applyWidth(
                    { height: 100, width: 74 },
                    dimensions.width
                  )}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 95,
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: 74,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Jump'}
                </Text>
              </View>
            </Touchable>

            <Touchable
              style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
            >
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 15 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.Rectangle224293}
                  style={StyleSheet.applyWidth(
                    { height: 100, width: 74 },
                    dimensions.width
                  )}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 95,
                    justifyContent: 'center',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: 74,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Yoga'}
                </Text>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Workout List */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 30 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 24,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Workout List'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                justifyContent: 'space-evenly',
                marginTop: 8,
                overflow: 'hidden',
                paddingLeft: 20,
                paddingRight: 20,
              },
              dimensions.width
            )}
          >
            <DraftbitExampleDataApi.FetchUsersGET limit={8}>
              {({ loading, error, data, refetchUsers }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <FlatList
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    data={fetchData}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    listKey={'PxslaWuS'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          style={StyleSheet.applyWidth(
                            { marginTop: 16 },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderRadius: 8,
                                flexDirection: 'row',
                                height: 80,
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-start',
                                  flexDirection: 'row',
                                },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  { borderRadius: 10, overflow: 'hidden' },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  source={Images.CategoryHand}
                                  style={StyleSheet.applyWidth(
                                    { height: 80, width: 70 },
                                    dimensions.width
                                  )}
                                />
                              </View>

                              <View
                                style={StyleSheet.applyWidth(
                                  { marginLeft: 16, width: '65%' },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_2'],
                                      fontFamily: 'Inter_600SemiBold',
                                      fontSize: 15,
                                      marginTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Doing leg stretch'}
                                </Text>

                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_2'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      lineHeight: 17,
                                      marginTop: 8,
                                      opacity: 0.5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Finish this exercise in 15 minutes'}
                                </Text>
                              </View>
                            </View>

                            <View>
                              <Touchable>
                                <Icon
                                  color={theme.colors['Custom Color_2']}
                                  name={'FontAwesome/circle-thin'}
                                  size={24}
                                />
                              </Touchable>
                            </View>
                          </View>
                        </Touchable>
                      );
                    }}
                  />
                );
              }}
            </DraftbitExampleDataApi.FetchUsersGET>
          </View>
        </View>
      </ScrollView>
      {/* Next Step */}
      <View
        style={StyleSheet.applyWidth(
          {
            bottom: 40,
            left: 0,
            paddingLeft: 20,
            paddingRight: 20,
            position: 'absolute',
            right: 0,
            width: '100%',
            zIndex: 21,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('PlaneDetailsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Next Step */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('PlaneDetailsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_5'],
                borderRadius: 24,
                fontFamily: 'System',
                fontWeight: '700',
                height: 56,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Next Step'}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MakeTodaysPlaneScreen);
