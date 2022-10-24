import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { Audio } from "expo-av";
const Card = ({ image, name, soundpath }) => {
  console.log(image.toString());
  const [sound, setSound] = React.useState();

  async function playSound(soundpath) {
    console.log(soundpath);
    const { sound } = await Audio.Sound.createAsync(soundpath);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <Pressable onPress={() => playSound(soundpath)}>
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: "80%" }}
          resizeMode={"cover"}
          source={image.toString()}
        />
        <Text style={styles.whipname}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 5,
    width: Dimensions.get("window").width / 2 - 30,
    height: Dimensions.get("window").width / 2 - 30,
    padding: 5,
    marginHorizontal: 14,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 7,
    flexDirection: "column",
  },
  whipname: {
    alignSelf: "center",
  },
  lottie: {
    position: "absolute",
    zIndex: 1000,
    width: Dimensions.get("window").width / 2 - 30,
    height: Dimensions.get("window").width / 2 - 30,
    opacity: 0.9,
    borderRadius: 5,
  },
});
