import React from 'react'
import "./Home.css"
import need from "../../assets/need-to.avif"
import ferrari from "../../assets/ferrari.jpg"
import new_logo from "../../assets/new-logo.webp"
import emg from "../../assets/c.webp"
import ferr from "../../assets/ferr.jpeg"
import imag from "../../assets/imag.jpeg"
import sergio from "../../assets/skysports-sergio-perez-f1-red-bull_5282811.jpg"
import ham from "../../assets/ham.webp"
import last from "../../assets/728f62421e4cb834b4a1ef4a6a808f28.jpeg"
import max from "../../assets/Max is Built Different 😤.mp4"
import excited from "../../assets/Does ‘Excited’ Exist in Finnish_ 🤔.mp4"
import back from "../../assets/videoplayback.mp4"
import yuki from "../../assets/Yuki Sprinting To Avoid A Shower 🤣 - FORMULA 1 (480p, h264, youtube).mp4"
import franco from "../../assets/Franco Colapinto From Buenos Aires To F1 💪 - FORMULA 1 (480p, h264, youtube).mp4"

export default function 
() {
  return (
    <>
      <br></br>
      <h1>SPOTLIGHT</h1>
      <div className="spots">
        {/* Card Left */}
        <div className="card" style={{width: '18rem'}}>
          <img src={ferr} className="card-img-top"></img>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          </div>
        </div>

        <div className="carousel">  
        {/* Carousel */}
        <div>
          <div className="container">
            <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
              {/* Indicators */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to={0} className="active" />
                <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to={1} />
                <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to={2} />
              </div>
              {/* Carousel slides */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={need}></img>
                  <div className="hover-overlay">
                    <div className="hover-text">
                      <h3>Majestic Mountains</h3>
                      <p>Discover the breathtaking beauty of towering peaks and pristine wilderness. These ancient giants have stood for millions of years, offering adventure and tranquility to all who visit.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={new_logo}></img>
                  <div className="hover-overlay">
                    <div className="hover-text">
                      <h3>Serene Forest Lake</h3>
                      <p>A hidden gem nestled deep within the forest, this crystal-clear lake reflects the surrounding trees like a perfect mirror, creating a peaceful sanctuary away from the world.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={ferrari}></img>
                  <div className="hover-overlay">
                    <div className="hover-text">
                      <h3>Endless Ocean</h3>
                      <p>Where the sea meets the sky, endless possibilities await. The rhythmic waves carry stories from distant shores, reminding us of the vast beauty that covers our planet.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        </div>

        {/* Card Right */}
        <div className="card" style={{width: '18rem'}}>
          <img src={emg}></img>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>

        </div>
      </div>

      <br></br>

      <h1>NEWS</h1>
      <div className="news">
        <div className="first2">
        {/* Card 1 */}
        <div className="news-card mb-3" style={{maxWidth: '540px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imag} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card mb-3" style={{maxWidth: '540px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={sergio} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="second2">
        {/* Card 3 */}
        <div className="news-card mb-3" style={{maxWidth: '540px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={ham} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="news-card mb-3" style={{maxWidth: '540px'}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={last} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="latest-moments">
        <h1>Latest Moments</h1>
        <div className="vids">
          <video className="player" controls src={max}>1</video>
          <video className="player" controls src={excited}>2</video>
          <video className="player" controls src={back}>3</video>
          <video className="player" controls src={yuki}></video>
          <video className="player" controls src={franco}></video>
        </div>      
      </div>  
    </>
  )
}
