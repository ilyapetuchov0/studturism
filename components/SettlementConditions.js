import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const SettlementConditions = () => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 16}}>
      <Text style={{fontSize: 20, fontWeight: '600'}}>Условия заселения</Text>
      <Text style={{fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 8}}>Перечень необходимых документов и требований для направляющей образовательной организации</Text>
      <Text style={{fontSize: 14, fontWeight: '400'}}>Для направляющей образовательной организации необходимо предоставить список группы с указанием паспортных данных участников тура. При бронировании...</Text>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
        <Text style={{color: '#446FFF', fontSize: 14, marginRight: 3}}>Показать все</Text>
        <MaterialIcons name='expand-more' size={20} color={'#446FFF'}/>
      </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 8}}>Перечень необходимых документов и требований для путешественников, оплачивающих услуги самостоятельно</Text>
      <Text style={{fontSize: 14, fontWeight: '400'}}>Для направляющей образовательной организации необходимо предоставить список группы с указанием паспортных данных участников тура. При бронировании...</Text>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
        <Text style={{color: '#446FFF', fontSize: 14, marginRight: 3}}>Показать все</Text>
        <MaterialIcons name='expand-more' size={20} color={'#446FFF'}/>
      </TouchableOpacity>
    </View>
  )
}

export default SettlementConditions