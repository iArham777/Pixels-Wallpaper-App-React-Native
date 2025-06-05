import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';
import { useMemo } from 'react'
import { Extrapolation, FadeInDown, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import Animated from 'react-native-reanimated'
import {wp,hp, capitalize} from '../helpers/common'
import {theme} from '../constants/theme'
import { ColorFilter, CommonFilterRow, SectionView } from './filterViews';
import { data } from '../constants/data';

const FilterModal = ({modalRef, onClose, onApply, onReset, filters, setFilters}) => {
    const snapPoints = useMemo(()=>['75%'],[]);
  return (
     <BottomSheetModal
            ref={modalRef}
            index={0}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backdropComponent={CustomBackdrop}
          >
            <BottomSheetView style={styles.contentContainer}>
              <View style={styles.content}>
                <Text style={styles.filterText}>Filter</Text>
                {
                  Object.keys(sections).map((sectionName, index)=>{
                    let sectionView = sections[sectionName];
                    let sectionData = data.filters[sectionName];
                    let title = capitalize(sectionName);
                    return(
                      <Animated.View 
                      entering={FadeInDown.delay((index*100)+100).springify().damping(11)}
                      key={sectionName}>
                        <SectionView 
                            title={title}
                            content={sectionView({
                                data: sectionData,
                                filters,
                                setFilters,
                                filterName: sectionName,
                            })}
                            />
                      </Animated.View>
                    )
                  })
                }

                <Animated.View entering={FadeInDown.delay(500).springify().damping(11)} style={styles.buttons}>
                  <TouchableOpacity style={styles.resetButton} onPress={onReset}>
                    <Text style={[styles.buttonText,{color:theme.colors.neutral(0.9)}]}>Reset</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.applyButton} onPress={onApply}>
                    <Text style={[styles.buttonText,{color:theme.colors.white}]}>Apply</Text>
                  </TouchableOpacity>
                </Animated.View>

              </View>
            </BottomSheetView>
     </BottomSheetModal>
  )
}

const sections = {
  "order" : (props)=><CommonFilterRow {...props}/>,
  "orientation" : (props)=><CommonFilterRow {...props}/>,
  "type" : (props)=><CommonFilterRow {...props}/>,
  "color" : (props)=><ColorFilter {...props}/>,
}



const CustomBackdrop = ({ animatedIndex, style }) => {

  const containerAnimatedStyle = useAnimatedStyle(()=>{
    let opacity = interpolate(
      animatedIndex.value,
      [-1, 0],
      [0, 1],
      Extrapolation.CLAMP
    )
    return{
      opacity
    }
  })
  const containerStyle = [
    StyleSheet.absoluteFill,
    style,
    styles.overlay
  ];

  return (
    <Animated.View style={[containerStyle, containerAnimatedStyle]}>
      <BlurView 
        style={StyleSheet.absoluteFill}
        tint='dark'
        intensity={25}
      />
    </Animated.View>
  )
  
};

export default FilterModal

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  overlay:{
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  content:{
    flex:1,
    gap:15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // width:'100%'
  },
  filterText:{
    fontSize: hp(4),
    fontWeight: theme.fontWeights.semibold,
    color: theme.colors.neutral(0.8),
    marginBottom:5 
  },
  buttons:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  applyButton:{
    flex:1,
    backgroundColor:theme.colors.neutral(0.8),
    padding:12,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:theme.radius.md,
    borderCurve:'continuous',
    borderWidth:2,
    borderColor:theme.colors.neutral(0.8)
  },
  resetButton:{
    flex:1,
    backgroundColor:theme.colors.neutral(0.05),
    padding:12,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:theme.radius.md,
    borderCurve:'continuous',
    borderWidth:2,
    borderColor:theme.colors.grayBG
  },
  buttonText:{
    fontSize:hp(2.2)
  },
})