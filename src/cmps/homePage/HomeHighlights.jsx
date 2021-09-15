import React from 'react'

export function HomeHighlights() {
    return (
        <div className="home-highlights">

            <div className="home-highlights-layout main-layout">
                <div className="decoration-container">
                    <div className="decoration"></div>
                </div>
                <div className="highlights-container flex">


                    <div className="header-container">
                        <h2>
                            Build & manage distributed teams like no one else.
                        </h2>
                    </div>
                    <div className="highlight-info flex column">
                        <div className="highlight-card flex">
                            <div className="img-container flex align-center">
                                <img className="oval-img" src="./images/combined/oval-base.png" alt="" />
                                <img className="main-img" src="./images/combined/individual.png" alt="" />

                            </div>
                            <div className="card-info-container flex column">
                                <p className="large">
                                    Experienced Individuals
                                </p>
                                <p className="small">
                                    Our network is made up of highly experienced professionals who are passionate about what they do.
                                </p>

                            </div>

                        </div>
                        <div className="highlight-card flex">
                            <div className="img-container flex align-center">
                                <img className="oval-img" src="./images/combined/oval-base.png" alt="" />
                                <img className="main-img" src="./images/combined/implement.png" alt="" />

                            </div>
                            <div className="card-info-container flex column">
                                <p className="large">
                                    Easy to Implement
                                </p>
                                <p className="small">
                                    Our processes have been refined over years of implementation meaning our teams always deliver.
                                </p>

                            </div>

                        </div>
                        <div className="highlight-card flex">
                            <div className="img-container flex align-center">
                                <img className="oval-img" src="./images/combined/oval-base.png" alt="" />
                                <img className="main-img" src="./images/combined/productivity.png" alt="" />

                            </div>
                            <div className="card-info-container flex column">
                                <p className="large">
                                    Enhanced Productivity
                                </p>
                                <p className="small">
                                    Our customized platform with in-built analytics helps you manage your distributed teams.
                                </p>

                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
