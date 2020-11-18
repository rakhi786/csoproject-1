import React, { Component } from 'react'
import img1 from "../../images/food1.jpg"
import img2 from "../../images/sport1.jpg"
import img3 from "../../images/acad1.jpg"
import "../sidebar.css"
export default class Sports4 extends Component {
    render() {
        return (
            <div class="finalsportdiv8 white">
               <section class="container section" id="photos">
                   <div class="scrollspy row" id="photo1">
                       <div>
                           <img src={img1} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                       <h2 class="indigo-text text-darken-4 text-center">Athletics</h2>
                           <p class="text-center paraclass">Students participating in high school athletics are more connected to school and community life which results in better academic results and engagement at school. ... Students say that playing sports has helped them to develop a sense of work ethic and has increased their motivation to succeed.</p>
                         	<ul><li class="center"><a href="http://sout.org/general-rules-track-events/" class="button big special">Rules</a></li>
                             <li class="center"><a href="https://www.udemy.com/course/progaming/" class="button big special">Videos</a></li></ul>
                       </div>
                   </div>
                   
                   <div class="scrollspy row" id="sport1">
                   <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                       <h2 class="indigo-text text-darken-4 text-center">Carroms</h2>
                           <p class="text-center paraclass">Carrom help in increasing the logical reasoning power in children. The children would be playing and having fun at the same time, they would practice skills like counting, reading, visual perception, and eye hand coordination etc.</p>
                         	<ul><li class="center"><a href="https://www.mastersofgames.com/rules/carrom-rules.html" class="button big special">Rules</a></li>
                             <li class="center"><a href="http://www.carromcoaching.com/training" class="button big special">Videos</a></li></ul>
                       </div>
                     
                   </div>
 
                   <div class="scrollspy row" id="sport1">
                       
                   <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div> <div class="col">
                       <h2 class="indigo-text text-darken-4 text-center">Table Tennis</h2>
                           <p class="text-center paraclass"> By playing table tennis, your kids stay healthy, in good shape and have enhanced hand and eye coordination. The game also strengthens muscle and bones and promotes flexibility and agility. Its fun, easy to play and inexpensive: Table tennis can be played for fun or as a career.</p>
                         	<ul><li class="center"><a href="//www.pongfit.org/official-rules-of-table-tennis" class="button big special">Rules</a></li>
                             <li class="center"><a href="" class="button big special">Videos</a></li></ul>
                       </div>
                      
                   </div>

                   <div class="scrollspy row" id="photo1">
                       <div>
                           <img src={img1} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                       <h2 class="indigo-text text-darken-4 text-center">Badminton</h2>
                           <p class="text-center paraclass">badminton as a game is that it improves blood circulation to a greater extent, which in turn means that it strengthens the heart muscles to pump blood more profusely. A stronger heart becomes a healthy heart as it causes unclogging of the arterial walls and reduction of bad cholesterol</p>
                         	<ul><li class="center"><a href="https://blog.decathlon.in/articles/badminton-basic-rules-and-regulations" class="button big special">Rules</a></li>
                             <li class="center"><a href="https://www.udemy.com/course/play-better-badminton/" class="button big special">Videos</a></li></ul>
                       </div>
                   </div>
                   
                   <div class="scrollspy row" id="sport1">
                   <div>
                           <img src={img2} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Baseball</h2>
                           <p class="text-center paraclass">Baseball strengthens the muscles of the heart, arms, and legs, and improves hand-eye coordination. Baseball athletes receive many physical and mental benefits while participating in the game. Discover four benefits of playing baseball or softball that helps maintain a healthy lifestyle</p>
                         	<ul><li class="center"><a href="https://www.rulesofsport.com/sports/baseball.html" class="button big special">Rules</a></li>
                             <li class="center"><a href="https://www.udemy.com/topic/baseball/" class="button big special">Videos</a></li></ul>
                       </div>
                       
                   </div>
                   
                   <div class="scrollspy row" id="acad1">
                       <div>
                           <img src={img3} alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Tennis</h2>
                           <p class="text-center paraclass">Tennis is a good sport for maintaining health, fitness, strength and agility. It also has social and psychological benefits. You can play with a club or with friends and family as a social activity. Make sure you have plenty of fluids on hand and rehydrate regularly.</p>
                         	<ul><li class="center"><a href="https://www.rulesofsport.com/sports/tennis.html" class="button big special">Rules</a></li>
                             <li class="center"><a href="https://www.udemy.com/topic/tennis/" class="button big special">Videos</a></li></ul>
                       </div>
                   </div>
                   
                   
                  
          </section> 
            </div>
        )
    }
}