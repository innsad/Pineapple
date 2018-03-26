import React, { Component } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Note from './Note'

const generateList = size => {
  const list = []
  for (let i = 0; i < size; i += 1) {
    list.push({ key: `${i}` })
  }
  return list
}

class NoteList extends Component {
  renderItem = () => <Note />

  render() {
    return <FlatList data={generateList(100)} renderItem={this.renderItem} style={styles.list} />
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%'
  }
})

export default NoteList
