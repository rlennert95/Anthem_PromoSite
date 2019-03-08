import React, { Component } from 'react';
import './characters.css'
import Suit1 from "../../assets/Anthem_Colossus_Flying.png"


class Characters extends Component {
    constructor() {
        super()
        this.state = {
            home: false,
            characters: false
        }

    }



    render() {




        return (



            <div id="characters">

<p>
<img id="suit1" src={Suit1} />
         </p>
        </div>


        )

    }
}

export default Characters