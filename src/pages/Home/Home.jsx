import React from 'react'
import MyCarcoul from '../../components/MyCarcoul/MyCarcoul'
import SectioneOne from '../../components/SectioneOne/SectioneOne'
import WhatMakes from '../../components/WhatMakes/WhatMakes'
import ComponentSlider from '../../components/ComponentSlider/ComponentSlider'
import RaiseYour from '../../components/RaiseYour/RaiseYour'
import SliderApi from '../../components/SliderApi/SliderApi'
import SeeWhy from '../../components/SeeWhy/SeeWhy'
import SupportSection from '../../components/SupportSection/SupportSection'

const Home = () => {
    return (
        <div>
            <MyCarcoul />
            <SectioneOne />
            <WhatMakes />
            <ComponentSlider />
            <RaiseYour />
            <SliderApi />
            <SeeWhy />
            <SupportSection />
        </div>
    )
}

export default Home