import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Setting } from "../screens/home/Setting";
import { COLORS } from "../constants/colors";
import { Notifications } from "../screens/home/Notifications";
import { Analytics } from "../screens/home/Analytics";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { HomeStack } from "./AppStack";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          backgroundColor: COLORS.WHITE,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.PRIMARY_GREEN,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={26} color={color} />
          ),
        }}
        name="HomeTab"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={26} color={color} />
          ),
        }}
        name="Notification"
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="analytics" size={26} color={color} />
          ),
        }}
        name="Analytics"
        component={Analytics}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={26} color={color} />
          ),
        }}
        name="Settings"
        component={Setting}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
