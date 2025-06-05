import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from './ImageCard';
import {wp,hp} from '../helpers/common'


const ImageGrid = ({images, router}) => {
  return (
    <View style={styles.container}>
      <MasonryFlashList
      data={images}
      numColumns={2}
      initialNumToRender = {1000}
      contentContainerStyle={styles.listContainerStyle}
      renderItem={({ item, index }) => <ImageCard router={router} item={item} index={index}/>}
      estimatedItemSize={200}
    />
    </View>
  )
}

export default ImageGrid

const styles = StyleSheet.create({
    container:{
        minHeight:3,
        width:wp(100),
    },
    listContainerStyle:{
        paddingHorizontal:wp(4),
    },
})