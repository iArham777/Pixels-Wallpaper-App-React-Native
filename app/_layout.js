import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Layout = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <BottomSheetModalProvider>
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}}/>
            <Stack.Screen name='home' options={{headerShown: false}}/>
            <Stack.Screen name='image' options={{headerShown: false, presentation:"transparentModal", animation:"fade"}}/>
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default Layout

const styles = StyleSheet.create({})