import React from 'react'
import "./eightpage.css"

const Eighthpage = () => {
  return (
    <div className='eight-page-main-container'>
      <div className="main-inner-div">
        <div className="ratingDiv">
          <div className="scoreDiv">
            <p className='boldpara'>4.8</p>
            <div className='sidebar'>
              <p>app</p>
              <p>store</p>
            </div>
          </div>
          <div className="scoreDiv">
          <p className='boldpara'>4.7</p>
            <div className='sidebar'>
              <p>play</p>
              <p>store</p>
            </div>
          </div>
        </div>
        <div className="starDiv">
          <div className="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <div className="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
          </div>
        </div>
        <div className="storeDiv">
          <div className="buttonCon">
            <button>Download the app</button>
          </div>
          <div className="buttonCon">
          <button>Download the app</button>
          </div>
        </div>
        <div className="paraDiv"></div>
      </div>
    </div>
  )
}

export default Eighthpage
