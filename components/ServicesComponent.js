import { View, Text } from 'react-native'
import React from 'react'


const ServicesComponent = () => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 16}}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>Услуги</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Завтрак</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 1, textAlign: 'right'}}>300₽/чел</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 5, textAlign: 'right'}}>На территории лагеря "Горизонт" работает столовая</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Обед</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 1, textAlign: 'right'}}>300₽/чел</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 5, textAlign: 'right'}}>На территории лагеря "Горизонт" работает столовая</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Ужин</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 1, textAlign: 'right'}}>1000₽/чел</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 5, textAlign: 'right'}}>На территории лагеря "Горизонт" работает столовая</Text>
      </View>
    </View>
  )
}

export default ServicesComponent