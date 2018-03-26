import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Note = () => (
  <View style={styles.card}>
    <View style={styles.headerContainer}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        НазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание
      </Text>
      <Text style={styles.date}>24.03.18</Text>
    </View>
    <Text numberOfLines={1} style={styles.description}>
      ОписаниесаниеОписаниеОписаниеОписаниеОписаниеОписание
    </Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    marginHorizontal: 18,
    paddingVertical: 8,
    borderBottomColor: '#f7e4dd',
    borderBottomWidth: 1
  },
  title: {
    width: '80%',
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    color: '#847f87',
    fontSize: 14,
    textAlignVertical: 'center',
    alignSelf: 'center'
  },
  description: {
    alignSelf: 'flex-start',
    color: '#847f87',
    fontSize: 16
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 8
  }
})

export default Note
