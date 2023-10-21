import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
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
  ImageBackground,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const WorkoutListAllScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
            marginBottom: 10,
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
            <Circle bgColor={theme.colors['Custom Color_2']} size={48}>
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
          {'All Workout'}
        </Text>
      </View>

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        contentContainerStyle={StyleSheet.applyWidth(
          { marginTop: 20, paddingBottom: 40 },
          dimensions.width
        )}
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
                {
                  alignItems: 'center',
                  height: 48,
                  justifyContent: 'center',
                  width: 48,
                },
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
            { marginLeft: '2%', marginRight: '2%', marginTop: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginLeft: 16,
              },
              dimensions.width
            )}
          >
            {'Category'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
              },
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
        {/* Popular Workout */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, paddingLeft: 16, paddingRight: 16, width: '100%' },
            dimensions.width
          )}
        >
          <DraftbitExampleDataApi.FetchUsersGET limit={10}>
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
                  data={fetchData}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'YN4cVLdU'}
                  numColumns={2}
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
                          {
                            marginLeft: '2%',
                            marginRight: '2%',
                            marginTop: 16,
                            width: '46%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { borderRadius: 8, height: 181, width: '100%' },
                            dimensions.width
                          )}
                        >
                          {/* Image */}
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
                                { height: 110, width: '100%' },
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
                                            theme.colors['text placeholder'],
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
                                              theme.colors['Custom #ffffff'],
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
                          {/* Title */}
                          <Text
                            numberOfLines={1}
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
                          {/* Description */}
                          <Text
                            numberOfLines={1}
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
                  style={StyleSheet.applyWidth(
                    { width: '100%' },
                    dimensions.width
                  )}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(WorkoutListAllScreen);
