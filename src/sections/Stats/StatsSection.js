import React from 'react';
import './statssection.css'

export default function Stats () {
  return (
    <div className="stats__container">
    <div className="stats__col"  data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2" data-scroll-class="appear" data-scroll-repeat="true">
    <div className="stats__top__col">
      <span className="stats__numbers">300+</span>
      <h3 className="stats__des">Building property owners <br></br>who are satisfed </h3>

    </div>
    <div className="stats__bottom__col">
      <span className="stats__numbers">100+</span>
      <h3 className="stats__des">Inspirational project to <br></br>choose from us </h3>
    </div>
    </div>
    <div className="stats__col2">
   
    </div>
    <div className="stats__col" data-scroll data-scroll-direction="horizontal" data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true">
    <div className="stats__top__col">
      <span className="stats__numbers">400+</span>
      <h3 className="stats__des">Building that have been <br></br>realized by us </h3>

    </div>
    <div className="stats__bottom__col">
      <span className="stats__numbers">30</span>
      <h3 className="stats__des">Partner branches who have  <br></br>collaborated with </h3>
    </div>
    </div>
    </div>
  
    
  );
}
