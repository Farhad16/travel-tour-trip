import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../assets/fakeData'
import './ConfimBook.css'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const ConfirmBook = (props) => {
    const { id } = useParams()
    const matchPlace = fakeData.find(loc => loc.id === parseInt(id));
    const hotel = matchPlace.hotels

    const mapStyles = {
        width: '90%',
        height: '100%',
        borderRadius: '10px'
    };

    return (
        <div className="hotel">
            <h2>Stay in {matchPlace.name}</h2>
            <div className="row">
                <div className="col-md-6 ">
                    {
                        hotel.map(hotel => <div key={hotel.id} className="hotelImg space-between">
                            <img className="hotelImg" src={hotel.img} alt="" />
                            <div className="hotelDetails">
                                <h5>{hotel.name}</h5>
                                <p>{hotel.capacity}</p>
                                <p>{hotel.type}</p>
                                <p>{hotel.benefit}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className="col-md-6">
                    <Map
                        google={props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 47.444, lng: -122.176 }}
                    >
                        <Marker position={{ lat: 48.00, lng: -122.00 }} />
                    </Map>
                </div>
            </div>
        </div >
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEu4X_Ixgh9vtHUrMLlF1qhOPG7hWlSIk'
})(ConfirmBook);
