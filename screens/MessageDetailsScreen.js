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
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const MessageDetailsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
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
            marginBottom: 12,
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
          {props.route?.params?.otherUser ?? 'Arvind Limba'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 20,
            marginTop: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Chats */}
        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const chatsData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={chatsData}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                listKey={'zgPCZa64'}
                numColumns={1}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      <>
                        {!(listData?.id !== 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                paddingBottom: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <View>
                              <CircleImage
                                size={32}
                                source={{ uri: `${listData?.avatar}` }}
                              />
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_2'],
                                    borderBottomRightRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    flex: 1,
                                    marginLeft: 10,
                                    marginRight: 20,
                                    paddingBottom: 15,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      lineHeight: 20,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom Color_2'],
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 11,
                                    lineHeight: 20,
                                    marginBottom: 6,
                                    marginLeft: 10,
                                    marginTop: 4,
                                    opacity: 0.5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9:41 AM'}
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                      <>
                        {!(listData?.id === 2) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                paddingBottom: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    backgroundColor:
                                      theme.colors['Custom Color_5'],
                                    borderBottomLeftRadius: 24,
                                    borderTopLeftRadius: 24,
                                    borderTopRightRadius: 24,
                                    flex: 1,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    paddingBottom: 15,
                                    paddingLeft: 15,
                                    paddingRight: 15,
                                    paddingTop: 15,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Message ~ */}
                                <Text
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors['Custom Color_2'],
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 12,
                                      lineHeight: 20,
                                      opacity: 0.7,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {listData?.bio}
                                </Text>
                              </View>
                              {/* time ~! */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors['Custom Color_2'],
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 11,
                                    lineHeight: 20,
                                    marginBottom: 6,
                                    marginRight: 10,
                                    marginTop: 4,
                                    opacity: 0.5,
                                    textAlign: 'right',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'9:41 AM'}
                              </Text>
                            </View>

                            <View>
                              <CircleImage
                                size={32}
                                source={{ uri: `${listData?.avatar}` }}
                              />
                            </View>
                          </View>
                        )}
                      </>
                    </>
                  );
                }}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
        {/* Message Tray */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Background'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 24,
              borderRightWidth: 1,
              borderTopWidth: 1,
              bottom: 0,
              flexDirection: 'row',
              height: 52,
              justifyContent: 'space-between',
              left: 0,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10,
              paddingLeft: 8,
              paddingRight: 8,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
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
              placeholder={'Type your message...'}
              placeholderTextColor={theme.colors['Custom Color_4']}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 14,
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
                source={Images.Group162742}
                style={StyleSheet.applyWidth(
                  { height: 32, width: 32 },
                  dimensions.width
                )}
              />
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(MessageDetailsScreen);
