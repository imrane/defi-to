import React from 'react'
import PropTypes from 'prop-types'
import { Link, withPrefix } from 'gatsby'

const bgUrl = 'https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const background = {
  backgroundImage: `url(${bgUrl})`
}

const Hero = ({
  title,
  image,
  venue
}) => (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover !important"
    }} className="main">
      <div className="main__center center">
        <div className="main__title">{title}</div>
        <div className="main__row">
          <div className="main__col">
            <div className="main__head">WHEN</div>
            <div className="main__text">
              <p>{venue.date}</p>
              <p>{venue.time}</p>
            </div>
          </div>
          <div className="main__col">
            <div className="main__head">WHERE</div>
            <div className="main__text">
              <p>{venue.city}</p>
            </div>
            <div className="main__content">
              <p>{venue.location.name}</p>
            </div>
          </div>
          <div className="main__col">
            <div className="main__head">WHO</div>
            <div className="main__text">
              <p>{venue.audience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  venue: PropTypes.shape({
    date: PropTypes.string,
    time: PropTypes.string,
    city: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
      lat: PropTypes.number,
      long: PropTypes.number,
      address: PropTypes.string,
      city: PropTypes.string,
      postal: PropTypes.string
    }),
    audience: PropTypes.string
  })
}

export default Hero