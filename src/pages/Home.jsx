import React from 'react'
import { HomeHeader } from '../cmps/homePage/HomeHeader'
import { HomeHighlights } from '../cmps/homePage/HomeHighlights'
import { Testimonials } from '../cmps/homePage/Testimonials'
import {ContactUs} from '../cmps/footer/ContactUs'

export function Home() {
    return (
        <div className='home-page'>
            <HomeHeader />
            <HomeHighlights />
            <Testimonials />
            <ContactUs />
        </div>
    )
}
