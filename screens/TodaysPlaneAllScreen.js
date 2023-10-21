import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  DatePicker,
  Icon,
  ScreenContainer,
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

const TodaysPlaneAllScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
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
          {"All Today's Plane "}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          {
            left: 0,
            paddingBottom: 30,
            position: 'absolute',
            right: 0,
            top: 0,
          },
          dimensions.width
        )}
        showsVerticalScrollIndicator={false}
      >
        {/* DateView */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              borderRadius: 8,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <DatePicker
            date={datePickerValue}
            label={'Date'}
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
              { color: theme.colors['Custom #ffffff'] },
              dimensions.width
            )}
            type={'underline'}
          />
        </View>
        {/* Description */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 16, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 48,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Heading */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Build Leg Muscles'}
            </Text>

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
                  source={Images.EditSquare}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
              </Touchable>
            </View>
          </View>
          {/* Details */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_300Light',
                lineHeight: 20,
                marginTop: 8,
                opacity: 0.5,
              },
              dimensions.width
            )}
          >
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type."
            }
          </Text>
        </View>
        {/* Workout List */}
        <View
          style={StyleSheet.applyWidth({ marginTop: 16 }, dimensions.width)}
        >
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
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                    data={fetchData}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    listKey={'G47TcDXa'}
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
    </ScreenContainer>
  );
};

export default withTheme(TodaysPlaneAllScreen);
