import React, { Component } from 'react';
import './media.css'
import Img1 from "../../assets/EAP18_Screenshots_sc01_sh001_FINAL.png"
import Img2 from "../../assets/EAP18_Screenshots_sc01_sh003_FINAL.png"
import Img3 from "../../assets/EAP18_Screenshots_sc01_sh005_FINAL.png"



class Media extends Component {
    constructor() {
        super()
        this.state = {
            home: false,
            media: false
        }

    }



    render() {




        return (



            <div id="media">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={Img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Img2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={Img3} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

            
             </div>


        )

    }
}

export default Media