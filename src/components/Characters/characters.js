import React, { Component } from 'react';
import './characters.css'
import Suit1 from "../../assets/Anthem_Interceptor_FullBody.png"
import Suit2 from "../../assets/Anthem_Ranger_FullBody.png"
import Suit3 from "../../assets/Anthem_Colossus_FullBody.png"
import { Modal, Button } from 'react-bootstrap'
import {Fade} from 'react-fade-opacity'
import ImageFadeIn from 'react-image-fade-in'


class Characters extends Component {
    constructor() {
        super()

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShowSuit1 = this.handleShowSuit1.bind(this);
        this.handleCloseSuit1 = this.handleCloseSuit1.bind(this);

        this.state = {
            home: false,
            characters: false,
            ShowSuit1: false,
            ShowSuit2: false,
            ShowSuit3: false,
            show: false
        }
    }

   
    // static defaultProps = {
    //   in: false,
    //   interval: 50,
    //   delay: 6000
    // }

    handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

      handleShowSuit1() {
        this.setState({ ShowSuit1: true });
      }

      handleCloseSuit1 ()  {
        this.setState({ ShowSuit1: false });
      }


    render() {
        return (
          
            <div id="characters">
           <ImageFadeIn loadAsBackgroundImage={false} opacityTransition={3}id="suit1" className="grow" src={Suit1} onClick={this.handleShowSuit1} />
                
           
                <img id="suit2" className="grow" src={Suit2} onClick={this.handleShow}/>
                <img id="suit3" className="grow" src={Suit3} onClick={this.handleShow}/>

          {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={this.state.show} onHide={this.handleClose} id="modal1">
          <Modal.Header closeButton>
            <Modal.Title>Placeholder</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

   <Modal ShowSuit1={this.state.ShowSuit1} onHide={this.handleCloseSuit1} id="modal2">
          <Modal.Header closeButton>
            <Modal.Title>SUIT 1</Modal.Title>
          </Modal.Header>
          <Modal.Body>This is suit 1</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseSuit1}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCloseSuit1}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

            </div>

        
            
           
            
        )
    }
}

export default Characters