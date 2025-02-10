import React from 'react'
import Intro from './Intro'
import ProductSection from './ProductSection'
import ServicesSection from './ServicesSection'
import Stats from './Stats'

function Container() {
    return (
        <div className='space-y-8 mb-12'>
            <Intro className='-space-y-8' />
            <ProductSection />
            <ServicesSection />
            <Stats />
        </div>
    )
}

export default Container
