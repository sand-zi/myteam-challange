import React from 'react'
import { Link } from 'react-router-dom'

export function ContactUs() {
    return (
        <div className="contact-us">
            <div className="contact-us-layout main-layout">
                <div className="contact-us-container flex justify-space-between">
                    <h2>Ready to get started?</h2>
                    <button> <Link to='/contact'>contact us</Link></button>
                </div>

            </div>

        </div>
    )
}
