import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { white, lightPurple } from '../utils/colors';
import { vietnamMedium, vietnamRegular } from '../utils/fonts';

const HomeHeader = () => {

  return (
    <View style={styles.headerPanel}>

      <Image source={require('../images/flashcards.png')} />

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Mobile</Text>
        <Text style={styles.headerText}>Flashcards</Text>
        <Text style={styles.headerTagline}>The fun way to prepare for tests</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 130,
    borderRadius: 10,
    backgroundColor: lightPurple
  },
  headerTextContainer: {
    flexDirection: 'column'
  },
  headerText: {
    textAlign: 'center',
    color: white,
    fontFamily: vietnamMedium,
    fontSize: 32
  },
  headerTagline: {
    textAlign: 'center',
    marginTop: 10,
    color: white,
    fontFamily: vietnamRegular,
    fontSize: 13
  }
})

export default HomeHeader