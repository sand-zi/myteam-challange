import React from 'react'

export function HomeHeader() {
    return (
        <div className="homeheader">

            <div className="home-header-layout main-layout">

                <div className="home-header-container flex">
                    <div className="bg-decoration upper">
                        <img className="upper-img" src="./images/bg/bg-pattern-home-1.svg" alt="" />
                    </div>
                    <div className="container-header ">
                        <h1 className="large">Find the
                            best <span>talent</span></h1>
                    </div>

                    <div className="description-container flex">
                        <div className="decoration-container">
                            <div className="decoration"></div>
                        </div>

                        <p className="large description">
                            Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                        </p>
                    </div>
                   
                </div>

                <div className="bg-decoration lower">
                        <img className="lower-img" src="./images/bg/bg-pattern-home-2.svg" alt="" />
                    </div>

            </div>


        </div>
    )
}
