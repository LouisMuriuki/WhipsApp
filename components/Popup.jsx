import { StyleSheet, Text, View, Modal, Alert, Pressable, Button } from "react-native";
import React, { useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import { MaterialIcons } from "@expo/vector-icons";
const Popup = () => {
  const { modalVisible, setModalVisible } = useContext(PopupContext);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => setModalVisible(false)}>
              <View
                style={styles.cancel}
                onTouchEnd={() => setModalVisible(false)}
              >
                <MaterialIcons name="cancel" size={24} color="red" />
              </View>
            </Pressable>
            <View>
              <Text style={{alignSelf:"center",fontSize:20,fontWeight:"700"}}>Unlock Kifee Pro Whips </Text>
              <Text style={{marginVertical:20}}>
                Get your friends in check by premium whips sounds used by Kifee
                himself.
              </Text>
              <Button  title="Go Pro"/>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cancel: {
    position: "absolute",
    top: "30%",
    right: "50%",
    marginTop: -30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
