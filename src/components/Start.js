import React from 'react'
import PropTypes from 'prop-types'

const Start = ({ pitch }) => (
  <div className="section section_main section_start">
    <div className="section__center center">
      <div className="section__head">
        <div className="section__title wow fadeInUp">{pitch.title}</div>
        <div className="section__content wow fadeInUp">
          <p>{pitch.description}</p>
        </div>
      </div>
      <div className="section__action">
        <a href={pitch.primary_url} target="_blank"><button className="section__btn btn btn_lg btn_red_bg wow fadeInUp">Join Meetup</button></a>
        <a href={pitch.secondary_url} target="_blank" data-wow-delay=".2s" className="section__btn btn btn_lg btn_red wow fadeInUp">Register</a>
      </div>
    </div>
  </div>
)

Start.propTypes = {
  pitch: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
}

export default Start