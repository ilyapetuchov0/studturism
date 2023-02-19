import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const RoomsComponents = () => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 16}}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>Комнаты</Text>
      <Text style={{fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 8}}>2-х местный номер</Text>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#EDEDED', paddingBottom: 10}}>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#1B1F3B', marginBottom: 8}}>20</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Количество</Text>
            </View>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#1B1F3B', marginBottom: 8}}>600 ₽</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Стоимость/чел</Text>
            </View>
            <MaterialIcons name='arrow-forward-ios' size={24} style={{}} />
        </View>
      </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 8}}>2-х местный номер</Text>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#EDEDED', paddingBottom: 10, marginTop: 8}}>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#1B1F3B', marginBottom: 8}}>110</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Количество</Text>
            </View>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#1B1F3B', marginBottom: 8}}>600 ₽</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Стоимость/чел</Text>
            </View>
            <MaterialIcons name='arrow-forward-ios' size={24} style={{}} />
        </View>
      </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 8}}>2-х местный номер</Text>
      <TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8}}>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#1B1F3B', marginBottom: 8}}>110</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Количество</Text>
            </View>
            <View>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#1B1F3B', marginBottom: 8}}>600 ₽</Text>
                <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Стоимость/чел</Text>
            </View>
            <MaterialIcons name='arrow-forward-ios' size={24} style={{}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
        <Text style={{color: '#446FFF', fontSize: 14, marginRight: 3}}>Показать все</Text>
        <MaterialIcons name='expand-more' size={20} color={'#446FFF'}/>
      </TouchableOpacity>
    </View>
  )
}

export default RoomsComponents