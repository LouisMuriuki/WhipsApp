import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useCallback, useContext } from "react";
import Card2 from "../components/Card2";
import Popup from '../components/Popup';
import { PopupContext } from '../context/PopupContext';

const data = [
  {
    name: "ThunderStrike",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "GetCracking",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "WhipMaster",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "LoudSound",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "NoMercy",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "Whoop",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "DestroyHer",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
  {
    name: "whip6",
    image: require("../assets/images/icon1.png"),
    acquired: false,
  },
];

const Premium = () => {
  const{modalVisible}=useContext(PopupContext)
  const renderItem = ({ item: whip }) => {
    console.log(whip);
    return (
        <Card2 image={whip.image} acquired={whip.acquired} name={whip.name} />
    );
  };

  const keyExtractor = useCallback((item, i) => i, []);
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Text style={styles.toptext}> Premium Whips</Text>
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
     {modalVisible && <Popup visible={modalVisible}/>}
    </View>
  )
}

export default Premium

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