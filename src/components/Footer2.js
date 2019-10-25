import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs')
      new WOW.WOW({ live: false }).init();
    }

    this.handleLoad();
  }
  handleLoad() {
    document.body.className += " loaded";
  }
  render() {
    return (
      <footer className="footer">
        <div className="footer__wrap">
          <div className="footer__center center center_lg">
            <div className="footer__text">Latest updates on DeFi in Toronto</div>
            <div className="footer__subscribe subscribe"><input type="text" placeholder="hello@defitoronto.org" className="subscribe__input" /><button className="subscribe__btn">Sign up</button></div>
          </div>
        </div>
        <div className="footer__wrap">
          <div className="footer__center center center_lg">
            <div className="footer__copyright">© 2019 DeFi Toronto</div>
            <div className="footer__right">
              <nav className="footer__nav">
                <a href="#" className="footer__link">Privacy</a>
                <a href="#" className="footer__link">Terms</a>
                <a href="#" className="footer__link">Press</a>
              </nav>
              <div className="footer__social social">
                <a href="www.google.com" className="footer__link">
                  <svg className="icon icon-facebook">
                    <use xlinkHref="../img/logo.svg" /></svg>
                </a>
                <a href="www.google.com" className="footer__link">
                  <svg className="icon icon-twitter"><use xlinkHref="../img/logo.svg" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer