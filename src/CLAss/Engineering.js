import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../images/4.jpeg"
import "./engineering.css"
import "../Navfolder/file.css"
import Eng from "../Card12/Eng"
import "./sidebar.css"
import Carousel from "../Carousel"
import Trendclg from "./TrendingClg"
import Trendcour from "./Trendingcour"
import "./engineering.css"
export default class Engineering extends Component {
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
          <div class="container">
          <img src="https://liip.rokka.io/www_articlebig_3/95d3e8/how-to-become-software-developer.jpg" className="responsive-img1 center" alt=""/>
          </div>
        </Slider> 
        <div className="container">
    <h1 className="text-center">What does an engineer do?</h1>
    <p class="paraclass1">Engineers design, evaluate, develop, test, modify, install, inspect and maintain a wide variety of products and systems. They also recommend and specify materials and processes, supervise manufacturing and construction, conduct failure analysis, provide consulting services and teach engineering courses in colleges and universities.
    </p>
    <h3 className="text-center">The field of engineering is divided into a large number of specialty areas:</h3>
    <div class="row">
    <div>  <img src= " https://sanskriti.edu.in/blog/wp-content/uploads/2017/12/engineerings-1-750x422.jpg " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Mechanical engineering </h2>
    <p className="paraclass1 text-center">
    Involves design, manufacturing, inspection and maintenance of machinery, equipment and components as well as control systems and instruments for monitoring their status and performance. This includes vehicles, construction and farm machinery, industrial installations and a wide variety of tools and devices.</p>
    </div> </div>
    <div class="row">
    <div>  <img src=" https://www.svec.education/wp-content/uploads/2017/06/B.Tech-Banner-CSE.jpg " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Computer science engineering 
</h2>
    <p className="paraclass1 text-center">
Another industry that continues to expand is of course the Information Technology (IT) industry. This involves both computer sciences and electrical engineering. Successful graduates may find themselves in Telecommunications, Networking, Software Application Development, or Manufacturing, and additional industries are emerging, such as Application Development, Web Development, Network Security / Cybersecurity, and Cloud Computing, among others. This type of degree has good future potential as most industries rely on information technology</p>
    </div> </div>
    <div class="row">
    <div>  <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSQazOBdoMhnm-AxX-DaeyGQz7D41C69Y1tA&usqp=CAU " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Electrical engineering 
</h2>
    <p className="paraclass1 text-center">
An Electrical Engineering Degree involves the study of energy. Energy is available in various forms such as electrical, hydro and natural sources such as wind and solar energy. An Electrical Engineer develops technologies to assist with the practical application of such energies. Electrical Engineers design components for electronic equipment, communications systems, power grids, automobiles, and more. Most employers require an Electrical Engineering Degree at some level to work as an Electrical Engineer, and other licensing or certification requirements may also be required depending on where you live.</p>
    </div> </div>
    <div class="row">
    <div>  <img src= " https://www.homecivil.com/wp-content/uploads/2020/07/17-629x420.jpg " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Civil engineering 
</h2>
    <p className="paraclass1 text-center">
Civil Engineering involves the development of infrastructure such as buildings, railways, roads construction, bridges and general construction project management. Civil Engineers also play an important role in rebuilding projects, such as in the event of a natural disaster. Civil Engineers may work in the private or public sector at any level. This is a very broad engineering degree. Environmental Engineering, Structural Engineering and Marine Engineering are all specialties of Civil Engineering..</p>
    </div> </div>
    <div class="row">
    <div>  <img src= " https://www.indiaeducation.net/imagesvr_ce/2251/maxresdefault.jpg " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Chemical engineering 
</h2>
    <p className="paraclass1 text-center">
    As the name implies, Chemical Engineering is the practical application of chemistry. This type of engineering degree involves technology that utilizes chemical reactions to solve problems. A chemical engineer creates new products, including: Cosmetics, foods, pharmaceuticals, beverages, and cleaners from raw chemicals. this is a very broad engineering degree and allows for a number of different forms of employment. It is also one of the most challenging degrees available.</p>
    </div> </div>
    <div class="row">
    <div>  <img src= " https://inteng-storage.s3.amazonaws.com/img/iea/nWOVZX9YOo/sizes/aerospace-eng_md.jpg "  alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Aerospace/aeronautical engineering 
</h2>
    <p className="paraclass1 text-center">
This branch of engineering deals with the research, design, development, construction, testing, science and technology of aircraft. You could also study astronautical engineering, focusing on spacecraft and the deep conditions of space. </p>
    </div> </div>
    <div class="row">
    <div>  <img src= " https://qph.fs.quoracdn.net/main-qimg-763584ca2a21ab26be5dc963e3ed48a8 " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Mathematics and Computing 
</h2>
    <p className="paraclass1 text-center">
    Mathematics & Computing Engineering is an amalgamation of mathematics with computer science and financial engineering. The course provides students with comprehensive theoretical knowledge and also practical training in computer science, numerical computing and mathematical finance.  The curriculum is designed to provide students with in depth theoretical background and practical training in computer science, numerical computing and mathematical finance.</p>
    </div> </div>
    <div class="row">
    <div>  <img src=" https://qph.fs.quoracdn.net/main-qimg-ce565100c33cdc9a6f461cc50a60a27c "alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Engineering Physics </h2>
    <p className="paraclass1 text-center">
    An engineering physics degree combines engineering with physics and allows students to study the areas where these two areas intersect. It is also a precursor to graduate studies in either physics or engineering. Most graduates will work in research or another field of engineering such as mechanical engineering or nuclear engineering. The demand for this type of graduate is particularly high.</p>
    </div> </div> 
    <div class="row">
    <div>  <img src=" https://s3files.core77.com/blog/images/2014/03/0PHOTO2_nanostructure.jpg  " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Materials Science engineering </h2>
    <p className="paraclass1 text-center">
    A Materials Science engineering degree is a study of materials and why they behave a specific way or react to things in a certain way. This includes plastics, ceramics and polymers. Everything around us is made up of materials, as we evolve there is an increasing demand for materials which are stronger, more environmentally friendly and lighter. Employment opportunities include research positions along with industry placements. Materials Science Engineering is a very hands on, practical degree and graduates are in high demand.</p>
    </div> </div>
    <div class="row">
    <div>  <img src= " https://www.mahindraecolecentrale.edu.in/photos/shares/Blog-Images/value-added-skills-for-electrical-electronics-engineers-img.jpg " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Electronics engineering </h2>
    <p className="paraclass1 text-center">
    Technology and specifically, electronics, have changed the way most of the world lives every day. From the revolutionary computer to the latest mobile phone technology that fits in your pocket, we all use electronics every single day. Electronics engineers are needed to design and build electronic equipment. Most electronics engineers work with circuits, switchboards, and other electronic configurations to design and build these devices.</p>
    </div> </div>
    <div class="row">
    <div>  <img src=  " https://k-recruiting.com/wp-content/uploads/2018/11/shutterstock_421758679-1024x683.jpg " alt="" class="responsive-img imgeng"></img></div> <div class="col">
    <h2 class="indigo-text text-darken-4 text-center"> Biomedical engineering </h2>
    <p className="paraclass1 text-center">
    Biomedical engineering combines the study of medicine and biology. Biomedical Engineers apply their design skills to biological and medical sciences. They do this to assist in advancements in healthcare treatment technology. They develop and maintain diagnostic devices. Devices that include EEGs, MRIs, and other imaging machines. Physicians use these machines to diagnosis their patients’ medical problems. This is a fast moving industry and while challenging can be a rewarding career path to take.</p>
    </div> </div>
     </div>
     <Eng />      
      </div>
    );
  }
}