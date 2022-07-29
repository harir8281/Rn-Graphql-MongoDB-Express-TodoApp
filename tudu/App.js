import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useQuery} from "@apollo/react-hooks"
import { LOAD_TODOS } from './GraphQL/Queries'

const App = () => {
  const{data,loading,error}=useQuery(LOAD_TODOS)

  console.log(error)
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})