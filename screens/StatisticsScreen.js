import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const StatisticsScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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
      <ScrollView
        bounces={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20 },
          dimensions.width
        )}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 30 },
            dimensions.width
          )}
        >
          <View>
            <CircleImage size={80} source={Images.UserImage} />
            <CircleImage
              size={80}
              source={{ uri: `${Constants['ProfilePicture']}` }}
              style={StyleSheet.applyWidth(
                { position: 'absolute' },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { position: 'absolute', right: 5, top: 5 },
                dimensions.width
              )}
            >
              <Circle bgColor={theme.colors['App Green']} size={15} />
            </View>
          </View>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {'Arvind Limba'}
          </Text>

          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                marginTop: 6,
                opacity: 0.5,
              },
              dimensions.width
            )}
          >
            {'A Sports Lover'}
          </Text>
        </View>
        {/* Stats */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color_9'],
                  borderRadius: 8,
                  height: 50,
                  justifyContent: 'center',
                  width: 50,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.BxVideoRecording1}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 4,
                  marginTop: 5,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 11,
                    marginLeft: 6,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Workout'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 21,
                    marginLeft: 6,
                    marginTop: 4,
                  },
                  dimensions.width
                )}
              >
                {'153'}
              </Text>
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['GetFit Orange'],
                  borderRadius: 8,
                  height: 50,
                  justifyContent: 'center',
                  width: 50,
                },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={Images.BxsHot1}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: 4,
                  marginTop: 5,
                },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_400Regular',
                    fontSize: 11,
                    marginLeft: 6,
                    opacity: 0.5,
                  },
                  dimensions.width
                )}
              >
                {'Calories'}
              </Text>

              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color_2'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 21,
                    marginLeft: 6,
                    marginTop: 4,
                  },
                  dimensions.width
                )}
              >
                {'320'}
              </Text>
            </View>
          </View>
        </View>
        {/* Report */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
            },
            dimensions.width
          )}
        >
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom Color_2'],
                fontFamily: 'Inter_500Medium',
                fontSize: 18,
                marginTop: 16,
                opacity: 1,
              },
              dimensions.width
            )}
          >
            {"Today's Report"}
          </Text>

          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              },
              dimensions.width
            )}
          >
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_10'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.BxsHot1}
                    style={StyleSheet.applyWidth(
                      { height: 16, width: 16 },
                      dimensions.width
                    )}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Calories Burned'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'245'}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Kcal'}
                  </Text>
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_12'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.BxsBowlRice1}
                    style={StyleSheet.applyWidth(
                      { height: 16, width: 16 },
                      dimensions.width
                    )}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Carbohydrate'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'123'}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Gram'}
                  </Text>
                </Text>
              </View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { flex: 1, marginLeft: 20 },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_11'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom Color_2']}
                    name={'AntDesign/heart'}
                    size={15}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Heart Rate'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'78'}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Bpm'}
                  </Text>
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    backgroundColor: theme.colors['Custom Color_13'],
                    borderRadius: 8,
                    flex: 1,
                    height: 111,
                    justifyContent: 'center',
                    marginTop: 16,
                    paddingBottom: 12,
                    paddingLeft: 20,
                    paddingTop: 12,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { opacity: 0.38 },
                    dimensions.width
                  )}
                >
                  <Circle bgColor={theme.colors['Custom Color_2']} size={30} />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      height: 30,
                      justifyContent: 'center',
                      left: 20,
                      position: 'absolute',
                      top: 12,
                      width: 30,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.BxDumbbell}
                    style={StyleSheet.applyWidth(
                      { height: 16, position: 'absolute', width: 16 },
                      dimensions.width
                    )}
                  />
                </View>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_500Medium',
                      fontSize: 14,
                      marginTop: 10,
                      opacity: 1,
                    },
                    dimensions.width
                  )}
                >
                  {'Workout'}
                </Text>

                <Text
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color_2'],
                      fontFamily: 'Inter_600SemiBold',
                      fontSize: 22,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'53'}
                  <Text
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom Color_2'],
                        fontFamily: 'Inter_400Regular',
                        fontSize: 14,
                        marginLeft: 6,
                        marginTop: 4,
                      },
                      dimensions.width
                    )}
                  >
                    {'Video'}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(StatisticsScreen);
