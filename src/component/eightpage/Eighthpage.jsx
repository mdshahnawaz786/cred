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
            <button className='dwnldbtn'>Download the app</button>
          </div>
          <div className="buttonCon">
          <button className='dwnldbtn'>Download the app</button>
          </div>
        </div>
        <div className="paraDiv">
        <p>"this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the</p> 
        <p>plastic money users. keeps me in financial discipline and helps me take the billing and payment worries </p>
        <p> out of my mind"</p>
        <br />
        <br />
        <p>ranesh bhattacharya</p>
        </div>
      </div>
    </div>
  )
}

export default Eighthpage
