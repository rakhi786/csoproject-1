import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/4.jpeg"
import img2 from "../images/5.jpg"
import "./engineering.css"
import "../Navfolder/file.css"
import Eng from "../Card12/Eng"
import Law from "./Law"
export default class Commerce extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
    };
    return (
        <div className="engineercont" >
        <Slider {...settings}>
          <div>
          <img src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20Kasper%20Nymann,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1549965873/s7vvwklgvqyrardsng31.jpg" className="responsive-img1 center" alt=""/>
          </div>
        </Slider>
        <div className="engineercont1 white">
        <Eng /> 
        <Law />
        </div>
      </div>
    );
  }
}