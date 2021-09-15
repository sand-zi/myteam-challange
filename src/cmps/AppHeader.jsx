import React from 'react'
import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <div className="app-header">
            <div className="header-layout main-layout">

                <div className="header-container flex align-center">
                    <div className="logo">
                        <img src={"./images/logo.svg"} alt="logo" />
                    </div>
                    <nav>
                        <ul className="main-nav clean-list inline-flex">
                            <li>< Link to="/" >Home</Link></li>
                            <li>< Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                    <button>Contact us</button>
                </div>

            </div>
        </div>
    )
}
