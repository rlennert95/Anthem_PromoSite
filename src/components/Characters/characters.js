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
        this.handleShow2 = this.handleShow2.bind(this);
        this.handleShow3 = this.handleShow3.bind(this);
        this.handleClose = this.handleClose.bind(this);
      

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
        this.setState({ show: false,
                        ShowSuit1: false,
                        ShowSuit2: false
                      });
      }
    
      handleShow() {
        this.setState({ show: false,
                        ShowSuit1: true
                       });
      }

      handleShow2() {
        this.setState({ show: true,
                        ShowSuit1: false
                       });
      }

      handleShow3() {
        this.setState({ show: false,
                        ShowSuit1: false,
                        ShowSuit2: true
                       });
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
           onClick={this.handleShow}/>

           
             <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={4}
           id="suit2" 
           className="grow" 
           src={Suit2} 
           onClick={this.handleShow2}/>


              <ImageFadeIn 
           loadAsBackgroundImage={false} 
           opacityTransition={6}
           id="suit3" 
           className="grow" 
           src={Suit3} 
           onClick={this.handleShow3}/>  
           
              

          {/* <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button> */}

        <Modal show={this.state.show} onHide={this.handleClose} id="modal1" >
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

    <Modal show={this.state.ShowSuit1} onHide={this.handleClose} id="modal1" >
          <Modal.Header closeButton>
            <Modal.Title>test</Modal.Title>
          </Modal.Header>
          <Modal.Body>test</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

    <Modal show={this.state.ShowSuit2} onHide={this.handleClose} id="modal1" >
          <Modal.Header closeButton>
            <Modal.Title>suit 2</Modal.Title>
          </Modal.Header>
          <Modal.Body>suit 2</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

            </div>




        



        
            
           
            
        )
    }
}

export default Characters