import React from 'react'
import "./page18.css"

class Posting extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="box1">
                    <div className="abu">
                        <p id="a3221">Hanin Aburass</p>
                        <div className="get">
                            <p>My Posting</p>
                        </div>
                    </div>
                    <div className="vertical-center">
                        <button>Post A Job</button>
                    </div>
                    <div className="abu">
                        <div className="get">
                            <p>How to Get Quality Work ,Fast</p>
                        </div>
                    </div>
                </div>

                <div className="box2">
                    <div>
                        <button id="a2556">Post A Job</button>
                        <button id="a2557">Rehire A Freelancer</button>
                    </div>

                    <div className="desig">
                        <p className="neer">2D Design</p>
                        <p className="neer">Engineering Design</p>
                        <p className="neer"> Mechanical Engineering</p>
                    </div>
                    <div className="sful">Succesful Jobs By Clients Like You</div>
                    <div className="b6552">
                        <p id="b3336">Hourly-Posted 2 Hours ago</p>
                        <p id="b3337">Plumbing Expert</p>
                        <p>$1.076.05</p>
                        <img src="#" alt="#" /><p id="b3337">hanin aburas</p>
                        <button>Post a Job Like This</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posting;