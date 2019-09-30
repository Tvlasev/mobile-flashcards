import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'MobileFlashcards:Decks';

export async function fetchAllDecks() {

  let decksJson = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

  if (decksJson !== null) {
    return JSON.parse(decksJson);
  } else {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  }
}

const dummyData = {
  SpanishWords: {
    id: 'SpanishWords',
    title: 'Spanish Words',
    timestamp: 1569880304488,
    created: '2019-10-01',
    questions: [
      {
        question: `what is a cat's translation into spanish?`,
        answer: 'Gato'
      },
      {
        question: `what is a dog's translation into spanish?`,
        answer: 'Perro'
      },
      {
        question: `what is a cow's translation into spanish?`,
        answer: 'Vaca'
      },
      {
        question: `what is a lion's translation into spanish?`,
        answer: 'león'
      }
    ]
  },
  React: {
    id: 'React',
    title: 'React',
    timestamp: 1563710400,
    created: '2019-07-21',
    questions: [
      {
        question: 'What is JSX?',
        answer: 'JSX stands for JavaScript XML. JSX allows us to write HTML in React.'
      },
      {
        question: 'What is a higher order component?',
        answer: 'A higher-order component is a function that takes a component and returns a new component.'
      }
    ]
  }
};

