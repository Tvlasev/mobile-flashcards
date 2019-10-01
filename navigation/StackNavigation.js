import { createStackNavigator, createAppContainer } from 'react-navigation'

import TabNavigation from './TabNavigation'
import Decks from '../containers/Decks'
import Deck from '../containers/Deck'
import AddDeck from '../containers/AddDeck'
import AddCard from '../containers/AddCard'
import Quiz from '../containers/Quiz'

const StackNavigator = createStackNavigator({
  Primary: {
    screen: TabNavigation,
    navigationOptions: {
      header: null
    }
  },
  Decks: {
    screen: Decks
  },
  Deck: {
    screen: Deck
  },
  AddDeck: {
    screen: AddDeck
  },
  AddCard: {
    screen: AddCard
  },
  Quiz: {
    screen: Quiz
  }
})

const StackNavigation = createAppContainer(StackNavigator)

export default StackNavigation


