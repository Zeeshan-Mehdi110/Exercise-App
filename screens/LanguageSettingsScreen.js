import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const LanguageSettingsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const [OtherLanguagesArr, setOtherLanguagesArr] = React.useState([
    'Chinese',
    'Croatian',
    'Czech',
    'Danish',
    'Filpino',
    'Finland',
  ]);
  const [SuggestedLanguagesArr, setSuggestedLanguagesArr] = React.useState([
    'English (UK)',
    'English',
    'Bahasa Indonesia',
  ]);
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
          {'Language'}
        </Text>
      </View>
      {/* Languages Container */}
      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 30 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* Suggested Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginBottom: 8,
                marginTop: 5,
                opacity: 0.6,
              },
              dimensions.width
            )}
          >
            {'Suggested Languages'}
          </Text>
          <FlatList
            contentContainerStyle={StyleSheet.applyWidth(
              { flex: 1 },
              dimensions.width
            )}
            data={SuggestedLanguagesArr}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            listKey={'bomUjBsl'}
            numColumns={1}
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Custom Color_4'],
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                        marginLeft: 8,
                        marginRight: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {listData}
                    </Text>
                    {/* Selected Icon */}
                    <>
                      {!(listData === Constants['Language']) ? null : (
                        <CircleImage size={24} source={Images.Check} />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
          />
        </View>
        {/* Other Languages */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_4'],
              borderLeftWidth: 1,
              borderRadius: 12,
              borderRightWidth: 1,
              borderTopWidth: 1,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 20,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          {/* Section Heading */}
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginBottom: 8,
                marginTop: 5,
                opacity: 0.6,
              },
              dimensions.width
            )}
          >
            {'Other Languages'}
          </Text>
          <FlatList
            contentContainerStyle={StyleSheet.applyWidth(
              { flex: 1 },
              dimensions.width
            )}
            data={OtherLanguagesArr}
            keyExtractor={listData =>
              listData?.id || listData?.uuid || JSON.stringify(listData)
            }
            listKey={'oNymu2Gy'}
            numColumns={1}
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'Language',
                        value: listData,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Custom Color_4'],
                        flexDirection: 'row',
                        height: 55,
                        justifyContent: 'space-between',
                        marginLeft: 8,
                        marginRight: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Language ~ */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Custom Color_2'],
                          fontFamily: 'Inter_400Regular',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {listData}
                    </Text>
                    {/* Selected Icon */}
                    <>
                      {!(listData === Constants['Language']) ? null : (
                        <CircleImage size={24} source={Images.Check} />
                      )}
                    </>
                  </View>
                </Touchable>
              );
            }}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(LanguageSettingsScreen);
