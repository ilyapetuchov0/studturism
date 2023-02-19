import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { sliderData } from '../model/data'
import BannerSlider from './BannerSlider'
import { windowWidth } from '../utils/Dimensions'
import { useNavigation } from '@react-navigation/native'

const Card = () => {
    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item}/>
    }

    const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate('FullScreen')
    }

    return (
    <View>
        <Carousel 
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 30}
            enableMomentum={true}
            />
        <View style={{marginVertical: 5, paddingHorizontal: 20}}>
            <TouchableOpacity onPress={() => handleNavigation()}>
                <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between', margin: 0}}>
                    <Text style={{fontSize: 22, fontWeight: '700'}}>15 000 ₽ / чел</Text>
                    <Text style={{color: '#5E6072', fontSize: 12}}>25.03.2023 — 25.04.2023</Text>
                </View>
                <Text style={{fontSize: 20, marginBottom: 4}}>Спортивно – оздоровительный лагерь «Горизонт»</Text>
                <Text style={{fontSize: 12, color: '#5E6072', marginBottom: 10}}>ФГАОУ ВО «Севастапольский государственный универститет»</Text>
                <TouchableOpacity style={{backgroundColor: '#446FFF', padding: 14, borderRadius: 12, marginBottom: 10}}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: '700', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>Оставить заявку</Text>
                </TouchableOpacity>
            </TouchableOpacity>
            
        </View>
    </View>
    )
}

export default Card