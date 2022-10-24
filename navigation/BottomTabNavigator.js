import React from "react";
import Free from "../Screens/Free";
import Premium from "../Screens/Premium";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#1560bd" }}
    >
      <Tab.Screen
        name="Free"
        component={Free}
        options={() => ({
          tabBarLabelStyle: { textTransform: "uppercase" },
          tabBarIcon: ({ focused }) => (
            <AntDesign
              size={22}
              color={focused ? "#1560bd" : "grey"}
              name="home"
            />
          ),
        })}
      />
      <Tab.Screen name="Premium" component={Premium} options={() => ({
          tabBarLabelStyle: { textTransform: "uppercase" },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              size={22}
              color={focused ? "#1560bd" : "grey"}
              name="crown"
            />
          ),
        })} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
