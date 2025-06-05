import { StatusBar, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {wp,hp} from '../helpers/common'
import {LinearGradient} from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated';
import {theme} from '../constants/theme'
import {useRouter} from 'expo-router'

const WelcomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Image source={require('../assets/images/welcome1.png')} style={styles.bgImage} resizeMode='cover'/>
      <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
        <LinearGradient colors={['rgba(255,255,255,0)' , 'rgba(255,255,255,0.5)','white','white']} style={styles.gradient} start={{x:0.5, y:0}} end={{x:0.5, y:0.8}}/>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pixels</Text>
          <Text style={styles.punchLine}>Every Pixels Tells a Story</Text>
          <View>
            <TouchableOpacity onPress={()=>router.push('home')} style={styles.startButton}>
              <Text style={styles.startText}>Start Explore</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    bgImage:{
      width: wp(100),
      height: hp(100),
      position:'absolute',
    },
    gradient:{
      width:wp(100),
      height:hp(65),
      bottom:0,
      position:'absolute'
    },
    contentContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'flex-end',
      gap:14
    },
    title:{
      fontSize:hp(7),
      color:theme.colors.neutral(0.9),
      fontWeight:theme.fontWeights.bold
    },
    punchLine:{
      fontSize:hp(2),
      letterSpacing:1,
      marginBottom:10,
      fontWeight:theme.fontWeights.medium,
    },
    startButton:{
      marginBottom:50,
      backgroundColor: theme.colors.neutral(0.9),
      padding:15,
      paddingHorizontal:90,
      borderRadius:theme.radius.xl,
      borderCurve:'continuous'
    },
    startText:{
      color:theme.colors.white,
      fontSize: hp(3),
      fontWeight: theme.fontWeights.medium,
      letterSpacing:1
    },
})