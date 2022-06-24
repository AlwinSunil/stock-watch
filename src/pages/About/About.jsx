import React from "react"
import { Link } from "react-router-dom"
import Navigation from "@components/Navigation"
import "./About.scss"

function About() {
    return (
        <>
            <Navigation header="About" />
            <div className="about">
                <div className="about__container">
                    <img src="/assets/img/about.webp" alt="" />
                    <div className="about__header">
                        <p>
                            <Link to="/">Stock watch&nbsp;</Link>
                            is a side project for my&nbsp;
                            <a
                                href="http://alwinsunil.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="about__link"
                            >
                                portfolio
                            </a>
                            . It helps you track your favourite 10 stocks and
                            get quick updates about it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
