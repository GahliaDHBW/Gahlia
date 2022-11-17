import * as React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Landing from "./Landing";
import CaféteriaMoltkestraße from "../screens/CaféteriaMoltkestraße";
import MensaErzbergerstraße from "../screens/MensaErzbergerstraße";
import MensaamAdnauerring from "../screens/MensaamAdnauerring";
import MensaMoltke from "../screens/MensaMoltke";
import MensaSchlossGottesaue from "../screens/MensaSchlossGottesaue";


const Drawer = createDrawerNavigator();
const sidemenu = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#D9D9D9",
            width: 320,
          },
          headerStyle: {
            backgroundColor: "#D9D9D9",
          },
          headerTintColor: "black",
          drawerInactiveTintColor: "white",
          drawerActiveTintColor:"white",
          drawerItemStyle:{backgroundColor:"#468961"},
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Landing}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 91,
                  height: 32,
                  position: "absolute",
                  left: 240,
                }}
                source={require("../assets/App-in-titel.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Mensa Erzbergerstraße"
          component={MensaErzbergerstraße}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 91,
                  height: 32,
                  position: "absolute",
                  left: 240,
                }}
                source={require("../assets/App-in-titel.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Mensa am Adnauerring"
          component={MensaamAdnauerring}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 91,
                  height: 32,
                  position: "absolute",
                  left: 240,
                }}
                source={require("../assets/App-in-titel.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Caféteria Moltkestraße 30"
          component={CaféteriaMoltkestraße}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 91,
                  height: 32,
                  position: "absolute",
                  left: 240,
                }}
                source={require("../assets/App-in-titel.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Mensa Moltke"
          component={MensaMoltke}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 91,
                  height: 32,
                  position: "absolute",
                  left: 240,
                }}
                source={require("../assets/App-in-titel.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Mensa Schloss Gottesaue"
          component={MensaSchlossGottesaue}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 91,
                  height: 32,
                  position: "absolute",
                  left: 240,
                }}
                source={require("../assets/App-in-titel.png")}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default sidemenu;
