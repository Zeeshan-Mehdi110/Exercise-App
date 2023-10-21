import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AboutYourselfScreen from './screens/AboutYourselfScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import CreateAccountFormScreen from './screens/CreateAccountFormScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import CreateaNewPasswordScreen from './screens/CreateaNewPasswordScreen';
import EnterOTPScreen from './screens/EnterOTPScreen';
import FiltersScreen from './screens/FiltersScreen';
import ForgotPassword2Screen from './screens/ForgotPassword2Screen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HeightScreen from './screens/HeightScreen';
import HelpandSupportScreen from './screens/HelpandSupportScreen';
import HomeScreen from './screens/HomeScreen';
import LanguageSettingsScreen from './screens/LanguageSettingsScreen';
import LanguagesScreen from './screens/LanguagesScreen';
import LegalPoliciesScreen from './screens/LegalPoliciesScreen';
import LocationScreen from './screens/LocationScreen';
import LoginEmailScreen from './screens/LoginEmailScreen';
import LoginScreen from './screens/LoginScreen';
import MakeTodaysPlaneScreen from './screens/MakeTodaysPlaneScreen';
import MessageDetailsScreen from './screens/MessageDetailsScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import Onboarding21Screen from './screens/Onboarding21Screen';
import Onboarding22Screen from './screens/Onboarding22Screen';
import Onboarding23Screen from './screens/Onboarding23Screen';
import Onboarding3Screen from './screens/Onboarding3Screen';
import OnboardingEnterAppScreen from './screens/OnboardingEnterAppScreen';
import PlaneDetailsScreen from './screens/PlaneDetailsScreen';
import PlayWorkoutPlaylistScreen from './screens/PlayWorkoutPlaylistScreen';
import ProfileScreen from './screens/ProfileScreen';
import SecurityScreen from './screens/SecurityScreen';
import SelectLanguageScreen from './screens/SelectLanguageScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import TodaysPlaneAllScreen from './screens/TodaysPlaneAllScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import WorkoutDetailsScreen from './screens/WorkoutDetailsScreen';
import WorkoutListAllScreen from './screens/WorkoutListAllScreen';
import WorkoutScreen from './screens/WorkoutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors['Strong'],
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: theme.colors['GetFit Orange'],
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={{
          title: 'Workout',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/dumbbell"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StatisticsScreen"
        component={StatisticsScreen}
        options={{
          title: 'Statistics',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/analytics"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/user"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        initialRouteName="Onboarding21Screen"
        screenOptions={{
          headerMode: 'none',
        }}
      >
        <Stack.Screen
          name="LanguagesScreen"
          component={LanguagesScreen}
          options={{
            title: 'Languages',
          }}
        />
        <Stack.Screen
          name="OnboardingEnterAppScreen"
          component={OnboardingEnterAppScreen}
          options={{
            title: 'Onboarding Enter App',
          }}
        />
        <Stack.Screen
          name="NotificationSettingsScreen"
          component={NotificationSettingsScreen}
          options={{
            title: 'Notification Settings',
          }}
        />
        <Stack.Screen
          name="SecurityScreen"
          component={SecurityScreen}
          options={{
            title: 'Security',
          }}
        />
        <Stack.Screen
          name="SelectLanguageScreen"
          component={SelectLanguageScreen}
          options={{
            title: 'Select Language',
          }}
        />
        <Stack.Screen
          name="HeightScreen"
          component={HeightScreen}
          options={{
            title: 'Height',
          }}
        />
        <Stack.Screen
          name="Onboarding21Screen"
          component={Onboarding21Screen}
          options={{
            title: 'Onboarding 2.1',
          }}
        />
        <Stack.Screen
          name="AboutYourselfScreen"
          component={AboutYourselfScreen}
          options={{
            title: 'About Yourself',
          }}
        />
        <Stack.Screen
          name="HelpandSupportScreen"
          component={HelpandSupportScreen}
          options={{
            title: 'Help and Support',
          }}
        />
        <Stack.Screen
          name="UserInfoScreen"
          component={UserInfoScreen}
          options={{
            title: 'User Info',
          }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            title: 'Notifications',
          }}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{
            title: 'User Profile',
          }}
        />
        <Stack.Screen
          name="WorkoutDetailsScreen"
          component={WorkoutDetailsScreen}
          options={{
            title: 'Workout Details',
          }}
        />
        <Stack.Screen
          name="LanguageSettingsScreen"
          component={LanguageSettingsScreen}
          options={{
            title: 'Language Settings',
          }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{
            title: 'Message',
          }}
        />
        <Stack.Screen
          name="MessageDetailsScreen"
          component={MessageDetailsScreen}
          options={{
            title: 'Message Details',
          }}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{
            title: 'Location',
          }}
        />
        <Stack.Screen
          name="LegalPoliciesScreen"
          component={LegalPoliciesScreen}
          options={{
            title: 'Legal Policies',
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            title: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{
            title: 'Change Password',
          }}
        />
        <Stack.Screen
          name="Onboarding22Screen"
          component={Onboarding22Screen}
          options={{
            title: 'Onboarding 2.2',
          }}
        />
        <Stack.Screen
          name="Onboarding23Screen"
          component={Onboarding23Screen}
          options={{
            title: 'Onboarding 2.3',
          }}
        />
        <Stack.Screen
          name="Onboarding3Screen"
          component={Onboarding3Screen}
          options={{
            title: 'Onboarding 3',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{
            title: 'Create Account',
          }}
        />
        <Stack.Screen
          name="CreateAccountFormScreen"
          component={CreateAccountFormScreen}
          options={{
            title: 'Create Account Form',
          }}
        />
        <Stack.Screen
          name="ForgotPassword2Screen"
          component={ForgotPassword2Screen}
          options={{
            title: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="CreateaNewPasswordScreen"
          component={CreateaNewPasswordScreen}
          options={{
            title: 'Create a New Password',
          }}
        />
        <Stack.Screen
          name="EnterOTPScreen"
          component={EnterOTPScreen}
          options={{
            title: 'Enter OTP',
          }}
        />
        <Stack.Screen
          name="MakeTodaysPlaneScreen"
          component={MakeTodaysPlaneScreen}
          options={{
            title: 'Make Todays Plane',
          }}
        />
        <Stack.Screen
          name="PlaneDetailsScreen"
          component={PlaneDetailsScreen}
          options={{
            title: 'Plane Details',
          }}
        />
        <Stack.Screen
          name="LoginEmailScreen"
          component={LoginEmailScreen}
          options={{
            title: 'Login Email',
          }}
        />
        <Stack.Screen
          name="FiltersScreen"
          component={FiltersScreen}
          options={{
            title: 'filters',
          }}
        />
        <Stack.Screen
          name="PlayWorkoutPlaylistScreen"
          component={PlayWorkoutPlaylistScreen}
          options={{
            title: 'Play Workout Playlist',
          }}
        />
        <Stack.Screen
          name="TodaysPlaneAllScreen"
          component={TodaysPlaneAllScreen}
          options={{
            title: "Today's Plane All",
          }}
        />
        <Stack.Screen
          name="WorkoutListAllScreen"
          component={WorkoutListAllScreen}
          options={{
            title: 'Workout List All',
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
