import React from 'react'

export function Clients() {
    return (
        <div className="clients">
            <div className="clients-layout main-layout">
                <div className="clients-main flex column">
                    <div className="header-container flex justify-center">
                        <h2>Some of our clients</h2>
                    </div>
                    <div className="clients-container flex justify-space-between align-center">
                        <div className="client-card">
                            <img src="images/logos/logo-the-verge.png" alt="verge" className="" />
                        </div>
                        <div className="client-card">
                            <img src="images/logos/logo-jakarta-post.png" alt="jakarta" className="" />
                        </div>
                        <div className="client-card">
                            <img src="images/logos/logo-the-guardian.png" alt="guardian" className="" />
                        </div>
                        <div className="client-card">
                            <img src="images/logos/logo-tech-radar.png" alt="techradar" className="" />
                        </div>
                        <div className="client-card">
                            <img src="images/logos/logo-gadgets-now.png" alt="gadgetsnow" className="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
