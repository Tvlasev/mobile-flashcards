import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image } from 'react-native'
import { purple, bgBlueLight } from '../utils/colors'
import { robotoMedium } from '../utils/fonts'

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
        <Image source={require('../images/question-cards.png')} />
      </View>
    </View>
  )
}

QuizHeader.propTypes = {
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired
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
    backgroundColor: bgBlueLight
  },
  headerTextContainer: {
    flex: 1,
    flexDirection: 'column' 
  },
  headerText: {
    color: purple,
    fontFamily: robotoMedium,
    fontSize: 32
  },
  countText: {
    marginTop: 24,
    fontSize: 26,
    fontFamily: robotoMedium,
    color: purple
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end'
  }
})

export default QuizHeader