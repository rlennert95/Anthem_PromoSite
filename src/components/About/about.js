import React, { Component } from 'react';
import './about.css'



class About extends Component {
    constructor() {
        super()
        this.state = {
            home: false,
            about: false
        }

    }



    render() {




        return (



            <div id="about">

                <iframe width="1000px" id="video1" height="600px" src="https://www.youtube.com/embed/DPf-EATqFng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <p>
                    Upon an unfinished world, humanity struggles to survive in a savage environment full of diverse threats. Equipped with incredible Javelin exosuits, a faction known as the Freelancers seeks to tip the balance in mankind’s favor.
         </p>
            </div>


        )

    }
}

export default About