import React from 'react'

import './about.css'
import Award from '../../img/award.jpg'
import Photo from '../../img/7.jpg'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Photo} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">
                    About Me
                </h1>
                <p className="a-sub">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam quod ea rerum repellat ex fugiat vel libero errorrerum repellat ex fugiat vel libero error
                </p>
                <div className="a-award">
                    <a href="#"><img src={Award} alt="" className="a-award-img" /></a>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Google Ads Dispaly Certification
                        </h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minima. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
