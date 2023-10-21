import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  CircleImage,
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

const MessageScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Custom Color'], height: '100%' },
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
            <Circle bgColor={theme.colors['Custom Color_2']} size={50}>
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
          {'Message'}
        </Text>
      </View>
      {/* Search Bar */}
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
            marginBottom: 12,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['Custom Color_4']}
          name={'AntDesign/search1'}
          size={24}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, justifyContent: 'center' },
            dimensions.width
          )}
        >
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
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                marginLeft: 8,
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
              source={Images.Filter}
              style={StyleSheet.applyWidth(
                { height: 18, width: 26 },
                dimensions.width
              )}
            />
          </Touchable>
        </View>
      </View>

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 25 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Chats */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 12, marginLeft: 20, marginRight: 20 },
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
                  listKey={'EyNdXXLM'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('MessageDetailsScreen', {
                              otherUser: listData?.firstName,
                            });
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
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 18,
                              paddingTop: 18,
                            },
                            dimensions.width
                          )}
                        >
                          <View>
                            <CircleImage
                              size={56}
                              source={{ uri: `${listData?.avatar}` }}
                            />
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1, marginLeft: 10, marginRight: 20 },
                              dimensions.width
                            )}
                          >
                            {/* Name ~ */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color_2'],
                                  fontFamily: 'Inter_600SemiBold',
                                  fontSize: 17,
                                  lineHeight: 20,
                                  marginTop: 4,
                                  opacity: 1,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.fullName}
                            </Text>
                            {/* Message ~ */}
                            <Text
                              numberOfLines={1}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color_2'],
                                  fontFamily: 'Inter_400Regular',
                                  lineHeight: 20,
                                  marginTop: 8,
                                  opacity: 0.5,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.bio}
                            </Text>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'flex-end' },
                              dimensions.width
                            )}
                          >
                            {/* time ~! */}
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Custom Color_2'],
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: 13,
                                  lineHeight: 20,
                                  marginBottom: 6,
                                  marginTop: 4,
                                  opacity: 0.5,
                                },
                                dimensions.width
                              )}
                            >
                              {'10:20'}
                            </Text>
                            <>
                              {!(listData?.id < 3) ? null : (
                                <Circle
                                  bgColor={theme.colors['GetFit Orange']}
                                  size={24}
                                >
                                  {/* Unread count ~ */}
                                  <Text
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors['Custom Color_2'],
                                        fontFamily: 'Inter_500Medium',
                                        lineHeight: 20,
                                        opacity: 1,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {listData?.id}
                                  </Text>
                                </Circle>
                              )}
                            </>
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
      </ScrollView>

      <View
        style={StyleSheet.applyWidth(
          { bottom: 35, position: 'absolute', right: 20 },
          dimensions.width
        )}
      >
        <Touchable>
          <Circle bgColor={theme.colors['Custom Color_2']} size={50}>
            <Icon
              color={theme.colors['Studily_Dark_UI']}
              name={'Feather/plus'}
              size={24}
            />
          </Circle>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MessageScreen);
