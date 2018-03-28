import React, { Component } from 'react'
import { NavigatorIOS } from 'react-native'
import Main from './app/screens/Main'
import Edit from './app/screens/Edit'

class App extends Component {
  handleRef = ref => {
    this.navigator = ref
  }

  goToEdit = () => {
    this.navigator.push({
      component: Edit,
      title: 'Add new note'
    })
  }

  render() {
    return (
      <NavigatorIOS
        ref={this.handleRef}
        initialRoute={{
          component: Main,
          title: 'Pineapple',
          rightButtonTitle: 'Add',
          onRightButtonPress: this.goToEdit
        }}
        style={{ flex: 1 }}
      />
    )
  }
}

export default App
