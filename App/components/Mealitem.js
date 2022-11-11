import { StyleSheet, View, Text } from "react-native";
import { Image } from "@rneui/themed";
import React, { useState, useEffect } from "react";

const Mealitem = (props) => {
  
  return (
    <View style={styles.Mealitem}>
      <View style={styles.Top}>
        <Text>{props.name}</Text>
      </View>
      <View style={styles.Center}>
        <Image
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
          source={props.uri}
        />
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require("../assets/info.png")}
          onPress={() => console.log(props.uri)}
        />
      </View>
      <View style={styles.Bottom}>
        <Text>{props.price}</Text>
      </View>
    </View>
  );
};

export default Mealitem;

const styles = StyleSheet.create({
  Mealitem: {
    backgroundColor: "#D9D9F0",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    margin: 20,
    borderRadius: 20,
  },
  Top: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  Center: {
    height: 40,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  infoButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    alignSelf: "center",
  },
  Bottom: {
    height: 40,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 50,
    alignSelf: "stretch",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
