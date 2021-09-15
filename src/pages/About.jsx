import React from 'react'
import { AboutHeader } from '../cmps/aboutPage/AboutHeader'
import { Clients } from '../cmps/aboutPage/Clients'
import { MeetDirectors } from '../cmps/aboutPage/MeetDirectors'
import {ContactUs} from '../cmps/footer/ContactUs'


export function About() {
    return (
        <div className="about-page">
            <AboutHeader />
            <MeetDirectors />
            <Clients />
            <ContactUs />
        </div>
    )
}
