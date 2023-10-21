import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Circle,
  Icon,
  Slider,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { BlurView } from 'expo-blur';
import { Modal, Text, View, useWindowDimensions } from 'react-native';

const FilterModalBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <Modal animationType={'none'} transparent={true}>
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-end' },
          dimensions.width
        )}
      >
        <BlurView
          intensity={50}
          style={StyleSheet.applyWidth(
            { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
            dimensions.width
          )}
          tint={'default'}
        />
        {/* Filters View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              paddingBottom: 20,
            },
            dimensions.width
          )}
        >
          {/* header */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                { height: 48, justifyContent: 'center', width: 48 },
                dimensions.width
              )}
            >
              <Touchable>
                <Circle bgColor={theme.colors.light} size={48}>
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'Entypo/cross'}
                    size={24}
                  />
                </Circle>
              </Touchable>
            </View>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Filter'}
            </Text>
            <View
              style={StyleSheet.applyWidth(
                { height: 48, justifyContent: 'center', width: 48 },
                dimensions.width
              )}
            />
          </View>
          {/* People Join */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Many People Join'}
            </Text>
            <Slider
              maximumValue={100}
              minimumTrackTintColor={theme.colors['GetFit Orange']}
              minimumValue={1}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
              thumbTintColor={theme.colors['GetFit Orange']}
            />
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-end' },
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
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    height: 40,
                    justifyContent: 'center',
                    width: 100,
                  },
                  dimensions.width
                )}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_13'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 17,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {null}
                </Text>
              </View>
            </View>
          </View>
          {/* Popular Categories */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 16, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Popular Category'}
            </Text>
            <FlashList
              contentContainerStyle={StyleSheet.applyWidth(
                { flex: 1, flexWrap: 'wrap', marginTop: 16 },
                dimensions.width
              )}
              data={Constants['PopularCategories']}
              estimatedItemSize={50}
              horizontal={true}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'wgyyjo60'}
              numColumns={1}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <>
                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: theme.colors['Custom Color_4'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 36,
                            justifyContent: 'center',
                            marginRight: 16,
                            marginTop: 16,
                            paddingLeft: 16,
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Custom #ffffff'],
                              fontFamily: 'Inter_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: theme.colors['GetFit Orange'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 36,
                            justifyContent: 'center',
                            marginRight: 16,
                            marginTop: 16,
                            paddingLeft: 16,
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['GetFit Orange'],
                              fontFamily: 'Inter_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData}
                        </Text>
                      </View>
                    </Touchable>
                  </>
                );
              }}
            />
          </View>
          {/* Date Upload */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 22, paddingLeft: 16, paddingRight: 16 },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_2'],
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {'Date Upload'}
            </Text>
            <FlashList
              contentContainerStyle={StyleSheet.applyWidth(
                { flex: 1, flexWrap: 'wrap', marginTop: 16 },
                dimensions.width
              )}
              data={Constants['DateUploadedArray']}
              estimatedItemSize={50}
              horizontal={true}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'AsL4Bv0m'}
              numColumns={1}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <>
                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: theme.colors['Custom Color_4'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 36,
                            justifyContent: 'center',
                            marginRight: 16,
                            marginTop: 16,
                            paddingLeft: 16,
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Custom #ffffff'],
                              fontFamily: 'Inter_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderBottomWidth: 1,
                            borderColor: theme.colors['GetFit Orange'],
                            borderLeftWidth: 1,
                            borderRadius: 24,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            height: 36,
                            justifyContent: 'center',
                            marginRight: 16,
                            marginTop: 16,
                            paddingLeft: 16,
                            paddingRight: 16,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['GetFit Orange'],
                              fontFamily: 'Inter_400Regular',
                            },
                            dimensions.width
                          )}
                        >
                          {flashListData}
                        </Text>
                      </View>
                    </Touchable>
                  </>
                );
              }}
            />
          </View>
          {/* Apply Filter */}
          <Button
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['GetFit Orange'],
                borderRadius: 24,
                fontFamily: 'System',
                fontWeight: '700',
                height: 48,
                marginLeft: 16,
                marginRight: 16,
                marginTop: 32,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Apply Filter'}
          />
          {/* Clear All */}
          <View
            style={StyleSheet.applyWidth(
              {
                height: 48,
                justifyContent: 'center',
                marginLeft: 16,
                marginRight: 16,
                marginTop: 16,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_8'],
                    fontFamily: 'Inter_500Medium',
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Clear All'}
              </Text>
            </Touchable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default withTheme(FilterModalBlock);
