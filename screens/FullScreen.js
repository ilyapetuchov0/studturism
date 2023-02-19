import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { windowWidth } from '../utils/Dimensions'
import FullBannerSlider from '../components/FullBannerSlider'
import { sliderData } from '../model/data'
import InfoComponent from '../components/InfoComponent'
import MainInfoComponent from '../components/MainInfoComponent'
import ServicesComponent from '../components/ServicesComponent'
import RoomsComponents from '../components/RoomsComponent'
import SettlementConditions from '../components/SettlementConditions'
import DocumentsComponent from '../components/DocumentsComponent'

const FullScreen = () => {
    const renderBanner = ({item, index}) => {
        return <FullBannerSlider data={item}/>
    }

    return (
    <ScrollView>
        <Carousel 
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            enableMomentum={true}
            />
        <View style={{padding: 20}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '700' }}>15 000 ₽ / чел</Text>
                <Text style={{fontSize: 12, fontWeight: '400' }}>25.03.2023 — 25.04.2023</Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: '400'}}>Спортивно – оздоровительный лагерь «Горизонт»</Text>
            <InfoComponent />
            <MainInfoComponent />
            <ServicesComponent />
            <RoomsComponents />
            <SettlementConditions />
            <DocumentsComponent />
        </View>
    </ScrollView>
)
}

export default FullScreen