import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import globalStyles from '../utils/globalStyles'
import { vietnamMedium } from '../utils/fonts'
import { textColor } from '../utils/colors'
import NavigationService from '../navigation/navigationService'

const QuizResults = (props) => {

  const { totalQuestions, questionsAnsweredCorrectly, onStartQuizAgain } = props;
  const percentage = Math.round((100 / totalQuestions) * questionsAnsweredCorrectly);

  return (
    <View>
      <Text style={globalStyles.title}>Quiz Complete</Text>
      <Text style={globalStyles.largeText}>
        You got { questionsAnsweredCorrectly } out of { totalQuestions } correct ({ percentage }%)
      </Text>

      <TouchableOpacity
        onPress={onStartQuizAgain}
        style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnSecondaryText}>Start Quiz Again</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={NavigationService.goBack}
        style={globalStyles.btnSecondary}>
        <Text style={globalStyles.btnSecondaryText}>Return To Deck</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  largeText: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 20,
    fontFamily: vietnamMedium,
    color: textColor
  }
})

export default QuizResults