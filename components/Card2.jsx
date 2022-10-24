import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Modal,
  Pressable,
  Button,
} from "react-native";
import React, { useContext, useState } from "react";
import { PopupContext } from "../context/PopupContext";

const Card2 = ({ image, name, acquired }) => {
  const [show, setShow] = useState(false);
  const { setModalVisible } = useContext(PopupContext);

  const validate = (acquired) => {
    console.log("irun");
    acquired ? setShow((prev) => !prev) : setModalVisible(true);
  };
  return (
    <Pressable onPress={() => validate(acquired)}>
      <View style={styles.container}>
        <Image
          style={{ width: "100%", height: "80%" }}
          resizeMode={"cover"}
          source={image.toString()}
        />
        <Text style={styles.whipname}>{name}</Text>
        {show && (
          <View style={styles.download}>
            <Text>Download whip Sound</Text>
            <Button title="download" />
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Card2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
    width: Dimensions.get("window").width / 2 - 30,
    height: Dimensions.get("window").width / 2 - 30,
    padding: 5,
    marginHorizontal: 14,
    marginBottom: 20,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 7,
  },
  whipname: {
    alignSelf: "center",
  },
  download: {
    position: "absolute",
    zIndex: 1000,
    width: Dimensions.get("window").width / 2 - 30,
    height: Dimensions.get("window").width / 2 - 30,
    opacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
});
