import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.Headers} fontSize="6xl">Countries : {countries.length} </Text>
      <ScrollView>
        {
            countries.map((country) => (
                <Country key={country.cca3} countries={country}/>
            ))
        }
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'black',
        padding: 5,  
    },
    Headers: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        padding: 20,
        backgroundColor: 'cyan',
        borderRadius: 15,
    },
  });