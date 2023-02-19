import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function BannerSlider({data}) {
  return (
    <View>
        <Image source={data.image} style={styles.imageStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
    imageStyle: {height: 390, width: '100%'}
});
