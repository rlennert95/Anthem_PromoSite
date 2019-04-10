import React, { Component } from 'react';
import './characters.css'
import Suit1 from "../../assets/Anthem_Interceptor_FullBody.png"
import Suit2 from "../../assets/Anthem_Ranger_FullBody.png"
import Suit3 from "../../assets/Anthem_Colossus_FullBody.png"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageFadeIn from 'react-image-fade-in'
import Img2 from "../../assets/EAP18_Screenshots_sc01_sh005_FINAL.png"


class Characters extends Component {
    constructor() {
        super()



        this.state = {
            home: false,
            characters: false,
            ShowSuit1: false,
            ShowSuit2: false,
            ShowSuit3: false,
            show: false
        }
    }


    

    render() {
        return (
          
            <div id="characters">
           <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={2}
           id="suit1" 
           className="grow" 
           src={Suit1} 
           />

             <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={4}
           id="suit2" 
           className="grow" 
           src={Suit2} 
           />

              <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={6}
           id="suit3" 
           className="grow" 
           src={Suit3} 
           />  
           
       

            </div>

        )
    }
}

export default Characters