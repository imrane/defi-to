import React from 'react'
import Layout from '../components/Layout2'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    console.log('constructor');
  }
  componentDidMount() {
    console.log('mounted');
    this.handleLoad();
  }
  handleLoad() {
    console.log('test');
    document.body.className += " loaded";
  }
  render() {
    return (
      <Layout>
      </Layout>
    )
  }
}

export default HomePage

