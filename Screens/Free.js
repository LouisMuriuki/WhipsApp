import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useCallback } from "react";
import Card from "../components/Card";

const data = [
  {
    name: "whip1",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip1.mp3"),
  },
  {
    name: "whip2",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip2.mp3"),
  },
  {
    name: "whip3",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip1.mp3"),
  },
  {
    name: "whip4",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip2.mp3"),
  },
  {
    name: "whip5",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip1.mp3"),
  },
  {
    name: "whip6",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip2.mp3"),
  },
  {
    name: "whip5",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip1.mp3"),
  },
  {
    name: "whip6",
    image: require("../assets/images/icon1.png"),
    soundpath: require("../assets/sounds/whip2.mp3"),
  },
];

const Free = () => {
  const renderItem = ({ item: whip }) => {
    console.log(whip);
    return (
        <Card image={whip.image} soundpath={whip.soundpath} name={whip.name} />
    );
  };

  const keyExtractor = useCallback((item, i) => i, []);
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.toptext}> My Whips</Text>
        <View style={{flexDirection:"column"}}>
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{
              justifyContent: "space-between",
              paddingBottom: 80,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Free;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
  },
  top: {},
  toptext: {
    fontSize:18,
    margin:10
  },
});
