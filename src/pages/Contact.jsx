import React from 'react'

export function Contact() {
    return (
        <div className="contact-us-page">
            <div className="contact-us-layout main-layout">
                <div className="contact-us-container flex">
                    <div className="contact-us-description flex column justify-space-between">
                        <h1 className="small">Contact</h1>
                        <h2 className="ask-about">Ask us about</h2>
                        <div className="highlights-container">
                            <div className="contact-highlight-card flex">
                                <div className="img-container flex align-center">
                                    <img className="oval-img" src="./images/combined/oval-base.png" alt="" />
                                    <img className="main-img" src="./images/combined/individual.png" alt="" />

                                </div>
                                <div className="card-description">
                                    <p className="large">
                                        The quality of our talent network
                                    </p>
                                </div>
                            </div>
                            <div className="contact-highlight-card flex">
                                <div className="img-container flex align-center">
                                    <img className="oval-img" src="./images/combined/oval-base.png" alt="" />
                                    <img className="main-img" src="./images/combined/implement.png" alt="" />

                                </div>
                                <div className="card-description">
                                    <p className="large">
                                        Usage & implementation of our software
                                    </p>
                                </div>
                            </div>
                            <div className="contact-highlight-card flex">
                                <div className="img-container flex align-center">
                                    <img className="oval-img" src="./images/combined/oval-base.png" alt="" />
                                    <img className="main-img" src="./images/combined/productivity.png" alt="" />

                                </div>
                                <div className="card-description">
                                    <p className="large">
                                        How we help drive innovation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-us-form flex column">
                        <div className="inputs-container flex column grow">

                            <input type="text" className="name" placeholder="Name" />


                            <input type="text" className="email" placeholder="Email Address" />
                            <input type="text" className="company-name" placeholder="Company Name" />
                            <input type="text" className="title" placeholder="Title" />
                            <textarea className="message" name="" id="" rows="5" placeholder="Message"></textarea>
                        </div>

                        <button>submit</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
