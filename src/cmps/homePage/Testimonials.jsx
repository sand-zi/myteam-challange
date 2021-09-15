import React from 'react'

export function Testimonials() {
    return (
        <div className="testimonials">
            <div className="testimonials-layout main-layout">
                <div className="testimonials-container">
                    <div className="header-container flex column justify-center align-center">
                        <h2>Delivering real results for top companies. </h2>
                            
                          <h2>Some of our <span> success stories.</span></h2> 
                    </div>
                    <div className="testimonials-list flex justify-space-between">
                        <div className="testimonial-card flex column justify-center align-center">
                            <div className="testimonial-description">
                                <p className='small'>
                                    “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
                                </p>
                            </div>
                            <div className="user-details flex column justify-center align-center">

                                <p className="user-name large ">Kady Baker</p>
                                <p className="user-position">Product Manager at Bookmark</p>
                            </div>
                            <div className="user-avatar">
                                <img src="./images/avatars/avatar-kady.jpg" alt="user" />
                            </div>
                        </div>
                        <div className="testimonial-card flex column justify-center align-center">
                            <div className="testimonial-description">
                                <p className='small'>
                                “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”
                                </p>
                            </div>
                            <div className="user-details flex column justify-center align-center">

                                <p className="user-name large ">Aiysha Reese</p>
                                <p className="user-position">Founder of Manage</p>
                            </div>
                            <div className="user-avatar">
                                <img src="./images/avatars/avatar-aiysha.jpg" alt="user" />
                            </div>
                        </div>
                        <div className="testimonial-card flex column justify-center align-center">
                            <div className="testimonial-description">
                                <p className='small'>
                                “Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”
                                </p>
                            </div>
                            <div className="user-details flex column justify-center align-center">

                                <p className="user-name large ">Arthur Clarke</p>
                                <p className="user-position">Co-founder of MyPhysio</p>
                            </div>
                            <div className="user-avatar">
                                <img src="./images/avatars/avatar-arthur.jpg" alt="user" />
                            </div>
                        </div>

                        
                    </div>
                </div>

            </div>

        </div>
    )
}
