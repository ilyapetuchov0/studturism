import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Document from '../assets/icons/Document.svg'

const DocumentsComponent = () => {
  return (
    <View style={{backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 16}}>
        <Text style={{fontSize: 20, fontWeight: '600'}}>Документы</Text>
        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 12}}>
                <Document />
                <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 10, flexShrink: 1}}>Соглашение на обработку персональных данных</Text>
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
            <View style={{flexDirection: 'row', marginTop: 12}}>
                <Document />
                <Text style={{fontSize: 14, fontWeight: '400', marginLeft: 10, flexShrink: 1}}>Презентация оздоровительного комплекса</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default DocumentsComponent