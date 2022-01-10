import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Commodities from "../screens/Commodities";

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();

function RootNavigator() {
    return (
        <Drawer.Navigator initialRouteName="home">
            <Drawer.Screen
                name="home"
                options={{ title: "Home" }}
                component={Home}
            />
            <Drawer.Screen
                name="commodities"
                options={{ title: "Cotización períodos" }}
                component={Commodities}
            />
        </Drawer.Navigator>
    );
}
