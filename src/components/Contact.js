import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const Contact = class extends React.Component {
  render() {
    return (
      <div className="contacts">
        <div id="map" className="contacts__map">
          <Map
            google={this.props.google}
            zoom={16}
            scrollwheel={false}
            initialCenter={{ lat: 43.6444891, lng: -79.4010 }}
            mapTypeControl={false}
            fullScreenControl={false}
            streetViewControl={false}
          >
            <Marker position={{ lat: 43.6444891, lng: -79.4010 }} />
          </Map>
        </div>
        <div id="contact" className="contacts__wrap">
          <div className="contacts__center center">
            <div className="contacts__col">
              <div className="contacts__title">
                <p>{this.props.venue.location.address}</p>
                <p>{this.props.venue.location.city}</p>
                <p>{this.props.venue.location.postal}</p>
              </div><a href="#" className="contacts__btn btn">GET DIRECTIONS</a></div>
            <div className="contacts__col">
              <div className="contacts__item">
                <div className="contacts__type">PHONE</div><a href="tel:5682340926" className="contacts__text">{this.props.contact.phone}</a></div>
              <div className="contacts__item">
                <div className="contacts__type">GENERAL ENQUIRES</div><a href="mailto:info@conference.com" className="contacts__text">{this.props.contact.general_email}</a></div>
              <div className="contacts__item">
                <div className="contacts__type">FOR PRESS</div><a href="mailto:press@conference.com" className="contacts__text">{this.props.contact.general_email}</a></div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAGA_JI2CSY4prpar7Lf4sWHhjLk-qt7QI&"
})(Contact)