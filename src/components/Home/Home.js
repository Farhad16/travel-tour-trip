import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import travelPlace from '../../assets/fakeData'
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const [sajek, sreemongol, sundarban] = travelPlace;

    return (
        <div className="contain">
            <div id="carouselExampleControls" className="carousel slide pink-bg" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row align-items-center">
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-4">
                                <h1 className="placeName">{sajek.name}</h1>
                                <p>
                                    {sajek.description}
                                </p>
                                <Link to={"/booking/" + sajek.id}>
                                    <button className="buy-now-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></button>
                                </Link>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <img src={sajek.img} className="d-block w-80 h-80" alt="..." />
                                <h1 className="title">{sajek.name}</h1>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-4">
                                <h1 className="placeName">{sreemongol.name}</h1>
                                <p>
                                    {sreemongol.description}
                                </p>
                                <Link to={"/booking/" + sreemongol.id}>
                                    <button className="buy-now-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></button>
                                </Link>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <img src={sreemongol.img} className="d-block w-80" alt="..." />
                                <h1 className="title">{sreemongol.name}</h1>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-md-2">

                            </div>
                            <div className="col-md-4">
                                <h1 className="placeName">{sundarban.name}</h1>
                                <p>
                                    {sundarban.description}
                                </p>
                                <Link to={"/booking/" + sundarban.id}>
                                    <button className="buy-now-btn">Booking <FontAwesomeIcon icon={faArrowRight} /></button>
                                </Link>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <img src={sundarban.img} className="d-block w-80" alt="..." />
                                <h1 className="title">{sundarban.name}</h1>
                            </div>
                            <div className="col-md-2">

                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div >
        </div >
    );
};

export default Home;