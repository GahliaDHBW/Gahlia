import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ButtonGroup } from '@rneui/themed'

const Weekdays = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
    <View style={styles.Main}>
    <ButtonGroup
      buttons={['Mo', 'Di', 'Mi','Do','Fr']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
        //console.log(value);
      }}
      containerStyle={{backgroundColor:"white", height:50 }}
      selectedButtonStyle={{backgroundColor:"#468961", borderBottomRightRadius:30}}
    />
    </View>
  )
}

export default Weekdays

const styles = StyleSheet.create({
})