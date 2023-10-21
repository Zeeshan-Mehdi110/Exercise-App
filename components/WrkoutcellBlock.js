import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Touchable, withTheme } from '@draftbit/ui';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const WrkoutcellBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
              horizontal={false}
              inverted={false}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'wbnju4Ub'}
              numColumns={1}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['text placeholder'],
                        borderRadius: 4,
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
                          color: theme.colors['Custom #ffffff'],
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
};

export default withTheme(WrkoutcellBlock);
