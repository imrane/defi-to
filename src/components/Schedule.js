import React from 'react'
import PropTypes from 'prop-types'

const Schedule = ({ schedule }) => (
  <div id="schedule" className="section section_schedule">
    <div className="section__center center">
      <div className="section__head">
        <div className="section__title wow fadeInUp">{schedule.title}</div>
        <div className="section__content wow fadeInUp"><p>{schedule.description}</p></div>
      </div>
      <div className="section__body">
        <div className="schedule">
          {schedule.events && schedule.events.map((event, k) => (
            <div key={k} className="schedule__container">
              <div className="schedule__head schedule__head_red wow fadeInUp">{event.date}
                <sup className="schedule__th">th</sup>
              </div>
              <div className="schedule__body">
                {event.items && event.items.map((item, i) => (
                  <div key={i} className="schedule__row wow fadeInUp">
                    <div className="schedule__time">{item.start} - {item.end}</div>
                    <div className="schedule__wrap">
                      <div className="schedule__title">{item.title}</div>
                      <div className="schedule__text">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

)

export default Schedule