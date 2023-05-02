import React from "react";
import equilibrium from "./images/image-equilibrium.jpg";
import ethicon from "./images/icon-ethereum.svg"
import clock from "./images/icon-clock.svg"
import profile from "./images/image-avatar.png"
import eye from "./images/icon-view.svg"

function NFTPreview() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card">


                    <div className="preview_nft">
                    <img src={equilibrium} className="card-img-top img-fluid nft" alt="Nft" />
                    
                        <div class="overlay">
                            <img src={eye} alt="View"/>
                        </div>
                        
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Equilibrium #3429</h5>
                            <p className="card-text">Our Equilibrium collection promotes balance and calm.</p>
                        <div className="eth">
                            <div className="ethicon">
                                <img src={ethicon} alt="Ethereum" className="Ethereum" />
                                <span className="quantity"> 0.041 ETH</span>
                            </div>

                            <div className="clock">
                                <img src={clock} alt="watch" className="watch" />
                                <span className="days">3 days left</span>
                            </div>

                        </div>
                    </div>
                    <footer className="preview__footer">
                        <div className="preview__footer-avatar">
                            <img src={profile} alt="Avatar" className="avatar"/>
                        </div>

                        <span className="preview__footer-author">Creation of
                            <a href="/" target="_blank" className="name">Jules Wyvern</a>
                        </span>
                    </footer>
                </div>


            </div>
        </div>
  );
};

export default NFTPreview;