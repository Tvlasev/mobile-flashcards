import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { purple, bgBlueLight } from '../utils/colors'
import { robotoMedium, robotoRegular } from '../utils/fonts'

const HomeHeader = () => {

  return (
    <View style={styles.headerPanel}>
      <Image source={require('../images/question-cards.png')} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Mobile</Text>
        <Text style={styles.headerText}>Flashcards</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    height: 130,
    borderRadius: 10,
    backgroundColor: bgBlueLight
  },
  headerTextContainer: {
    flexDirection: 'column',
    padding: 20
  },
  headerText: {
    textAlign: 'center',
    color: purple,
    fontFamily: robotoMedium,
    fontSize: 28
  },
  headerTagline: {
    textAlign: 'center',
    marginTop: 10,
    color: purple,
    fontFamily: robotoRegular,
    fontSize: 13
  }
})

export default HomeHeader