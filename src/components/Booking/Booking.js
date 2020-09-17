import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Booking.css'
import travelPlace from '../../assets/fakeData'

const Booking = () => {
    // console.log(travelPlace);
    const { id } = useParams();

    const matchLocation = travelPlace.find(loc => loc.id === parseInt(id));

    return (
        <div className="booking">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="place">
                            <h1>{matchLocation.name}</h1>
                            <p>{matchLocation.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="book">
                            <label htmlFor="">
                                Origin <br />
                                <input type="text" />
                            </label><br />
                            <label htmlFor="">
                                Destination <br />
                                <input type="text" defaultValue={matchLocation.name} />
                            </label><br />

                            <label htmlFor="">
                                From <br />
                                <input type="date" />
                            </label>
                            <label htmlFor="">
                                To <br />
                                <input type="date" />
                            </label><br />
                            <Link to={"/confirm/" + id}><button>Start Booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;