import React from 'react'
import { StyleSheet, View } from 'react-native'
import NoteList from '../components/NoteList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NoteList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAD8D0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25
  }
})
