import React from 'react'
import './parallax.css'

function Parralax() {
  return (
    <div className="parallax__container" data-scroll data-scroll-direction="vertical" data-scroll-speed="2" data-scroll-class="appear" data-scroll-repeat="true">
    <div className="parallax">
      <div className="parallax__text ">
      <h1>BE WITH</h1>
      <h1>OUR VISION</h1>
      </div>
      </div>
    </div>
  )
}

export default Parralax
