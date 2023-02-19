import { View, Text } from 'react-native'
import React from 'react'

const MainInfoComponent = () => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 16}}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>Основная информация</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072', flexShrink: 1}}>Наименование учебного заведение</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 6, textAlign: 'right'}}>ФГАОУ ВО «Севастапольский государственный универститет»</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072'}}>Сайт</Text>
        <Text style={{fontSize: 14, fontWeight: '400', textAlign: 'right'}}>sevsu.ru</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072', flexShrink: 3}}>Адрес</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 3, textAlign: 'right'}}>Севастополь, Челюскинцев, 119</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072', flexShrink: 3}}>Субъект РФ</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 3, textAlign: 'right'}}>Севастополь</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#5E6072', flexShrink: 3}}>Продолжительно-сть пребывания</Text>
        <Text style={{fontSize: 14, fontWeight: '400', flexShrink: 3, textAlign: 'right'}}>от 2 до 14 дней</Text>
      </View>
    </View>
  )
}

export default MainInfoComponent