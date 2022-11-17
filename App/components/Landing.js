import { ThemeProvider } from "nachos-ui";
import { StyleSheet, View } from 'react-native'
import {Card } from 'nachos-ui'
import React from 'react'

const Landing = () => {
  return (
    <ThemeProvider>
     <View style={styles.landingImg}>
     <Card image='https://idw-online.de/en/institutionlogo19020'/>
    </View>
  </ThemeProvider>
  )
}

export default Landing

const styles = StyleSheet.create({
  landingImg:{
    flex:1,
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:"white",
  },
})