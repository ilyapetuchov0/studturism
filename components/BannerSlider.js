import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default function BannerSlider({data}) {
    return (
        <View style={{alignContent: 'center'}}>
            <Image source={data.image} style={styles.imageStyle}/>
            <View style={styles.positionStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>г. Севастополь</Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>от 2 до 14 дней</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {backgroundColor: '#959595', borderRadius: 8, alignItems: 'center', alignContent: 'center', marginRight: 5, padding: 5},
    textStyle: {color: '#fff', fontSize: 11},
    imageStyle: {height: 185, width: width-26, borderRadius: 12},
    positionStyle: {position: 'absolute', flexDirection: 'row', padding: 10, alignContent: 'center', alignItems: 'center'}
});