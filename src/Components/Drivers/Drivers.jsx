import React from 'react'
import './Drivers.css'
import lewis from "../../assets/lewis.jpg"
import charles from "../../assets/charles.png"
import norris from "../../assets/norris.png"
import piastri from "../../assets/piastri.png"
import russel from "../../assets/russel.png"
import kimi from "../../assets/kimi.png"
import lawson from "../../assets/lawson.png"
import hadjar from "../../assets/hadjar.png"
import verstappen from "../../assets/verstappen.png"
import tsunoda from "../../assets/tsunoda.png"
import nico from "../../assets/nico.png"
import gabriel from "../../assets/gabriel.png"
import ocon from "../../assets/ocon.png"
import oliver from "../../assets/oliver.png"
import albon from "../../assets/albon.png"
import sainz from "../../assets/sianz.png"
import alonso from "../../assets/alonso.png"
import stroll from "../../assets/stroll.png"


export default function Drivers() {
  return (
    <>
    <br />
    <h1>F1 Drivers</h1>
    <div className="drivers">
      <div className="container">
        <div className="cards-container">
          {/* lewis */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                  <img src={lewis} alt="Lewis Hamilton" className="card-img-top" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
              </div>
              <div className="hover-overlay">
                  <div className="hover-text">
                      <h4>Hidden Content</h4>
                      <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                  </div>  
              </div>      
              </div>
          </div>

          {/* Charles */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={charles} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Norris */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={norris} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Piastri */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={piastri} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Russel */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={russel} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kimi */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={kimi} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hadjar */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={hadjar} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lawson */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={lawson} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Verstappen */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={verstappen} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tsunoda */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={tsunoda} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nico */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={nico} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Gabriel */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={gabriel} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ocon */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={ocon} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Oliver */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={oliver} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Albon */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={albon} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sainz */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={sainz} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alonso */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={alonso} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stroll */}
          <div className="card image-hover-card border-0">
            <div className="card-img-container">
              <div className="placeholder-image">
                <img src={stroll} alt="Lewis Hamilton" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div className="hover-overlay">
                <div className="hover-text">
                  <h4>Hidden Content</h4>
                  <p>This text appears when you hover over the image! You can add any content here - descriptions, links, or additional information.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
