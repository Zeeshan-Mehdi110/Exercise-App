import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  Link,
  ScreenContainer,
  Slider,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { BlurView } from 'expo-blur';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const WorkoutScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [FilterModal, setFilterModal] = React.useState(false);
  const [SelectedCategory, setSelectedCategory] = React.useState('Foot');
  const [SelectedDate, setSelectedDate] = React.useState('1 Day ago');
  const [sliderValue, setSliderValue] = React.useState(50);
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
          {'Workout'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
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
          <Touchable
            onPress={() => {
              try {
                setFilterModal(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
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
                { color: theme.colors['GetFit Orange'] },
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
                { paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
              horizontal={true}
              showsVerticalScrollIndicator={false}
            >
              <DraftbitExampleDataApi.FetchUsersGET limit={5}>
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
                      keyExtractor={listData =>
                        listData?.id ||
                        listData?.uuid ||
                        JSON.stringify(listData)
                      }
                      listKey={'abtAWAqs'}
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
                                { borderRadius: 8, height: 181, width: 172 },
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
                                    horizontal={true}
                                    inverted={false}
                                    keyExtractor={listData =>
                                      listData?.id ||
                                      listData?.uuid ||
                                      JSON.stringify(listData)
                                    }
                                    listKey={JSON.stringify(Constants['Tags'])}
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
                                              height: 25,
                                              justifyContent: 'center',
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
                                                fontFamily: 'Inter_400Regular',
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
        {/* Build Leg Muscles */}
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
              {'Build Leg Muscles'}
            </Text>
            {/* See all */}
            <Link
              onPress={() => {
                try {
                  navigation.navigate('TodaysPlaneAllScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { color: theme.colors['GetFit Orange'] },
                dimensions.width
              )}
              title={'See all'}
            />
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
            <DraftbitExampleDataApi.FetchUsersGET limit={3}>
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
                    listKey={'JJXM2t7r'}
                    numColumns={1}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('PlayWorkoutPlaylistScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
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
                                  flex: 1,
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
                                  { flex: 1, marginLeft: 16, marginRight: 16 },
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

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  height: 48,
                                  justifyContent: 'center',
                                  width: 48,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                <Image
                                  resizeMode={'cover'}
                                  source={Images.Progress}
                                  style={StyleSheet.applyWidth(
                                    { height: 36, width: 36 },
                                    dimensions.width
                                  )}
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

      <Modal animationType={'none'} transparent={true} visible={FilterModal}>
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'flex-end' },
            dimensions.width
          )}
        >
          <BlurView
            intensity={50}
            style={StyleSheet.applyWidth(
              { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
              dimensions.width
            )}
            tint={'default'}
          />
          {/* Filters View */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom Color'],
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            {/* header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 48, justifyContent: 'center', width: 48 },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setFilterModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Circle bgColor={theme.colors.light} size={48}>
                    <Icon
                      color={theme.colors['Custom Color_2']}
                      name={'Entypo/cross'}
                      size={24}
                    />
                  </Circle>
                </Touchable>
              </View>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Filter'}
              </Text>
              <View
                style={StyleSheet.applyWidth(
                  { height: 48, justifyContent: 'center', width: 48 },
                  dimensions.width
                )}
              />
            </View>
            {/* People Join */}
            <View
              style={StyleSheet.applyWidth(
                {
                  marginTop: 16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 16,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Many People Join'}
              </Text>
              <Slider
                maximumValue={100}
                minimumTrackTintColor={theme.colors['GetFit Orange']}
                minimumValue={1}
                onValueChange={newSliderValue => {
                  try {
                    setSliderValue(newSliderValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 10 },
                  dimensions.width
                )}
                thumbTintColor={theme.colors['GetFit Orange']}
                value={sliderValue}
              />
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-end' },
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
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 40,
                      justifyContent: 'center',
                      width: 100,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_13'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 17,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {sliderValue}
                  </Text>
                </View>
              </View>
            </View>
            {/* Popular Categories */}
            <View
              style={StyleSheet.applyWidth(
                { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Popular Category'}
              </Text>
              <FlashList
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1, flexWrap: 'wrap', marginTop: 16 },
                  dimensions.width
                )}
                data={Constants['PopularCategories']}
                estimatedItemSize={50}
                horizontal={true}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'q5OQevnw'}
                numColumns={1}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <>
                      <>
                        {SelectedCategory === flashListData ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                setSelectedCategory(flashListData);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['Custom Color_4'],
                                  borderLeftWidth: 1,
                                  borderRadius: 24,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  height: 36,
                                  justifyContent: 'center',
                                  marginRight: 16,
                                  marginTop: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom #ffffff'],
                                    fontFamily: 'Inter_400Regular',
                                  },
                                  dimensions.width
                                )}
                              >
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                      <>
                        {!(SelectedCategory === flashListData) ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                setSelectedCategory(flashListData);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['GetFit Orange'],
                                  borderLeftWidth: 1,
                                  borderRadius: 24,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  height: 36,
                                  justifyContent: 'center',
                                  marginRight: 16,
                                  marginTop: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['GetFit Orange'],
                                    fontFamily: 'Inter_400Regular',
                                  },
                                  dimensions.width
                                )}
                              >
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                    </>
                  );
                }}
              />
            </View>
            {/* Date Upload */}
            <View
              style={StyleSheet.applyWidth(
                { marginTop: 22, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                    textAlign: 'left',
                  },
                  dimensions.width
                )}
              >
                {'Date Upload'}
              </Text>
              <FlashList
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1, flexWrap: 'wrap', marginTop: 16 },
                  dimensions.width
                )}
                data={Constants['DateUploadedArray']}
                estimatedItemSize={50}
                horizontal={true}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                listKey={'b5GJ37A9'}
                numColumns={1}
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <>
                      <>
                        {SelectedDate === flashListData ? null : (
                          <Touchable
                            onPress={() => {
                              try {
                                setSelectedDate(flashListData);
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['Custom Color_4'],
                                  borderLeftWidth: 1,
                                  borderRadius: 24,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  height: 36,
                                  justifyContent: 'center',
                                  marginRight: 16,
                                  marginTop: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom #ffffff'],
                                    fontFamily: 'Inter_400Regular',
                                  },
                                  dimensions.width
                                )}
                              >
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                      <>
                        {!(SelectedDate === flashListData) ? null : (
                          <Touchable>
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  borderBottomWidth: 1,
                                  borderColor: theme.colors['GetFit Orange'],
                                  borderLeftWidth: 1,
                                  borderRadius: 24,
                                  borderRightWidth: 1,
                                  borderTopWidth: 1,
                                  height: 36,
                                  justifyContent: 'center',
                                  marginRight: 16,
                                  marginTop: 16,
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['GetFit Orange'],
                                    fontFamily: 'Inter_400Regular',
                                  },
                                  dimensions.width
                                )}
                              >
                                {flashListData}
                              </Text>
                            </View>
                          </Touchable>
                        )}
                      </>
                    </>
                  );
                }}
              />
            </View>
            {/* Apply Filter */}
            <Button
              onPress={() => {
                try {
                  setFilterModal(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['GetFit Orange'],
                  borderRadius: 24,
                  fontFamily: 'System',
                  fontWeight: '700',
                  height: 48,
                  marginLeft: 16,
                  marginRight: 16,
                  marginTop: 32,
                  textAlign: 'center',
                },
                dimensions.width
              )}
              title={'Apply Filter'}
            />
            {/* Clear All */}
            <View
              style={StyleSheet.applyWidth(
                {
                  height: 48,
                  justifyContent: 'center',
                  marginLeft: 16,
                  marginRight: 16,
                  marginTop: 16,
                },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    setFilterModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_8'],
                      fontFamily: 'Inter_500Medium',
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'Clear All'}
                </Text>
              </Touchable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(WorkoutScreen);
