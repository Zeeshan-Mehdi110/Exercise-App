import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Button,
  CircleImage,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const UserInfoScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [ImageModal, setImageModal] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
            <Icon
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
              size={24}
            />
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
          {'User Info'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        {/* Profile Picture */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <View>
            <Touchable
              onPress={() => {
                try {
                  setImageModal(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* User Image */}
              <CircleImage size={100} source={Images.UserImage} />
              {/* User Image */}
              <CircleImage
                size={100}
                source={{ uri: `${Constants['ProfilePicture']}` }}
                style={StyleSheet.applyWidth(
                  { position: 'absolute' },
                  dimensions.width
                )}
              />
              {/* Edit Icon */}
              <CircleImage
                size={32}
                source={Images.Edit}
                style={StyleSheet.applyWidth(
                  { bottom: 0, position: 'absolute', right: 0 },
                  dimensions.width
                )}
              />
            </Touchable>
          </View>
        </View>
        {/* First Name */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'First Name'}
          </Text>
          <TextInput
            defaultValue={Constants['FirstName']}
            editable={true}
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'FirstName',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Jon'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 0.5,
                borderColor: theme.colors['Custom Color_4'],
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                height: 52,
                marginTop: 10,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
          />
        </View>
        {/* Last Name */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Last Name'}
          </Text>
          <TextInput
            defaultValue={Constants['LastName']}
            editable={true}
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'LastName',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Doe'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_4'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                height: 52,
                marginTop: 10,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
          />
        </View>
        {/* Email */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Email'}
          </Text>
          <TextInput
            defaultValue={Constants['Email']}
            editable={true}
            onChangeText={newTextInputValue => {
              try {
                setGlobalVariableValue({
                  key: 'Email',
                  value: newTextInputValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'someone@draftbit.com'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 0.5,
                borderColor: theme.colors['Custom Color_4'],
                borderLeftWidth: 0.5,
                borderRadius: 8,
                borderRightWidth: 0.5,
                borderTopWidth: 0.5,
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 16,
                height: 52,
                marginTop: 10,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
          />
        </View>
        {/* Gender */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Gender'}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-evenly' },
              dimensions.width
            )}
          >
            {/* Male */}
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Gender',
                    value: 'male',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginTop: 20, width: '45%' },
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
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 55,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/circle-thin'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 16,
                      marginLeft: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Male'}
                </Text>
                <>
                  {!(Constants['Gender'] === 'male') ? null : (
                    <CircleImage
                      size={24}
                      source={Images.Check}
                      style={StyleSheet.applyWidth(
                        { left: 12, position: 'absolute' },
                        dimensions.width
                      )}
                    />
                  )}
                </>
              </View>
            </Touchable>
            {/* Female */}
            <Touchable
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'Gender',
                    value: 'female',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { marginLeft: '5%', marginTop: 20, width: '45%' },
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
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 55,
                    paddingLeft: 12,
                    paddingRight: 12,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/circle-thin'}
                  size={24}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 16,
                      marginLeft: 15,
                    },
                    dimensions.width
                  )}
                >
                  {'Female'}
                </Text>
                <>
                  {!(Constants['Gender'] === 'female') ? null : (
                    <CircleImage
                      size={24}
                      source={Images.Check}
                      style={StyleSheet.applyWidth(
                        { left: 12, position: 'absolute' },
                        dimensions.width
                      )}
                    />
                  )}
                </>
              </View>
            </Touchable>
          </View>
        </View>
        {/* Location */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 20, paddingLeft: 20, paddingRight: 20 },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 14,
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Location'}
          </Text>
          <TextInput
            defaultValue={Constants['Location']}
            editable={true}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              try {
                setGlobalVariableValue({
                  key: 'Location',
                  value: newTextAreaValue,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
            }
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_4'],
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_300Light',
                height: 120,
                lineHeight: 20,
                marginTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
            textAlignVertical={'top'}
          />
        </View>
        {/* Save Changes */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'HomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_16'],
              borderRadius: 24,
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Inter_500Medium',
              height: 56,
              marginBottom: 35,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Save Changes'}
        />
      </KeyboardAwareScrollView>

      <Modal animationType={'none'} transparent={true} visible={ImageModal}>
        <View
          style={StyleSheet.applyWidth({ height: '100%' }, dimensions.width)}
        >
          <Touchable
            onPress={() => {
              try {
                setImageModal(false);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { height: '100%', width: '100%' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color'],
                  height: '100%',
                  opacity: 0.7,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                },
                dimensions.width
              )}
            />
          </Touchable>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_3'],
                borderRadius: 16,
                left: 24,
                marginTop: '25%',
                paddingBottom: 20,
                position: 'absolute',
                right: 24,
                zIndex: 1,
              },
              dimensions.width
            )}
          >
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
              {'Change your picture'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Custom Color_4'],
                  borderTopWidth: 1,
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      const img = await openCameraUtil({
                        mediaTypes: 'Images',
                        allowsEditing: false,
                        cameraType: 'back',
                        videoMaxDuration: undefined,
                        quality: 0.2,
                      });

                      setGlobalVariableValue({
                        key: 'ProfilePicture',
                        value: img,
                      });
                      setImageModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_7'],
                      borderColor: theme.colors['Custom Color_8'],
                      borderRadius: 8,
                      flexDirection: 'row',
                      height: 60,
                      paddingLeft: 16,
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'Ionicons/camera'}
                    size={22}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Take a photo'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      setImageModal(false);
                      const img = await openImagePickerUtil({
                        mediaTypes: 'All',
                        allowsEditing: false,
                        quality: 0.2,
                      });

                      setGlobalVariableValue({
                        key: 'ProfilePicture',
                        value: img,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_7'],
                      borderColor: theme.colors['Custom Color_8'],
                      borderRadius: 8,
                      flexDirection: 'row',
                      height: 60,
                      paddingLeft: 16,
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'MaterialCommunityIcons/folder-open'}
                    size={22}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Choose from your file'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setImageModal(false);
                    setGlobalVariableValue({
                      key: 'ProfilePicture',
                      value: '',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { marginTop: 25 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_7'],
                      borderColor: theme.colors['Custom Color_8'],
                      borderRadius: 8,
                      flexDirection: 'row',
                      height: 60,
                      paddingLeft: 16,
                      paddingRight: 16,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_8']}
                    name={'Entypo/trash'}
                    size={22}
                  />
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_8'],
                        fontFamily: 'Inter_500Medium',
                        fontSize: 16,
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    {'Delete Photo'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(UserInfoScreen);
