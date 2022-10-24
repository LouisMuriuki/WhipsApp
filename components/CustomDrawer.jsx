import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
const CustomDrawer = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 70, marginBottom: 50 }}>
        <View
          style={{
            height: 150,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <Image
            source={require("../assets/icon/icon.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text>Whips</Text>
        </View>
      </View>
      <View style={styles.draweritem}>
        <MaterialIcons name="star-rate" size={28} color="green" />
        <Text style={styles.drawertext}>Rate Us</Text>
      </View>
      <View style={styles.draweritem}>
        <MaterialCommunityIcons name="shield-crown" size={28} color="green" />
        <Text style={styles.drawertext}>Get Pro</Text>
      </View>
      <View style={styles.draweritem}>
        <Ionicons name="document" size={28} color="green" />
        <Text style={styles.drawertext}>Privacy Policy</Text>
      </View>
      <View style={styles.draweritem}>
        <MaterialIcons name="privacy-tip" size={28} color="green" />
        <Text style={styles.drawertext}>Disclaimer</Text>
      </View>
      <View style={styles.draweritem}>
        <Entypo name="share" size={28} color="green" />
        <Text style={styles.drawertext}>Share with Friends</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  draweritem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingLeft:20
  },
  drawertext: {
    fontSize: 20,
    fontWeight: "400",
    paddingLeft:20,
    fontStyle:"bold"
  },
});
