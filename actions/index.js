import * as types from '../types/types'

export function receiveDecks(decks) {
  return {
    type: types.RECEIVE_DECKS,
    decks
  };
}

export function addDeck(deck) {
  return {
    type: types.ADD_DECK,
    deck
  };
}

export function addCard(questionDetails) {
  return {
    type: types.ADD_CARD,
    questionDetails
  };
}