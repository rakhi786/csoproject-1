import React, { Component } from 'react'
import img1 from "../../images/food1.jpg"
import img2 from "../../images/sport1.jpg"
import img3 from "../../images/acad1.jpg"
import "../sidebar.css"
export default class Physical4 extends Component {
    render() {
        return (
            <div class="finalsportdiv8 white">
               <section class="container section" id="photos">
                   <div class="scrollspy row" id="photo1">
                       <div>
                           <img src={img1} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Kids Exercises List</h2>
                           <p class="text-center paraclass">Most of the physical activity should be aerobic, where kids use large muscles and continue for a period of time. Examples of aerobic activity are running, swimming, and dancing.School-age kids usually have brief bouts of moderate to strong physical activity alternating with light activity or rest throughout the day. Any moderate to strong activity counts toward the 60-minute goal.Muscle-strengthening and bone-strengthening physical activity should be included at least 3 days a week.</p>
                         	<ul><li class="center"><a href="https://www.yourtherapysource.com/blog1/2019/10/04/kids-exercise-list/ " class="button big special">Article</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/uy5pnX4xAuw" class="button big special">Videos</a></li>
                             </ul>
                       </div>
                   </div>
                   <div class="scrollspy row" id="sport1">
                   <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Importance of Excercise for Kids</h2>
                           <p class="text-center paraclass">Children naturally build strong muscles and bones when they run, jump, and play. Formal weight programs aren't needed, but are safe when properly designed and supervised. Kids this age need physical activity to build strength, coordination, and confidence — and to lay the groundwork for a healthy lifestyle. They're also gaining more control over how active they are.</p>
                         	<ul><li class="center"><a href="https://parenting.firstcry.com/articles/exercise-for-kids-importance-and-more/ " class="button big special">Articles</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/3_oIssULEk0" class="button big special">Videos</a></li>
                             </ul>
                             
                       </div>
                       
                   </div>
                   <div class="scrollspy row" id="acad1">
                       <div>
                           <img src={img3} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Benefits of Excercise for Kids</h2>
                           <p class="text-center paraclass">Get Active Sports are providing children with a better lifestyle every day through exercise. Exercise is one of the most important aspects of a child’s life. Most people think that exercise means going to the gym but for children this is not the case, for children this means just being physically active whilst playing activities such as tag in the playground, playing football at lunch, walking to school.</p>
                         	<ul><li class="center"><a href="https://www.momjunction.com/articles/best-benefits-excercise-kids_0075233/ " class="button big special">Articles</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/T6hBBt31a0I " class="button big special">Videos</a></li>
                             </ul>
                       </div>
                   </div>
                   <div class="scrollspy row" id="sport1">
                   <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div> 
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Personal Fitness</h2>
                           <p class="text-center paraclass">Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and reduce your risk for some cancers.</p>
                         	<ul><li class="center"><a href="https://classroom.kidshealth.org/classroom/6to8/personal/fitness/fitness.pdf" class="button big special">Articles</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/o8uTdn_zkok" class="button big special">Videos</a></li>
                             </ul>
                       </div>
                     
                   </div>
               </section> 
            </div>
        )
    }
}