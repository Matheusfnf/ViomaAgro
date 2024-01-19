import React from "react";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "./components/HomeScreen";
import ProductsScreen from "./components/ProductsScreen";
import ProfileScreen from "./components/ProfileScreen";
import { useTheme } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const getTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  if (routeName === 'Profile') {
    return false; // Ocultar tabBar quando estiver na tela Profile
  }

  return true;
};

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor={theme.colors.primary}
          inactiveColor={theme.colors.text}
          shifting={true}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductsScreen}
            options={{
              tabBarLabel: 'Products',
              tabBarIcon: ({ color }) => (
                <Ionicons name="list" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Ionicons name="person" size={26} color={color} />
              ),
              tabBarVisible: getTabBarVisible,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
