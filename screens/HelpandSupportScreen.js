import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
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
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HelpandSupportScreen = props => {
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
          {'Help and Support'}
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
            marginBottom: 12,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
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

      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 25 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        {/* FAQs */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 12, marginLeft: 20, marginRight: 20, marginTop: 8 },
            dimensions.width
          )}
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
                    { flex: 1 },
                    dimensions.width
                  )}
                  data={fetchData}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'2GTjOaTJ'}
                  numColumns={1}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: theme.colors['Custom Color_4'],
                            paddingBottom: 18,
                            paddingTop: 18,
                          },
                          dimensions.width
                        )}
                      >
                        <AccordionGroup
                          caretColor={theme.colors['Custom Color_2']}
                          caretSize={24}
                          closedColor={theme.colors['Custom Color_2']}
                          expanded={false}
                          iconSize={24}
                          label={'Beautiful West Coast Villa'}
                          openColor={theme.colors['Custom Color_2']}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Custom Color_2'],
                              fontFamily: 'Inter_500Medium',
                              fontSize: 16,
                              paddingBottom: 8,
                              paddingTop: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Details */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors['Custom Color_2'],
                                fontFamily: 'Inter_400Regular',
                                lineHeight: 20,
                                marginTop: 4,
                                opacity: 0.5,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.bio}
                          </Text>
                        </AccordionGroup>
                      </View>
                    );
                  }}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HelpandSupportScreen);
