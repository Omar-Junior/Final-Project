import React from 'react'
import "./Teams.css"
import ferrari from "../../assets/f1-ferr.avif"
import mclaren from "../../assets/f1-mc.avif"
import mercedes from "../../assets/f1-merc.avif"
import redbull from "../../assets/f1-rb.avif"
import williams from "../../assets/f1-will.avif"
import racebulls from "../../assets/f1-raceb.avif"
import astonmartin from "../../assets/f1-aston.avif"
import ks from "../../assets/f1-ks.avif"
import haas from "../../assets/f1-haas.avif"
import alpine from "../../assets/f1-alpine.avif"

export default function Teams() {
  return (
    <>
        <br></br>
        <h1>Teams</h1>
        <div className="team d-flex">
        <div className="teams d-flex">
            <div className="ferrari">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={ferrari} className="card-img-top" alt="Team Image" />
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

            <div className="mclaren">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={mclaren} className="card-img-top" alt="Team Image" />
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

            <div className="mercedes">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={mercedes} className="card-img-top" alt="Team Image" />
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

            <div className="redbull">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={redbull} className="card-img-top" alt="Team Image" />
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

            <div className="williams">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={williams} className="card-img-top" alt="Team Image" />
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

            <div className="racebulls">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={racebulls} className="card-img-top" alt="Team Image" />
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

            <div className="astonmartin">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={astonmartin} className="card-img-top" alt="Team Image" />
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

            <div className="ks">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={ks} className="card-img-top" alt="Team Image" />
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

            <div className="haas">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={haas} className="card-img-top" alt="Team Image" />
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

            <div className="alpine">
                <div className="card image-hover-card border-0">
                    <div className="card-img-container">
                        <div className="placeholder-image">
                            <img src={alpine} className="card-img-top" alt="Team Image" />
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
