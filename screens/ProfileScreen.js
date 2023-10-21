import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  CircleImage,
  Divider,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const ProfileScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [LogoutModal, setLogoutModal] = React.useState(false);
  const [switchValue, setSwitchValue] = React.useState(false);

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
      {/* User Details */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
            paddingBottom: 15,
            paddingLeft: 20,
            paddingRight: 10,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row' },
            dimensions.width
          )}
        >
          <CircleImage size={56} source={Images.UserImage} />
          <CircleImage
            size={56}
            source={{ uri: `${Constants['ProfilePicture']}` }}
            style={StyleSheet.applyWidth(
              { position: 'absolute' },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              { justifyContent: 'space-evenly', marginLeft: 12 },
              dimensions.width
            )}
          >
            {/* Full Name */}
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Arvind Limba'}
            </Text>
            {/* username */}
            <Text
              style={StyleSheet.applyWidth(
                { color: theme.colors['Custom Color_2'], opacity: 0.5 },
                dimensions.width
              )}
            >
              {'@awi21589'}
            </Text>
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UserInfoScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
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
              source={Images.EditSquare}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
          </View>
        </Touchable>
      </View>

      <ScrollView bounces={true} showsVerticalScrollIndicator={true}>
        {/* Stats View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_5'],
              borderRadius: 21,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 15,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderRadius: 16,
                flexDirection: 'row',
                height: 109,
                justifyContent: 'space-evenly',
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {/* Weight */}
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
                    { color: theme.colors['Custom Color_2'], fontSize: 10 },
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
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 24,
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
                  {
                    height: 40,
                    opacity: 0.5,
                    position: 'absolute',
                    right: 0,
                    width: 1,
                  },
                  dimensions.width
                )}
              />
            </View>
            {/* Height */}
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
                    { color: theme.colors['Custom Color_2'], fontSize: 10 },
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
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 24,
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
                  {
                    height: 40,
                    opacity: 0.5,
                    position: 'absolute',
                    right: 0,
                    width: 1,
                  },
                  dimensions.width
                )}
              />
            </View>
            {/* Todo Today */}
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
                    { color: theme.colors['Custom Color_2'], fontSize: 10 },
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
                        fontFamily: 'Inter_600SemiBold',
                        fontSize: 24,
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
        {/* Security */}
        <View
          style={StyleSheet.applyWidth(
            { marginTop: 30, paddingBottom: 20 },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'security'}
          </Text>
          {/* Change Password */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ChangePasswordScreen');
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
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.IconLock}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Change password'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Feather/chevron-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Forgot Password */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ForgotPasswordScreen');
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
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.Unlock}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Forgot password'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Feather/chevron-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Securitty */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SecurityScreen');
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
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.ShieldDone}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'Security'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Feather/chevron-right'}
                size={24}
              />
            </View>
          </Touchable>
        </View>
        {/* General */}
        <View
          style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'general'}
          </Text>
          {/* Language */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LanguageSettingsScreen');
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
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.Globe}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'language'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Feather/chevron-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Clear Cache */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.Layer2}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'clear cache'}
                </Text>
              </View>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 14,
                    opacity: 0.5,
                    paddingLeft: 12,
                    textTransform: 'none',
                  },
                  dimensions.width
                )}
              >
                {'88 MB'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* About */}
        <View
          style={StyleSheet.applyWidth({ paddingBottom: 20 }, dimensions.width)}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'about'}
          </Text>
          {/* Legal And Policies */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LegalPoliciesScreen');
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
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.Shield}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'legal and policies'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Feather/chevron-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Help & Support */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('HelpandSupportScreen');
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
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.Question}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'help & support'}
                </Text>
              </View>
              <Icon
                color={theme.colors['Custom Color_2']}
                name={'Entypo/chevron-right'}
                size={24}
              />
            </View>
          </Touchable>
          {/* Dark Mode */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 50,
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
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
                  source={Images.Activity}
                  style={StyleSheet.applyWidth(
                    { height: 24, width: 24 },
                    dimensions.width
                  )}
                />
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                      paddingLeft: 12,
                      textTransform: 'capitalize',
                    },
                    dimensions.width
                  )}
                >
                  {'dark mode'}
                </Text>
              </View>
              <Switch
                activeTrackColor={theme.colors['Custom Color_5']}
                inactiveTrackColor={theme.colors['Custom Color_7']}
                onValueChange={newSwitchValue => {
                  try {
                    setSwitchValue(newSwitchValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={switchValue}
              />
            </View>
          </Touchable>
        </View>
        {/* Log Out */}
        <Button
          onPress={() => {
            try {
              setLogoutModal(true);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderBottomWidth: 1,
              borderColor: theme.colors['GetFit Orange'],
              borderLeftWidth: 1,
              borderRadius: 32,
              borderRightWidth: 1,
              borderTopWidth: 1,
              color: theme.colors['GetFit Orange'],
              fontFamily: 'System',
              fontSize: 15,
              fontWeight: '700',
              height: 50,
              marginBottom: 25,
              marginLeft: 20,
              marginRight: 20,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Log Out'}
        />
      </ScrollView>

      <Modal animationType={'none'} transparent={true} visible={LogoutModal}>
        <View
          style={StyleSheet.applyWidth(
            { height: '100%', justifyContent: 'center' },
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
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color_3'],
                borderRadius: 16,
                height: 353,
                justifyContent: 'center',
                marginLeft: 24,
                marginRight: 24,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom Color_8']}
              name={'AntDesign/questioncircleo'}
              size={101}
            />
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
              {'Are You Sure?'}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  marginTop: 4,
                  opacity: 0.5,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel'
              }
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: 20,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    setLogoutModal(false);
                    navigation.navigate('LoginEmailScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '40%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Custom Color_8'],
                      borderLeftWidth: 1,
                      borderRadius: 20,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 46,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_8'],
                        fontFamily: 'Inter_500Medium',
                      },
                      dimensions.width
                    )}
                  >
                    {'Log Out'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setLogoutModal(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { width: '40%' },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom Color_5'],
                      borderRadius: 20,
                      height: 46,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_500Medium',
                      },
                      dimensions.width
                    )}
                  >
                    {'Cancel'}
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

export default withTheme(ProfileScreen);
