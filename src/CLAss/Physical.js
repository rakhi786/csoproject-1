import React, { Component } from 'react'
import img1 from "../images/food1.jpg"
import img2 from "../images/sport1.jpg"
import img3 from "../images/acad1.jpg"
import "./sidebar.css"
export default class Photo extends Component {
    render() {
        return (
            <div class="finalsportdiv8 white">
               <section class="container section" id="photos">
                   <div class="scrollspy row" id="photo1">
                       <div>
                           <img src={img1} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Aerobic Exercises</h2>
                           <p class="text-center paraclass">Aerobic exercise reduces the risk of many conditions, including obesity, heart disease, high blood pressure, type 2 diabetes, metabolic syndrome, stroke and certain types of cancer. Weight-bearing aerobic exercises, such as walking, help decrease the risk of osteoporosis.</p>
                         	<ul><li class="center"><a href="http://theteenagertoday.com/aerobics-complete-body-workout/" class="button big special">Article</a></li>
                             <li class="center"><a href="https://youtu.be/ixjdNUtWN-Y" class="button big special">Videos</a></li>
                             <li class="center"><a href="https://youtu.be/pj4TVbnIEgk" class="button big special">Bonus Links</a></li></ul>
                       </div>
                   </div>
                   <div class="scrollspy row" id="sport1">
                       
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Anaerobic Exercises</h2>
                           <p class="text-center paraclass">Anaerobic exercise helps boost metabolism as it builds and maintains lean muscle. The more lean muscle you have, the more calories you'll burn during your next sweat session. High-intensity exercise is also thought to increase your post-workout calorie burn.</p>
                         	<ul><li class="center"><a href="https://www.healthline.com/health/fitness-exercise/anaerobic-exercise " class="button big special">Articles</a></li>
                             <li class="center"><a href="https://youtu.be/5uVaKjtJHN8" class="button big special">Videos</a></li>
                             <li class="center"><a href="https://youtu.be/GO7-7W76irs" class="button big special">Bonus Links</a></li></ul>
                             
                       </div>
                       <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div>
                   </div>
                   <div class="scrollspy row" id="acad1">
                       <div>
                           <img src={img3} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Yoga</h2>
                           <p class="text-center paraclass">Yoga brings together physical and mental disciplines to achieve a peaceful body and mind; it helps manage stress and anxiety and keeps you relaxing. It also helps in increasing flexibility, muscle strength and body tone.</p>
                         	<ul><li class="center"><a href="//www.stylecraze.com/articles/amazing-yoga-asanas-for-teens/" class="button big special">Articles</a></li>
                             <li class="center"><a href="//youtu.be/7kgZnJqzNaU " class="button big special">Videos</a></li>
                             <li class="center"><a href=" https://www.udemy.com/share/102ITg/" class="button big special">Bonus Links</a></li></ul>
                       </div>
                   </div>
                   <div class="scrollspy row" id="sport1">
                       
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Meditation</h2>
                           <p class="text-center paraclass">"Meditation is believed to help relieve stress, lessen depression, lower blood pressure and improve sleep [while boosting] memory, mood and even social intelligence." ... Meditation and mindfulness are great practices for medical students because they can be done anywhere at any time.</p>
                         	<ul><li class="center"><a href="//www.momjunction.com/articles/meditation-techniques-for-teens_00330301/" class="button big special">Articles</a></li>
                             <li class="center"><a href="https://youtu.be/g5sXaLzAhGQ" class="button big special">Videos</a></li>
                             <li class="center"><a href=" https://youtu.be/O-6f5wQXSu8 " class="button big special">Bonus Links</a></li></ul>
                       </div>
                       <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div>
                   </div>
               </section> 
            </div>
        )
    }
}