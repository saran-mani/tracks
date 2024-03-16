import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Signup"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signin"
      component={SigninScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const TrackListStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TrackList"
      component={TrackListScreen}
      options={{ headerTitle: "Tracks" }}
    />
    <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

const MainTab = () => (
  <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#3F72AF" }}>
    <Tab.Screen
      name="TrackListStack"
      component={TrackListStack}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="th-list" size={24} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="TrackCreate"
      component={TrackCreateScreen}
      options={{
        title: "Add Track",
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="plus" size={24} color={color} />;
        },
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          return <FontAwesome name="gear" size={24} color={color} />;
        },
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    >
      <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="ResolveAuth"
                component={ResolveAuthScreen}
              ></Stack.Screen>
              <Stack.Screen name="loginFlow" component={AuthStack} />
              <Stack.Screen name="mainFlow" component={MainTab} />
            </Stack.Navigator>
          </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </NavigationContainer>
  );
};

export default App;
