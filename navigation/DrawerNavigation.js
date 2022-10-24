import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawer from "../components/CustomDrawer";
import AppStack from "./AppStack";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props=><CustomDrawer{...props}/>}>
      <Drawer.Screen
        name="AppStack"
        component={AppStack}
        options={() => ({ title: "Whips" })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
