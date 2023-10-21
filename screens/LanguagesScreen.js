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
import { FlatList, Text, View, useWindowDimensions } from 'react-native';

const LanguagesScreen = props => {
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
  const [checkboxValue, setCheckboxValue] = React.useState(false);

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
            height: 50,
            justifyContent: 'center',
            marginLeft: 8,
            marginTop: 16,
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
              left: 0,
              position: 'absolute',
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
              name={'Ionicons/md-close-outline'}
              size={30}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom Color_2'],
              fontFamily: 'Archivo_600SemiBold',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'Select a Language'}
        </Text>
      </View>
      <FlatList
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, marginBottom: 20 },
          dimensions.width
        )}
        data={Constants['LanguageArray']}
        keyExtractor={listData =>
          listData?.id || listData?.uuid || JSON.stringify(listData)
        }
        listKey={'i1JF1alw'}
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
                  navigation.goBack();
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
                    borderColor: theme.colors['Custom Color_6'],
                    borderLeftWidth: 1,
                    borderRadius: 5,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 48,
                    marginBottom: 10,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    paddingLeft: 15,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  color={theme.colors['Custom Color_2']}
                  name={'FontAwesome/circle-thin'}
                  size={24}
                />
                {/* Language ~ */}
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_400Regular',
                      fontSize: 16,
                      marginLeft: 20,
                    },
                    dimensions.width
                  )}
                >
                  {listData}
                </Text>
                <>
                  {!(Constants['Language'] === listData) ? null : (
                    <CircleImage
                      size={24}
                      source={Images.Check}
                      style={StyleSheet.applyWidth(
                        { left: 14, position: 'absolute' },
                        dimensions.width
                      )}
                    />
                  )}
                </>
              </View>
            </Touchable>
          );
        }}
      />
    </ScreenContainer>
  );
};

export default withTheme(LanguagesScreen);
