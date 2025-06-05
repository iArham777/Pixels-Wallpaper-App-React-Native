import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { getImageSize } from '../helpers/common';
import { theme } from '../constants/theme'
import {wp,hp} from '../helpers/common'

const ImageCard = ({item, index, columns, router}) => {

  const isLastInRow = ()=>{
    return (index+1)%columns ===0;
  }

  const getImageHeight = ()=>{
     let {imageHeight: height, imageWidth: width} = item;
     return {height: getImageSize(height, width)};
  }
  return (
    <TouchableOpacity onPress={()=>router.push({pathname:"image", params: {...item}})} style={[styles.imageWrapper,!isLastInRow() && styles.spacing]}>
      <Image
        style={[styles.image, getImageHeight()]}
        source={item?.webformatURL}
        transition={100}
    />
    </TouchableOpacity>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    image:{
        height:300,
        width:'100%',
    },
    imageWrapper:{
      backgroundColor: theme.colors.grayBG,
      borderRadius: theme.radius.xl,
      borderCurve:'continuous',
      overflow:'hidden',
      marginBlock:wp(2),
    },
    spacing:{
      marginRight:wp(2),
    },
})