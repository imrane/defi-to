import React from 'react'
import PropTypes from 'prop-types'

const Speakers = ({
  title,
  description,
  speakers
}) => (
    <div id="speakers" className="section section_finish">
      <div className="section__center center">
        <div className="section__head">
          <div className="section__title wow fadeInUp">{title}</div>
          <div className="section__content wow fadeInUp">
            <p>{description}</p>
          </div>
        </div>
        <div className="section__body">
          <div className="users">
            {speakers && speakers.map((speaker, i) => (
              <div key={i} className="users__col wow fadeInUp">
                <div className="users__item">
                  <div className="users__preview">
                    <img src={speaker.image.childImageSharp.fluid.src} alt="user" className="users__pic" />
                  </div>
                  <div className="users__wrap">
                    <div className="users__name">{speaker.name}</div>
                    <div className="users__text">{speaker.role}</div>
                    <div className="users__text">{speaker.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

Speakers.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      company: PropTypes.string,
      image: PropTypes.object
    })
  )
}

export default Speakers