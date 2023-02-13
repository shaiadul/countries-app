import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({countries}) {
  return (
    <View style={styles.countryContainer}>
      <Image style={styles.img} source={{uri: countries.flags.png}} />
      <Text  style={styles.title}>{countries.name.common}</Text>
      <Text  style={styles.text}>Capital Division: {countries.capital}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 5,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        alignSelf: 'center',
    },
    countryContainer: {
        backgroundColor: 'teal',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'lightblue',
        textAlign: 'center',
        padding: 5,
    },

    


  });