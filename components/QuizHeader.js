import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { white, lightPurple } from '../utils/colors'
import { vietnamMedium } from '../utils/fonts'

const QuizHeader = (props) => {

  return (
    <View style={styles.headerPanel}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Quiz Time!</Text>
        <Text style={styles.countText}>
          { props.currentQuestionIndex + 1 } / { props.totalQuestions }
        </Text>
      </View>
      <View style={styles.imageContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerPanel: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 130,
    borderRadius: 10,
    backgroundColor: lightPurple
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  headerText: {
    color: white,
    fontFamily: vietnamMedium,
    fontSize: 32
  },
  countText: {
    marginTop: 24,
    fontSize: 26,
    fontFamily: vietnamMedium,
    color: white
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end'
  }
})

export default QuizHeader