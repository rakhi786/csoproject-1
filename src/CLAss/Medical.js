import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/4.jpeg"
import img2 from "../images/5.jpg"
import "./engineering.css"
import "../abled/hmtl.css"
import "../Navfolder/file.css"
import Med from "../Card12/Med"
import MBBS from "./MBBS"
import C12 from "./Class12"
export default class Medical extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    return (
        <div className="engineercont white" >
        <Slider {...settings}>
          <div>
          <img src="https://scopeblog.stanford.edu/wp-content/uploads/2017/10/computer-1149148_1920.jpg" className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <div className="engineercont1">
        <Med />
				<div class="examneetprep">
						<h2>Exam Preperation Tips</h2>
					<ul class="actions limedical">
						<li><a href="/abled" class="button alt"> For Neet</a></li>
					</ul>
				</div>
        </div>
      </div>
    );
  }
}