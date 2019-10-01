import * as types from '../types/types'

function decks(state = {}, action) {
  switch (action.type) {
    case types.RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case types.ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      }
    case types.ADD_CARD:
      return {
        ...state,
        [action.questionDetails.deckId]: {
          ...state[action.questionDetails.deckId],
          questions: state[action.questionDetails.deckId].questions.concat({
            question: action.questionDetails.question,
            answer: action.questionDetails.answer
          })
        }
      }
    default:
      return state
  }
}

export default decks
