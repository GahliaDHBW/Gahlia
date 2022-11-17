import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import Weekdays from "../components/Weekdays";
import Mealitem from "../components/Mealitem";
import RouteButton from "../components/RouteButton";


const MensaErzbergerstraße = () => {
  return (
    <>
      <View style={styles.Top}>
        <Weekdays />
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Mealitem
            name="Veganische Lasagne"
            price="5,00€"
            uri={require("../assets/vegan.png")}
          />
          <Mealitem
            name="Schweineschnitzel"
            price="4,00€"
            uri={require("../assets/schwein.png")}
          />
          <Mealitem
            name="Hähnchen-Curry"
            price="4,00€"
            uri={require("../assets/chicken.png")}
          />
          <Mealitem
            name="Salat"
            price="2,00€"
            uri={require("../assets/vegetarian.png")}
          />
        </ScrollView>
      </SafeAreaView>
      <View style={styles.Bottom}>
        < RouteButton/>
      </View>
    </>
  );
};

export default MensaErzbergerstraße;

const styles = StyleSheet.create({
  Top: {
    flex: 0.1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  container: {
    flex: 0.8,
  },
  Bottom: {
    flex: 0.1,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems:"flex-end",
    paddingRight:30,
    paddingBottom:20,
  },
});
