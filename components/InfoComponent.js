import { View, Text } from 'react-native'
import React from 'react'
import House from '../assets/icons/House.svg'
import Fork from '../assets/icons/Fork'

const InfoComponent = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', padding: 15, borderRadius: 12, marginVertical: 16}}>
      <View>
        <House style={{marginBottom: 8}} />
        <Text style={{fontSize: 16, fontWeight: '600'}}>2-х местный номер</Text>
        <Text style={{fontSize: 14, color: '#5E6072'}}>тип комнаты</Text>
      </View>
      <View>
        <Fork style={{marginBottom: 8}} />
        <Text style={{fontSize: 16, fontWeight: '600'}}>Полный пансион</Text>
        <Text style={{fontSize: 14, color: '#5E6072'}}>тип питания</Text>
      </View>
    </View>
  )
}

export default InfoComponent