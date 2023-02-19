import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from '../components/Card';
import { windowWidth } from '../utils/Dimensions';
import { sliderData } from '../model/data';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../components/BannerSlider';

export default function HomeScreen() {

  return (
    <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={{flexDirection: 'row', borderColor: '#c6c6c6', borderWidth: 1, borderRadius: 10, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 8, margin: 10, alignItems: 'center'}}>
                <Feather name="search" size={20} color="#c6c6c6" style={{marginRight: 5}} />
                <TextInput placeholder="Кампус, город, университет"/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name='unfold-more' size={20} color="#5E6072" style={{margin: 5, marginRight: 0}}/>
              <Text style={{marginRight: 8, fontSize: 16}}>Сортировка</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{color: '#446FFF', fontSize: 16}}>по актуальности</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={{paddingLeft: 65}}>
                <Text style={{color: '#446FFF', fontSize: 16}}>Фильтры</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Card />
              <Card />
              <Card />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}