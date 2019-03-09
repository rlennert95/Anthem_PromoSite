import React, { Component } from 'react';
import './characters.css'
import Suit1 from "../../assets/Anthem_Interceptor_FullBody.png"
import Suit2 from "../../assets/Anthem_Ranger_FullBody.png"
import Suit3 from "../../assets/Anthem_Colossus_FullBody.png"

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
                <img id="suit1" className="grow" src={Suit1} />
                <img id="suit2" className="grow" src={Suit2} />
                <img id="suit3" className="grow" src={Suit3} />
            </div>
        )
    }
}

export default Characters