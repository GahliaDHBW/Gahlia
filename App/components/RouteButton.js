import React from 'react'
import { StyleSheet, View } from 'react-native'
import {Image} from "@rneui/themed"

const RouteButton = () => {
  return (
    <View>
  <Image
          style={{
            width: 60,
            height:60,
          }}
          source={require("../assets/Placemarker.png")}
          onPress={() => console.log(props.uri)}
        />
    </View>
  )
}

export default RouteButton

const styles = StyleSheet.create({})