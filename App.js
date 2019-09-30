import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { receiveDecks } from './actions/index'
import { fetchAllDecks } from './utils/API'
import { setLocalNotification } from './utils/notificationHelper'
import NavigationService from './navigation/navigationService'
import * as Font from 'expo-font'
import { vietnamMedium, vietnamRegular } from './utils/fonts'

store = createStore(reducer, middleware)

export default class App extends Component {

  state = {
    prerequisitesLoaded: false
  };
  
  async componentDidMount() {

    await setLocalNotification()

    const loadDecksPromise = fetchAllDecks()

    const loadFontsPromise = Font.loadAsync({
      [vietnamRegular]: require('./assets/BeVietnam-Regular.ttf'),
      [vietnamMedium]: require('./assets/BeVietnam-Medium.ttf')
    });

    Promise.all([loadDecksPromise, loadFontsPromise])
      .then(values => {
        const decks = values[0];
        this.store.dispatch(receiveDecks(decks))
          .catch(e => console.log(e))

        this.setState({
          prerequisitesLoaded: true
        })
      })
  }

  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <View style={styles.appContainer}>
          {this.state.prerequisitesLoaded && (
            <StackNavigation ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }} />
          )}
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

