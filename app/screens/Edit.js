import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'Нажмите для ввода' }
  }

  onChangeText = text => this.setState({ text })

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1 }}
          onChangeText={this.onChangeText}
          value={this.state.text}
        />
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

export default Edit
