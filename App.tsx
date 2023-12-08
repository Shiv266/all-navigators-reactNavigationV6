import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Notifications } from "./src/screens/home/Notifications";
import CustomDrawer from "./src/components/CustomDrawer";
import { COLORS } from "./src/constants/colors";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.PRIMARY_GREEN,
          },
          headerTitleStyle: {
            display: "none",
          },
          headerTintColor: COLORS.WHITE,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Notifications" component={Notifications} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
