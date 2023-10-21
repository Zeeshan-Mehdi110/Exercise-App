import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  CircleImage,
  Divider,
  Icon,
  Link,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HomeScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
      <ImageBackground
        resizeMode={'cover'}
        source={Images.HomeBG}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Custom Color'],
            height: '100%',
            width: '100%',
          },
          dimensions.width
        )}
      >
        <ScrollView
          bounces={true}
          contentContainerStyle={StyleSheet.applyWidth(
            { paddingBottom: 25 },
            dimensions.width
          )}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
              },
              dimensions.width
            )}
          >
            <View>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('UserProfileScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <CircleImage size={40} source={Images.UserImage} />
                <CircleImage
                  size={40}
                  source={{ uri: `${Constants['ProfilePicture']}` }}
                  style={StyleSheet.applyWidth(
                    { position: 'absolute' },
                    dimensions.width
                  )}
                />
              </Touchable>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('MessageScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      height: 48,
                      justifyContent: 'center',
                      width: 48,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'Ionicons/ios-chatbox-ellipses-outline'}
                    size={24}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['GetFit Orange'],
                        borderRadius: 5.5,
                        height: 11,
                        position: 'absolute',
                        right: 9,
                        top: 9,
                        width: 11,
                      },
                      dimensions.width
                    )}
                  />
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('NotificationsScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flexDirection: 'row',
                      height: 48,
                      justifyContent: 'center',
                      width: 48,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'Ionicons/md-notifications-outline'}
                    size={24}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['GetFit Orange'],
                        borderRadius: 5.5,
                        height: 11,
                        position: 'absolute',
                        right: 11,
                        top: 10,
                        width: 11,
                      },
                      dimensions.width
                    )}
                  />
                </View>
              </Touchable>
            </View>
          </View>
          {/* GreetView */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 31, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            {/* Greet */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 18,
                },
                dimensions.width
              )}
            >
              {'Hi, Arvind!'}
            </Text>
            {/* Question */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 30,
                  marginTop: 16,
                },
                dimensions.width
              )}
            >
              {'Have you \nexercised today?'}
            </Text>
          </View>
          {/* Stats View */}
          <View
            style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
          >
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
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 8,
                      },
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
                        {
                          color: theme.colors['Custom Color_2'],
                          paddingLeft: 5,
                        },
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
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 8,
                      },
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
                        {
                          color: theme.colors['Custom Color_2'],
                          marginLeft: 5,
                        },
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
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 8,
                      },
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
                        {
                          color: theme.colors['Custom Color_2'],
                          marginLeft: 5,
                        },
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
          {/* Content */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color_3'],
                borderRadius: 0,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                flex: 1,
                marginTop: 25,
                paddingTop: 20,
              },
              dimensions.width
            )}
          >
            {/* Banner */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight: 20,
                  marginTop: 20,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Custom Color_4'],
                    borderRadius: 15,
                    height: 130,
                    justifyContent: 'center',
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingTop: 20,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Title */}
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
                  {'Healthy life belongs \nto everyone'}
                </Text>
                {/* Start Exercising */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_5'],
                      borderRadius: 20,
                      height: 32,
                      justifyContent: 'center',
                      marginTop: 20,
                      width: 124,
                    },
                    dimensions.width
                  )}
                >
                  <Touchable>
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                        },
                        dimensions.width
                      )}
                    >
                      {'Start Exercising'}
                    </Text>
                  </Touchable>
                </View>
              </View>
              <Image
                resizeMode={'cover'}
                source={
                  Images.PortraitSmilingAfroAmericanSportsManStretchingHisMuscularArmsBeforeWorkoutBySeaUsingMusicAppHisSmartphone1
                }
                style={StyleSheet.applyWidth(
                  {
                    bottom: 0,
                    height: 100,
                    position: 'absolute',
                    right: 0,
                    width: 100,
                  },
                  dimensions.width
                )}
              />
            </View>
            {/* Category */}
            <View
              style={StyleSheet.applyWidth(
                { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* Section Heading */}
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
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
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
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
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
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
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
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
                  style={StyleSheet.applyWidth(
                    { marginTop: 16 },
                    dimensions.width
                  )}
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
            {/* Popular Workout */}
            <View
              style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}
            >
              {/* Header */}
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
                {/* Section Heading */}
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
                  {'Popular Workout'}
                </Text>
                {/* See all */}
                <Link
                  onPress={() => {
                    try {
                      navigation.navigate('WorkoutListAllScreen');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { color: theme.colors['Custom Color_2'] },
                    dimensions.width
                  )}
                  title={'See all'}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 8,
                    overflow: 'hidden',
                  },
                  dimensions.width
                )}
              >
                <ScrollView
                  bounces={true}
                  contentContainerStyle={StyleSheet.applyWidth(
                    { paddingBottom: 20, paddingLeft: 16, paddingRight: 16 },
                    dimensions.width
                  )}
                  horizontal={true}
                  showsVerticalScrollIndicator={false}
                >
                  <DraftbitExampleDataApi.FetchUsersGET limit={4}>
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
                            { flex: 1, flexDirection: 'row' },
                            dimensions.width
                          )}
                          data={fetchData}
                          horizontal={true}
                          keyExtractor={listData =>
                            listData?.id ||
                            listData?.uuid ||
                            JSON.stringify(listData)
                          }
                          listKey={'odGdNuVB'}
                          numColumns={1}
                          renderItem={({ item }) => {
                            const listData = item;
                            return (
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate('WorkoutDetailsScreen');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={StyleSheet.applyWidth(
                                  { marginRight: 30, marginTop: 16 },
                                  dimensions.width
                                )}
                              >
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderRadius: 8,
                                      height: 181,
                                      width: 172,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      { borderRadius: 8, overflow: 'hidden' },
                                      dimensions.width
                                    )}
                                  >
                                    <ImageBackground
                                      resizeMode={'cover'}
                                      source={Images.CategoryHand}
                                      style={StyleSheet.applyWidth(
                                        { height: 128, width: 172 },
                                        dimensions.width
                                      )}
                                    >
                                      <FlatList
                                        contentContainerStyle={StyleSheet.applyWidth(
                                          { flexDirection: 'row' },
                                          dimensions.width
                                        )}
                                        data={Constants['Tags']}
                                        horizontal={false}
                                        inverted={false}
                                        keyExtractor={listData =>
                                          listData?.id ||
                                          listData?.uuid ||
                                          JSON.stringify(listData)
                                        }
                                        listKey={JSON.stringify(
                                          Constants['Tags']
                                        )}
                                        numColumns={1}
                                        renderItem={({ item }) => {
                                          const listData = item;
                                          return (
                                            <View
                                              style={StyleSheet.applyWidth(
                                                {
                                                  backgroundColor:
                                                    theme.colors[
                                                      'text placeholder'
                                                    ],
                                                  borderRadius: 4,
                                                  marginBottom: 5,
                                                  marginLeft: 10,
                                                  marginTop: 10,
                                                  paddingBottom: 5,
                                                  paddingLeft: 8,
                                                  paddingRight: 8,
                                                  paddingTop: 5,
                                                },
                                                dimensions.width
                                              )}
                                            >
                                              <Text
                                                style={StyleSheet.applyWidth(
                                                  {
                                                    color:
                                                      theme.colors[
                                                        'Custom #ffffff'
                                                      ],
                                                    fontFamily:
                                                      'Inter_400Regular',
                                                    fontSize: 12,
                                                  },
                                                  dimensions.width
                                                )}
                                              >
                                                {listData}
                                              </Text>
                                            </View>
                                          );
                                        }}
                                      />
                                    </ImageBackground>
                                  </View>

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
                                    {'Up and Down Stairs'}
                                  </Text>

                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors['Custom Color_2'],
                                        fontFamily: 'Inter_400Regular',
                                        fontSize: 12,
                                        marginTop: 8,
                                        opacity: 0.5,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Train your thighs and legs'}
                                  </Text>
                                </View>
                              </Touchable>
                            );
                          }}
                        />
                      );
                    }}
                  </DraftbitExampleDataApi.FetchUsersGET>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      <View
        style={StyleSheet.applyWidth(
          { bottom: 20, position: 'absolute', right: 20 },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('MakeTodaysPlaneScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle bgColor={theme.colors['Custom Color_5']} size={50}>
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Feather/plus'}
              size={24}
            />
          </Circle>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
