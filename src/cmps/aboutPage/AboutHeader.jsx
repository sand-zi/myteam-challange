import React from 'react'

export function AboutHeader() {
    return (
        <div className='about-header'>
            <div className="about-header-layout main-layout">
                <div className="about-header-container flex justify-content-space-between">
                    <div className="header-container">
                        <h1 className="small">About</h1>
                    </div>
                    <div className="about-details">

                        <div className="content flex column">

                            <div className="decoration"></div>

                            <p className='large'>
                                We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
