import React, { Component } from 'react';
import './characters.css'
import Suit1 from "../../assets/Anthem_Interceptor_FullBody.png"
import Suit2 from "../../assets/Anthem_Ranger_FullBody.png"
import Suit3 from "../../assets/Anthem_Colossus_FullBody.png"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ImageFadeIn from 'react-image-fade-in'
import Img2 from "../../assets/EAP18_Screenshots_sc01_sh005_FINAL.png"
import Suit3ModalImg from "../../assets/Anthem_Colossus_Flying.png"


class Characters extends Component {
    constructor() {
        super()



        this.state = {
            home: false,
            characters: false,
            modal: false,
            modal2: false,
            modal3: false
        }

        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
    }

    toggle() {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
    }
    
    toggle2() {
      this.setState(prevState => ({
        modal2: !prevState.modal2
      }));
    }

    toggle3() {
      this.setState(prevState => ({
        modal3: !prevState.modal3
      }));
    }

    render() {
      const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
      const closeBtn2 = <button className="close" onClick={this.toggle2}>&times;</button>;
      const closeBtn3 = <button className="close" onClick={this.toggle3}>&times;</button>;

        return (
          
            <div id="characters">
           <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={2}
           id="suit1" 
           className="grow" 
           src={Suit1}
           onClick={this.toggle} 
           />

             <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={4}
           id="suit2" 
           className="grow" 
           src={Suit2} 
           onClick={this.toggle2}
           />

              <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={6}
           id="suit3" 
           className="grow" 
           src={Suit3} 
           onClick={this.toggle3}
           />  
           
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog modal-lg">
          <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
          <ModalBody>
          <img class="d-block w-100" src={Img2} alt="Second slide" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

  <Modal isOpen={this.state.modal2} toggle={this.toggle2} className="modal-dialog modal-lg">
          <ModalHeader toggle={this.toggle2} close={closeBtn2}>Modal title</ModalHeader>
          <ModalBody>
          test
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modal3} toggle={this.toggle3} className="modal-dialog modal-lg">
          <ModalHeader toggle={this.toggle3} close={closeBtn3}>Modal title</ModalHeader>
          <ModalBody>
          <img class="d-block w-100" src={Suit3ModalImg} alt="Second slide" />
          </ModalBody>
          <ModalFooter>
          
          </ModalFooter>
        </Modal>
            </div>

        )
    }
}

export default Characters